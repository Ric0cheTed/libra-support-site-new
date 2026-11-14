const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');

// Exercise the real server components and central projection without installing
// a second runner. Every fixture uses a fresh module graph; no source is changed.
function graph() {
  const cache = new Map();
  function load(relative) {
    const base = path.resolve(root, relative);
    const file = [base, base + '.ts', base + '.tsx'].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    assert.ok(file, `Module resolves: ${relative}`);
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} }; cache.set(file, module);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
    const localRequire = name => name.startsWith('@/') ? load('src/' + name.slice(2)) : name.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), name))) : require(name);
    new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
    return module.exports;
  }
  return { load, people: load('src/content/people') };
}
const render = (component, props = {}) => renderToStaticMarkup(React.createElement(component, props));
function views(g) {
  return {
    preview: () => render(g.load('src/components/about/AboutTeamPreview').AboutTeamPreview, { section: g.load('src/content/about').aboutContent.teamPreview }),
    directory: () => render(g.load('src/app/about/team/team-content').default),
    card: props => render(g.load('src/components/ui/team-card').default, props),
  };
}

if (!process.argv.includes('--export')) {
  test('About preview uses central published profiles, not legacy names or biographies', () => {
    const g = graph(); const html = views(g).preview();
    assert.match(html, /Kelly Carpenter/); assert.match(html, /Nicola Szymik-Walters/);
    assert.doesNotMatch(html, /Jason Walters|Jason supports|Nicola brings leadership|Kelly is an experienced/);
  });
  test('shared staff card cannot publish a withheld record through caller-supplied name or flags', () => {
    const g = graph();
    assert.equal(views(g).card({ staffId: 'jason-walters', name: 'Jason Walters', role: 'Director', imageApproved: true, biographyApproved: true }), '');
    assert.equal(views(g).card({ staffId: 'not-a-catalogue-record', name: 'Unverified fixture' }), '');
  });
  test('published shared card resolves identity and source from the catalogue', () => {
    const g = graph(); const html = views(g).card({ staffId: 'kelly-carpenter', name: 'Caller override', role: 'Unverified override' });
    assert.match(html, /Kelly Carpenter/); assert.match(html, /Registered Manager/);
    assert.match(html, /https:\/\/www.cqc.org.uk\/location\/1-11688271981/);
    assert.doesNotMatch(html, /Caller override|Unverified override|\/images\/team\/staff-/);
  });
  test('both profile views keep their routes and contact links when every profile is unpublished', () => {
    const g = graph(); g.people.staffProfiles.forEach(person => { person.published = false; });
    const v = views(g);
    for (const html of [v.preview(), v.directory()]) assert.doesNotMatch(html, /Kelly Carpenter|Nicola Szymik-Walters|Jason Walters|\/images\/team\/staff-/);
    assert.match(v.preview(), /\/about\/team/); assert.match(v.directory(), /\/contact/);
    assert.match(v.directory(), /<h1/);
  });
  test('missing optional portraits and biographies render safely in both views', () => {
    const g = graph(); const person = g.people.staffProfiles[0];
    g.people.staffProfiles.splice(0, g.people.staffProfiles.length, { ...person, image: undefined, bio: undefined, biographyPermission: undefined });
    const v = views(g);
    for (const html of [v.preview(), v.directory(), v.card({ staffId: person.id })]) {
      assert.match(html, /Kelly Carpenter/); assert.doesNotMatch(html, /\/images\/team\/staff-|undefined|src=""/);
    }
  });
  test('unconfirmed optional content is stripped by the single public projection', () => {
    const g = graph();
    for (const person of g.people.getPublicStaff()) { assert.equal(person.image, undefined); assert.equal(person.bio, undefined); }
    const v = views(g);
    for (const html of [v.preview(), v.directory()]) assert.doesNotMatch(html, /music venues|video games|\/images\/team\/staff-/);
  });
  test('unknown role-verification sources fail closed in the central catalogue', () => {
    const g = graph(); const person = g.people.staffProfiles[0];
    assert.equal(g.people.getPublicStaff([{ ...person, sourceKey: 'unknown-fixture-source' }]).length, 0);
    assert.equal(g.people.getPublicStaff([{ ...person, verifiedOn: undefined }]).length, 0);
    assert.equal(g.people.staffProfiles.find(p => p.id === 'jason-walters').published, false);
  });
} else {
  test('clean static export contains no withheld profile, unapproved biography or portrait reference', () => {
    const g = graph(); const output = path.join(root, 'out'); assert.ok(fs.existsSync(output));
    const publicIds = new Set(g.people.getPublicStaff().map(p => p.id));
    const markers = [];
    for (const person of g.people.staffProfiles) {
      if (!publicIds.has(person.id)) markers.push(person.id, person.name);
      if (person.image && person.image.permission !== 'approved') markers.push(person.image.src);
      if (person.bio && person.biographyPermission !== 'approved') markers.push(person.bio);
    }
    // Legacy preview descriptions are not a second approved biography source.
    for (const person of g.load('src/content/about').aboutContent.teamPreview.people) if (person.description) markers.push(person.description);
    const normalize = text => text.replace(/\\u([a-f\d]{4})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16))).replace(/\\\//g, '/').replace(/&#x([a-f\d]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number(decimal))).replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').toLowerCase();
    const blocked = [...new Set(markers.map(normalize))];
    const files = [];
    function walk(dir) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, entry.name); if (entry.isDirectory()) walk(p); else if (entry.isFile()) files.push(p); } }
    walk(output); let textFiles = 0; let imageMetadataFiles = 0;
    for (const file of files) {
      if (!/\.(html|js|json|txt|xml|svg|map|webmanifest)$/i.test(file)) continue;
      textFiles++; const text = normalize(fs.readFileSync(file, 'utf8'));
      for (const marker of blocked) assert.ok(!text.includes(marker), `Withheld profile marker in ${path.relative(output, file)}: ${marker.slice(0, 60)}`);
    }
    // Original image bytes remain preserved. Inspect identifiable text metadata
    // in existing portrait files; do not infer identity from visual appearance.
    for (const person of g.people.staffProfiles.filter(p => !publicIds.has(p.id))) {
      if (!person.image) continue;
      const file = path.join(output, person.image.src.replace(/^\//, ''));
      if (!fs.existsSync(file)) continue;
      imageMetadataFiles++; const raw = fs.readFileSync(file);
      assert.ok(!raw.includes(Buffer.from(person.name, 'utf8')) && !raw.includes(Buffer.from(person.name, 'utf16le')), 'Withheld identity is absent from retained portrait text metadata');
    }
    for (const route of ['', 'about', 'about/team', 'careers/meet-team']) assert.ok(fs.existsSync(path.join(output, route, 'index.html')), `Existing staff-related route: /${route}`);
    for (const route of ['about', 'about/team']) {
      const html = fs.readFileSync(path.join(output, route, 'index.html'), 'utf8');
      for (const person of g.people.getPublicStaff()) assert.ok(html.includes(person.name), `Published staff appears on /${route}`);
    }
    const report = { result: 'PASS', textFiles, imageMetadataFiles, withheldProfiles: g.people.staffProfiles.filter(p => !publicIds.has(p.id)).map(p => p.id), publishedProfiles: [...publicIds], scope: 'Current local export HTML, serialized text, client scripts, schema and retained portrait text metadata only; not historical deployments, external CQC records or search indexes.' };
    if (process.env.LIBRA_STAFF_EXPORT_REPORT) fs.writeFileSync(process.env.LIBRA_STAFF_EXPORT_REPORT, JSON.stringify(report, null, 2));
  });
}

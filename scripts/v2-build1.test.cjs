const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(relative) {
  const file = path.resolve(root, relative);
  if (cache.has(file)) return cache.get(file).exports;
  const source = fs.readFileSync(file, 'utf8');
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const localRequire = (name) => name.startsWith('@/') ? load('src/' + name.slice(2) + '.ts') : require(name);
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const home = load('src/content/homepage.ts').homepageContent;

test('primary navigation exposes care, about, people, areas, careers, resources and contact', () => {
  const destinations = home.header.navItems.map((item) => item.href.replace(/\/$/, ''));
  for (const route of ['/services', '/about', '/about/team', '/areas', '/careers', '/resources', '/contact']) assert.ok(destinations.includes(route), route);
  const services = home.header.navItems.find((item) => item.href === '/services').subItems.map((item) => item.href);
  for (const service of home.servicesPreview.items) assert.ok(services.includes(service.href), service.href);
});
test('primary actions remain native enquiry and exact existing telephone destinations with matching names', () => {
  const phone = load('src/lib/business-profile.ts').BUSINESS_PROFILE.phones.primary;
  assert.equal(home.header.primaryCta.href, '/contact');
  assert.equal(home.hero.secondaryCta.href, phone.href);
  assert.ok(!home.hero.secondaryCta.ariaLabel || home.hero.secondaryCta.ariaLabel.includes(home.hero.secondaryCta.label));
});
test('mobile disclosure has a genuinely hidden closed state, Escape handling and focus restoration', () => {
  const header = read('src/components/layout/SiteHeader.tsx');
  assert.match(header, /hidden=\{!menuOpen\}/);
  assert.match(header, /Escape/);
  assert.match(header, /\.focus\(/);
  assert.doesNotMatch(header, /max-h-\[32rem\]/);
});
test('shared layout offers a skip target and no floating social overlay', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /href="#main-content"/);
  assert.match(layout, /id="main-content"/);
  assert.doesNotMatch(layout, /<SocialsButton/);
});
test('global design respects reduced motion and visible focus', () => {
  const css = read('src/styles/globals.css');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
});
test('regulatory model scopes current Good rating to Todmorden and separates uninspected Burnley', () => {
  assert.ok(fs.existsSync(path.join(root, 'src/content/regulation.ts')), 'branch regulatory model exists');
  const { regulation } = load('src/content/regulation.ts');
  assert.equal(regulation.todmorden.rating, 'Good');
  assert.match(regulation.todmorden.url, /1-11688271981/);
  assert.match(regulation.burnley.url, /1-28811023836/);
  assert.equal(regulation.burnley.rating, null);
  assert.equal(regulation.burnley.status, 'Not inspected yet');
});
test('resource catalogue has eight review-gated topics and only working existing links', () => {
  assert.ok(fs.existsSync(path.join(root, 'src/content/resources.ts')), 'typed catalogue exists');
  const { resourceTopics } = load('src/content/resources.ts');
  assert.equal(resourceTopics.length, 8);
  assert.equal(new Set(resourceTopics.map((topic) => topic.id)).size, 8);
  for (const topic of resourceTopics) {
    assert.equal(topic.status, 'planned');
    assert.ok(topic.reviewOwner);
    assert.ok(topic.existingHref.startsWith('/'));
    assert.ok(fs.existsSync(path.join(root, 'src/app', topic.existingHref, 'page.tsx')), topic.existingHref);
  }
  assert.ok(fs.existsSync(path.join(root, 'src/app/resources/page.tsx')));
  assert.match(read('src/app/sitemap.ts'), /'\/resources'/);
});
test('homepage retains useful sections and exposes resources, scoped regulation, people and services', () => {
  const page = read('src/app/page.tsx');
  for (const name of ['HomeHero', 'HomeServicesPreview', 'HomeWhyLibra', 'HomeCareProcess', 'HomeAreasCoverage', 'HomeCareCosts', 'HomeTeamSpotlight', 'HomeFaqTeaser', 'HomeFinalCta', 'HomeResourcesPreview', 'HomeRegulation']) assert.ok(page.includes('<' + name), name);
  assert.ok(home.hero.title.length < 85, 'short welcoming hero heading');
});
test('Todmorden promotion uses the untouched official downloadable JPG with a location link', () => {
  const card = read('src/components/home/HomeRegulation.tsx');
  assert.match(card, /cqc-official-good\.jpg/);
  assert.match(card, /href=\{todmorden\.url\}/);
  const crypto = require('node:crypto');
  const bytes = fs.readFileSync(path.join(root, 'public/images/cqc-official-good.jpg'));
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), 'd06beeaca59ba4b8af1732a5d0013fddb0f2ad76c62839222307606c686f0986');
});

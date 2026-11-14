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
  const module = { exports: {} }; cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const localRequire = name => name.startsWith('@/') ? load('src/' + name.slice(2) + '.ts') : name.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), name + '.ts'))) : require(name);
  new Function('require','module','exports',code)(localRequire,module,module.exports);
  return module.exports;
}
function guides() { assert.ok(fs.existsSync(path.join(root,'src/content/guides.ts')), 'active guide catalogue exists'); return load('src/content/guides.ts'); }
const read = p => fs.readFileSync(path.join(root,p),'utf8');

test('eight useful guidance topics have source-checked reusable content', () => {
  const { careGuides } = guides();
  assert.deepEqual(careGuides.map(g=>g.slug), ['starting-home-care','understanding-care-fees','care-funding','dementia-support','respite-care','choosing-a-care-provider','care-quality-regulation','support-for-relatives']);
  for (const g of careGuides) {
    assert.equal(g.scope,'England'); assert.match(g.sourcesCheckedOn,/^\d{4}-\d{2}-\d{2}$/);
    assert.ok(g.quickAnswer.length>80); assert.ok(g.sections.length>=3); assert.ok(g.faqs.length>=2); assert.ok(g.relatedServices.length>=1);
    assert.equal(new Set(g.sections.map(s=>s.id)).size,g.sections.length);
    for(const section of g.sections) { assert.ok(section.paragraphs.length); assert.ok(section.sourceKeys.length); }
  }
});
test('every guidance section and FAQ points to a retrieved primary source', () => {
  const { careGuides } = guides(); const { guidanceSources } = load('src/content/guidance-sources.ts');
  for(const g of careGuides) for(const item of [...g.sections,...g.faqs]) for(const key of item.sourceKeys) {
    const s=guidanceSources[key]; assert.ok(s,key); assert.ok(s.id>0); assert.ok(s.checkedOn);
    const u=new URL(s.url); assert.equal(u.protocol,'https:'); assert.ok(/(^|\.)(nhs\.uk|gov\.uk|cqc\.org\.uk)$/.test(u.hostname),u.hostname);
  }
});
test('funding distinguishes England-wide guidance and two local authorities without invented prices', () => {
  const { careGuides }=guides(); const funding=careGuides.find(g=>g.slug==='care-funding'); const copy=JSON.stringify(funding);
  assert.match(copy,/Calderdale/); assert.match(copy,/Lancashire/); assert.match(copy,/financial assessment/i); assert.doesNotMatch(copy,/£|guaranteed funding|everyone qualifies/i);
});
test('guidance content never introduces a live-in Libra offering or personal advice commitment', () => {
  for(const g of guides().careGuides) {
    const copy=JSON.stringify(g); assert.doesNotMatch(copy,/\/services\/live-in-care|guaranteed availability|we diagnose|we guarantee/i);
    for(const link of g.relatedServices) assert.ok(fs.existsSync(path.join(root,'src/app',link.href,'page.tsx')),link.href);
  }
});
test('articles are statically exportable and schema matches visible guidance identity', () => {
  guides(); assert.ok(fs.existsSync(path.join(root,'src/app/resources/[slug]/page.tsx')));
  const route=read('src/app/resources/[slug]/page.tsx'); assert.match(route,/generateStaticParams/); assert.match(route,/dynamicParams = false/); assert.match(route,/notFound/);
  const { getGuideStructuredData }=load('src/lib/guidance-seo.ts');
  for(const g of guides().careGuides) { const data=getGuideStructuredData(g); assert.equal(data['@type'],'Article'); assert.equal(data.headline,g.title); assert.equal(data.url,`https://libra-support.co.uk/resources/${g.slug}/`); assert.ok(data.citation.length); assert.doesNotMatch(JSON.stringify(data),/aggregateRating|medicalSpecialty|reviewedBy/); }
});
test('progressive staff publication fails closed for unverified identity and permissions', () => {
  assert.ok(fs.existsSync(path.join(root,'src/content/people.ts')), 'structured staff records exist');
  const { staffProfiles, getPublicStaff }=load('src/content/people.ts');
  assert.equal(staffProfiles.length,3); assert.ok(staffProfiles.some(p=>!p.published));
  const publicStaff=getPublicStaff(); assert.ok(publicStaff.length>=1);
  assert.ok(publicStaff.every(p=>!p.image&&!p.bio));
  const person=staffProfiles.find(p=>p.identityVerified);
  assert.equal(getPublicStaff([{...person,published:false}]).length,0);
  assert.equal(getPublicStaff([{...person,identityVerified:false,published:true}]).length,0);
  const denied=getPublicStaff([{...person,published:true,image:{src:'/images/team/staff-1.webp',alt:'Existing portrait',permission:'unconfirmed'},bio:'Unapproved biography',biographyPermission:'unconfirmed'}])[0];
  assert.equal(denied.image,undefined); assert.equal(denied.bio,undefined);
  const approved=getPublicStaff([{...person,published:true,image:{src:'/images/team/staff-1.webp',alt:'Approved portrait',permission:'approved'},bio:'Approved biography',biographyPermission:'approved'}])[0];
  assert.ok(approved.image); assert.equal(approved.bio,'Approved biography');
});
test('changed service/area templates offer relevant guidance and availability qualification', () => {
  for(const p of ['src/components/services/ServicePageTemplate.tsx','src/components/areas/AreaPageTemplate.tsx']) { assert.match(read(p),/RelatedGuides/); assert.match(read(p),/availability/i); }
  const hub=read('src/app/resources/page.tsx'); assert.match(hub,/careGuides/); assert.match(hub,/frequently-asked-questions/); assert.match(hub,/care-fees-funding/); assert.match(hub,/local-availability/);
});

test('hero imagery rejects misleading legacy service graphics and the unverified Burnley rating composite', () => {
  assert.ok(fs.existsSync(path.join(root,'src/content/presentation-assets.ts')), 'reviewed hero asset selection exists');
  const { getHeroPresentation }=load('src/content/presentation-assets.ts');
  for(const src of ['/images/respite-care.webp','/images/live-in-care.webp','/images/burnley-office-frontage.png','/images/hero-3.webp']) {
    const selected=getHeroPresentation(src);
    assert.equal(selected.src,'/images/hero.jpg');
    assert.match(selected.caption,/not a photograph of Libra staff/i);
    assert.doesNotMatch(selected.alt,/Burnley|Libra staff|drawing/i);
  }
  const premises=getHeroPresentation('/images/about-team.webp');
  assert.equal(premises.src,'/images/about-team.webp'); assert.match(premises.alt,/premises/);
});

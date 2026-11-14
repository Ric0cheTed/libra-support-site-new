const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');

function graph() {
  const cache = new Map();
  const mocks = {
    'next/font/google': { Lexend: () => ({ variable: 'fixture-font' }) },
    'next/navigation': { usePathname: () => '/contact/' },
    'next/script': { default: props => React.createElement('script', props) },
  };
  function load(relative) {
    const base = path.resolve(root, relative);
    const file = [base, base + '.ts', base + '.tsx', base + '.js'].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!file) return {};
    if (file.endsWith('.css')) return {};
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} }; cache.set(file, module);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
    const localRequire = name => mocks[name] ?? (name === '@next/third-parties/google' ? load('vendor/next-third-parties/google.js') : name.startsWith('@/') ? load('src/' + name.slice(2)) : name.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), name))) : require(name));
    new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
    return module.exports;
  }
  return { load };
}
function feature(g, file, name) {
  const value = g.load(file)[name];
  assert.equal(typeof value, 'function', `${name} must implement the specified public behaviour`);
  return value;
}
const valid = { name: 'Build3A Fictional Test', email: 'offline@example.test', phone: '+44 (0)1234 567890', message: 'LOCAL TEST ONLY. No care information.' };
const render = (component, props = {}) => renderToStaticMarkup(React.createElement(component, props));

test('SSR contact form cannot natively expose any personal field before hydration', () => {
  const html = render(graph().load('src/app/contact/contact-form').ContactForm);
  assert.match(html, /<form[^>]*method="post"/i);
  assert.match(html, /<fieldset[^>]*disabled=""/i);
  assert.match(html, /<noscript>/);
  assert.match(html, /tel:01706817672/);
  assert.match(html, /mailto:/);
  assert.doesNotMatch(html, /action="(?:javascript:|https?:)/i);
});
test('contact controls have bounded input, help and stable field-error associations', () => {
  const html = render(graph().load('src/app/contact/contact-form').ContactForm);
  for (const [id, limit] of [['name',100],['email',254],['phone',40],['message',2000]]) {
    assert.match(html, new RegExp(`(?:input|textarea)[^>]*id="${id}"[^>]*maxLength="${limit}"`, 'i'));
  }
  assert.match(html, /contact-help/);
  assert.match(html, /aria-describedby=/);
  assert.match(html, /health|medical/i);
});
test('shared contact branch phone links derive accessible names from visible labels', () => {
  const g = graph(); const section = g.load('src/content/contact').contactContent.location;
  const html = render(g.load('src/components/contact/ContactLocationSection').ContactLocationSection, { section, mapEmbedUrl: 'https://maps.invalid/blocked' });
  const calls = [...html.matchAll(/<a\b[^>]*href="tel:01706817672"[^>]*>[\s\S]*?<\/a>/g)].map(x => x[0]);
  assert.ok(calls.length >= 2);
  for (const anchor of calls) assert.doesNotMatch(anchor, /aria-label="Call Libra Support Services on/);
});
test('actual contact map renderer makes no default embedded request and preserves directions', () => {
  const g = graph(); const section = g.load('src/content/contact').contactContent.location;
  const html = render(g.load('src/components/contact/ContactLocationSection').ContactLocationSection, { section, mapEmbedUrl: 'https://maps.invalid/blocked' });
  assert.doesNotMatch(html, /<iframe|src="https:\/\/maps.invalid/);
  assert.match(html, /directions/i);
  for (const line of section.addressLines) assert.ok(html.includes(line));
});
test('actual root layout mounts neither analytics scripts nor collector by default', () => {
  const g = graph(); const tree = g.load('src/app/layout').default({ children: 'Local content' });
  const seen = [];
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type?.name) seen.push(node.type.name);
    React.Children.forEach(node.props?.children, walk);
  }
  walk(tree);
  assert.ok(!seen.includes('GoogleAnalytics') && !seen.includes('AnalyticsEvents'), 'Optional components must be absent, not merely claim to be off');
});
test('direct analytics calls are inert by default even when a gtag function already exists', () => {
  const calls = []; const old = global.window;
  global.window = { gtag: (...args) => calls.push(args) };
  try {
    const ga = graph().load('src/lib/ga');
    ga.trackEvent('click_call');
    ga.trackEvent('unapproved_event', { email: 'PRIVATE-SENTINEL@example.test', link_url: '/contact/?message=PRIVATE-SENTINEL' });
    assert.deepEqual(calls, []);
  } finally { if (old === undefined) delete global.window; else global.window = old; }
});
test('analytics schema rejects arbitrary, personal, recipient, health and URL data', () => {
  const build = feature(graph(), 'src/lib/ga', 'buildAnalyticsEvent');
  assert.deepEqual(build('enquiry_accepted', { form_name: 'contact' }), { name: 'enquiry_accepted', params: { form_name: 'contact' } });
  assert.deepEqual(build('click_call'), { name: 'click_call', params: {} });
  for (const key of ['name','email','phone','message','enquiry_type','destination_email','link_url','link_text','page_location']) assert.equal(build('enquiry_accepted', { form_name: 'contact', [key]: 'PRIVATE-SENTINEL' }), null);
  assert.equal(build('random_event'), null);
  assert.equal(build('enquiry_accepted', { form_name: 'care' }), null);
  assert.equal(build('click_call', []), null);
});
test('canonical contact click classification strips query/fragment and rejects other origins', () => {
  const classify = feature(graph(), 'src/lib/ga', 'getContactClickEvent');
  for (const href of ['/contact','/contact/','/contact/?message=PRIVATE-SENTINEL','/contact/#PRIVATE-SENTINEL','https://libra-support.co.uk/contact/']) assert.equal(classify(href), 'click_request_callback');
  assert.equal(classify('https://other.invalid/contact/'), null);
  assert.equal(classify('/resources/'), null);
  assert.equal(classify('tel:01706817672'), 'click_call');
  assert.equal(classify('mailto:public@example.test?subject=PRIVATE-SENTINEL'), 'click_email');
});
test('future vendor configuration disables automatic pageviews and raw browsing context', () => {
  const html = render(graph().load('vendor/next-third-parties/google.js').GoogleAnalytics, { gaId: 'G-OFFLINE-FIXTURE' });
  assert.match(html, /send_page_view\s*:\s*false/);
  assert.match(html, /page_location/);
  assert.doesNotMatch(html, /window\.location|document\.title|document\.referrer/);
});
test('validation permits genuine Unicode names and international phone formatting', () => {
  const validate = feature(graph(), 'src/lib/contact-safety', 'validateContactValues');
  assert.deepEqual(validate({ ...valid, name: "Zoë O’Test", phone: '+353 (1) 234-5678' }), {});
});
test('validation rejects whitespace-only required fields without changing entered values', () => {
  const validate = feature(graph(), 'src/lib/contact-safety', 'validateContactValues');
  const input = { ...valid, name: ' ', email: ' ', message: '\n ' }; const before = { ...input };
  const errors = validate(input); assert.ok(errors.name && errors.email && errors.message); assert.deepEqual(input, before);
});
test('validation enforces each boundary and rejects invalid email/header control data', () => {
  const validate = feature(graph(), 'src/lib/contact-safety', 'validateContactValues');
  for (const [key,limit] of [['name',100],['email',254],['phone',40],['message',2000]]) assert.ok(validate({ ...valid, [key]: 'a'.repeat(limit+1) })[key]);
  assert.ok(validate({ ...valid, email: 'not-an-email' }).email);
  assert.ok(validate({ ...valid, email: 'safe@example.test\r\nBcc:other@example.test' }).email);
  assert.deepEqual(validate({ ...valid, phone: '' }), {});
});
test('provider acceptance is an ACK result, not an invented inbox receipt', async () => {
  const settle = feature(graph(), 'src/lib/contact-safety', 'settleEmailRequest'); let calls = 0;
  assert.equal(await settle(() => { calls++; return Promise.resolve({ status:200,text:'OK' }); }, 100), 'accepted'); assert.equal(calls, 1);
});
test('provider rejection is sanitised and not retried or logged', async () => {
  const settle = feature(graph(), 'src/lib/contact-safety', 'settleEmailRequest'); let calls = 0; const errors=[]; const old=console.error; console.error=(...args)=>errors.push(args);
  try { assert.equal(await settle(() => { calls++; return Promise.reject({ private:'PRIVATE-SENTINEL' }); }, 100), 'error'); assert.equal(calls,1); assert.deepEqual(errors,[]); } finally { console.error=old; }
});
test('never-resolving provider reaches uncertain and a late ACK cannot resettle it', async () => {
  const settle = feature(graph(), 'src/lib/contact-safety', 'settleEmailRequest'); let late; let calls=0;
  const outcome = await settle(() => { calls++; return new Promise(resolve=>{late=resolve;}); }, 5);
  assert.equal(outcome,'uncertain');late({status:200,text:'OK'});await new Promise(resolve=>setTimeout(resolve,5));assert.equal(outcome,'uncertain');assert.equal(calls,1);
});
test('synchronous provider throw is safe and cannot leave an unbounded pending state', async () => {
  const settle = feature(graph(), 'src/lib/contact-safety', 'settleEmailRequest'); assert.equal(await settle(()=>{throw new Error('PRIVATE-SENTINEL');},100),'error');
});

function atLeast(v, floor) { const a=v.split('.').map(Number),b=floor.split('.').map(Number); for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]>b[i];}return true; }
test('candidate CSP hashes inline script text and does not allow arbitrary inline script execution', () => {
  const security = feature(graph(), 'scripts/v2-build3a-security.cjs', 'securityForHtml');
  const crypto = require('node:crypto'); const script = 'window.fixture = "offline";';
  const result = security(`<html><script>${script}</script><script src="/_next/chunk.js"></script><img style="color:transparent"></html>`);
  const policy = result.headers['Content-Security-Policy'];
  assert.ok(policy.includes("'sha256-" + crypto.createHash('sha256').update(script).digest('base64') + "'"));
  const scripts = policy.split(';').find(x => x.trim().startsWith('script-src '));
  assert.doesNotMatch(scripts, /unsafe-inline|unsafe-eval|https?:|\*/);
  assert.match(policy, /form-action 'none'/); assert.match(policy, /connect-src 'self' https:\/\/api.emailjs.com/);
  assert.equal(result.inlineScripts,1);assert.equal(result.inlineStyleAttributes,1);
});
test('candidate headers are deterministic and leave optional third-party origins blocked', () => {
  const security = feature(graph(), 'scripts/v2-build3a-security.cjs', 'securityForHtml');
  const a=security('<html><body>Local text</body></html>');assert.deepEqual(a,security('<html><body>Local text</body></html>'));
  assert.equal(a.headers['X-Content-Type-Options'],'nosniff');assert.match(a.headers['Content-Security-Policy'],/frame-src 'none'/);
  assert.doesNotMatch(a.headers['Content-Security-Policy'],/google-analytics|googletagmanager|google\.com|cloudflare/);
  assert.doesNotMatch(a.headers['Strict-Transport-Security'],/includeSubDomains|preload/);
});
test('installed Next 15 and every locked PostCSS copy satisfy the security bridge floor', () => {
  const lock=JSON.parse(fs.readFileSync(path.join(root,'package-lock.json'),'utf8')); const next=require('next/package.json').version;
  assert.ok(next.startsWith('15.') && atLeast(next,'15.5.29'));
  for(const [key,value]of Object.entries(lock.packages))if(key.endsWith('node_modules/postcss'))assert.ok(atLeast(value.version,'8.5.32'),key);
});
test('unused packages are removed without a Tailwind or React major migration', () => {
  const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
  for(const name of ['swiper','react-icons','react-intersection-observer','framer-motion'])assert.equal(pkg.dependencies[name],undefined,name);
  assert.match(require('tailwindcss/package.json').version,/^3\./);assert.match(require('react/package.json').version,/^19\./);
  assert.ok(!fs.existsSync(path.join(root,'src/components/ui/SocialsButton.tsx')));
});
test('installed patched Sharp actually encodes and decodes through the native runtime', async () => {
  const sharp = require('sharp');
  assert.ok(atLeast(sharp.versions.sharp, '0.35.5'));
  const image = await sharp({ create: { width: 2, height: 3, channels: 3, background: { r: 0, g: 0, b: 0 } } }).png().toBuffer();
  const metadata = await sharp(image).metadata();
  assert.equal(metadata.format, 'png'); assert.equal(metadata.width, 2); assert.equal(metadata.height, 3);
});

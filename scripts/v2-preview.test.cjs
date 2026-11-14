const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const ts = require('typescript');
const React = require('react');
const root = path.resolve(__dirname, '..');

function graph({ hydrated = false } = {}) {
  const cache = new Map();
  const calls = { provider: 0, analytics: 0 };
  const hooks = hydrated ? { ...React, useState: value => [typeof value === 'boolean' ? true : value, () => {}], useEffect: () => {}, useRef: value => ({ current: value }) } : React;
  const mocks = {
    react: hooks,
    'emailjs-com': { sendForm: async () => { calls.provider++; return { status: 200, text: 'OK' }; } },
    '@/lib/ga': { trackEvent: () => { calls.analytics++; } },
    'next/font/google': { Lexend: () => ({ variable: 'fixture-font' }) },
    'next/navigation': { usePathname: () => '/contact/' },
    'next/script': { default: props => React.createElement('script', props) },
  };
  function load(relative) {
    const base = path.resolve(root, relative);
    const file = [base, base + '.ts', base + '.tsx', base + '.js'].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!file || file.endsWith('.css')) return {};
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} }; cache.set(file, module);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
    const localRequire = name => mocks[name] ?? (name === '@next/third-parties/google' ? load('vendor/next-third-parties/google.js') : name.startsWith('@/') ? load('src/' + name.slice(2)) : name.startsWith('.') ? load(path.relative(root, path.resolve(path.dirname(file), name))) : require(name));
    new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
    return module.exports;
  }
  return { load, calls };
}
function find(node, type) {
  if (!node || typeof node !== 'object') return undefined;
  if (node.type === type) return node;
  let result;
  React.Children.forEach(node.props?.children, child => { result ??= find(child, type); });
  return result;
}

test('hydrated preview form remains disabled even after JavaScript is ready', () => {
  const g = graph({ hydrated: true });
  const tree = g.load('src/app/contact/contact-form').ContactForm();
  assert.equal(find(tree, 'fieldset').props.disabled, true);
  assert.equal(find(tree, 'button').props.disabled, true);
});
test('actual hydrated preview submit handler never calls transport or analytics', async () => {
  const g = graph({ hydrated: true });
  const tree = g.load('src/app/contact/contact-form').ContactForm();
  const original = global.FormData;
  global.FormData = class { get(name) { return ({ name: 'Fictional Preview', email: 'preview@example.invalid', phone: '', message: 'FICTIONAL LOCAL TEST ONLY' })[name]; } };
  let prevented = 0;
  try {
    await find(tree, 'form').props.onSubmit({ preventDefault() { prevented++; }, currentTarget: {} });
    assert.equal(prevented, 1);
    assert.equal(g.calls.provider, 0);
    assert.equal(g.calls.analytics, 0);
  } finally { global.FormData = original; }
});
test('preview contact render clearly states that no enquiry is sent', () => {
  const html = require('react-dom/server').renderToStaticMarkup(React.createElement(graph().load('src/app/contact/contact-form').ContactForm));
  assert.match(html, /preview[\s\S]*no (?:enquiry|message|enquiries)/i);
  assert.match(html, /method="post"/);
  assert.match(html, /<fieldset[^>]*disabled/);
});
test('preview page metadata and root defaults are noindex and nofollow', () => {
  const g = graph();
  const metadata = g.load('src/lib/seo').buildPageMetadata({ title: 'Preview', description: 'Fictional test', path: '/contact' });
  assert.equal(metadata.robots?.index, false);
  assert.equal(metadata.robots?.follow, false);
  assert.equal(g.load('src/app/layout').metadata.robots?.index, false);
});
test('preview robots disallows every crawler without a production sitemap hint', () => {
  const robots = graph().load('src/app/robots').default();
  assert.equal(robots.rules.disallow, '/');
  assert.equal(robots.sitemap, undefined);
});
test('optional tracking and embedded maps remain hard disabled', () => {
  assert.deepEqual(graph().load('src/lib/optional-integrations').OPTIONAL_INTEGRATIONS, { analytics: false, embeddedMaps: false });
});
test('Git publication cannot automatically deploy either Vercel project while eligibility is held', () => {
  assert.ok(fs.existsSync(path.join(root, 'vercel.json')), 'repository deployment gate must exist');
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  assert.equal(cfg.git.deploymentEnabled, false);
  const headers = Object.fromEntries(cfg.headers[0].headers.map(h => [h.key.toLowerCase(), h.value]));
  assert.match(headers['x-robots-tag'], /noindex/);
  assert.match(headers['content-security-policy'], /connect-src 'self'/);
  assert.match(headers['content-security-policy'], /form-action 'none'/);
});
function buildMode(changes) {
  const env = { ...process.env };
  for (const key of ['VERCEL', 'VERCEL_ENV', 'VERCEL_PROJECT_ID', 'LIBRA_BUILD_TARGET', 'NEXT_PUBLIC_LIBRA_REVIEW_ONLY']) delete env[key];
  Object.assign(env, changes);
  const p = spawnSync(process.execPath, ['-e', 'console.log(JSON.stringify(require("./next.config.js").env || {}))'], { cwd: root, env, encoding: 'utf8' });
  assert.equal(p.status, 0, p.stderr);
  return JSON.parse(p.stdout.trim()).NEXT_PUBLIC_LIBRA_REVIEW_ONLY;
}
for (const [name, env] of [
  ['missing mode', {}], ['untrusted public enable flag', { NEXT_PUBLIC_LIBRA_REVIEW_ONLY: 'false' }],
  ['unknown build target', { LIBRA_BUILD_TARGET: 'unknown' }],
  ['Vercel Preview despite production override', { VERCEL: '1', VERCEL_ENV: 'preview', LIBRA_BUILD_TARGET: 'hostinger-production' }],
  ['Vercel production remains review only', { VERCEL_ENV: 'production', LIBRA_BUILD_TARGET: 'hostinger-production' }],
  ['empty Vercel marker is uncertain', { VERCEL: '', LIBRA_BUILD_TARGET: 'hostinger-production' }],
]) test('build mode fails closed: ' + name, () => { assert.equal(buildMode(env), 'true'); });
test('original production transport remains available only through explicit non-Vercel build selection', () => {
  assert.equal(buildMode({ LIBRA_BUILD_TARGET: 'hostinger-production' }), 'false');
});

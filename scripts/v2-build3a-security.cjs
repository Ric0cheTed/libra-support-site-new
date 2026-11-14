const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

function securityForHtml(html) {
  const hashes = new Set(); let inlineScripts = 0;
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (/(?:^|\s)src\s*=/i.test(match[1]) || !match[2]) continue;
    inlineScripts++;
    const text = match[2].replace(/\r\n?/g, '\n');
    hashes.add("'sha256-" + crypto.createHash('sha256').update(text).digest('base64') + "'");
  }
  const policy = [
    "default-src 'self'", "base-uri 'none'", "object-src 'none'",
    "script-src 'self'" + (hashes.size ? ' ' + [...hashes].sort().join(' ') : ''),
    // Existing Next Image/legacy styles use attributes. This style-only
    // compatibility allowance is deliberate, not permission for inline scripts.
    "style-src 'self' 'unsafe-inline'", "img-src 'self' data:", "font-src 'self'",
    "connect-src 'self' https://api.emailjs.com", "frame-src 'none'",
    "frame-ancestors 'none'", "form-action 'none'", "upgrade-insecure-requests",
  ].join('; ');
  return {
    htmlSha256: crypto.createHash('sha256').update(html).digest('hex'),
    inlineScripts,
    inlineStyleAttributes: [...html.matchAll(/\sstyle\s*=(?:"[^"]*"|'[^']*')/gi)].length,
    headers: {
      'Content-Security-Policy': policy,
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      'X-Frame-Options': 'DENY',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
      'Strict-Transport-Security': 'max-age=3600',
    },
  };
}
module.exports = { securityForHtml };

if (require.main === module) {
  const outputFile = process.argv[2];
  if (!outputFile || !path.isAbsolute(outputFile)) throw new Error('An explicit absolute candidate-manifest output path is required.');
  const root = path.resolve(__dirname, '..', 'out');
  const pages = {};
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) throw new Error('Linked export artifacts are not admitted.');
      if (entry.isDirectory()) walk(file);
      else if (entry.isFile() && file.endsWith('.html')) {
        const relative = path.relative(root, file).replaceAll('\\', '/');
        const route = relative === 'index.html' ? '/' : relative.endsWith('/index.html') ? '/' + relative.slice(0, -10) : '/' + relative;
        pages[route] = { file: relative, proposedStatus: ['/404/', '/404.html', '/services/live-in-care/'].includes(route) ? 404 : 200, ...securityForHtml(fs.readFileSync(file, 'utf8')) };
      }
    }
  }
  walk(root);
  const manifest = { schemaVersion: 1, status: 'LOCAL_TEST_CANDIDATE_NOT_PRODUCTION_APPROVAL', sourceRoot: 'out', limitations: ['Host/header/TLS support unverified; do not apply automatically.', 'Style-only unsafe-inline retained for existing inline attributes; scripts remain hash constrained.', 'Short trial HSTS is proposed only after verified HTTPS ownership; no preload/subdomain commitment.', 'Endpoint/provider recipient enforcement and actual delivery remain outside Build 3A.'], pages };
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2) + '\n');
  console.log('Per-page candidate CSP/security-header artifact generated from final export; not applied to production.');
}

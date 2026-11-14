# Libra Support Services — V2 review website

This branch contains the completed V2 application for review, not a production release or an enquiry backend.

## Review safety

- Missing or uncertain configuration defaults to review-only mode.
- Online enquiry fields/submission are disabled, and the handler also refuses provider transmission.
- Optional analytics and embedded maps remain disabled.
- Review metadata is noindex/nofollow and robots disallows crawling.
- Use fictional data only. Do not use real phone/email alternatives to test enquiries.
- The original transport remains available for a later explicitly selected, separately approved non-Vercel production build. A public environment variable cannot enable it in Vercel builds.

## Local checks

```bash
npm ci --ignore-scripts
node --test scripts/v2-build1.test.cjs scripts/v2-build2.test.cjs scripts/v2-staff-publication.test.cjs scripts/v2-build3a.test.cjs scripts/v2-preview.test.cjs
npm run typecheck
npm run check:font
npm run build
node scripts/v2-staff-publication.test.cjs --export
```

The static website is generated in `out/`.

## Deployment boundary

Automatic Vercel Git deployments are disabled in this branch's `vercel.json` while hosting eligibility is unresolved. Source publication therefore need not trigger either connected project. This does not disconnect projects, change repository visibility or modify production settings. Hosted deployment still requires confirmation that the account plan permits this use.

Internal audit reports, private verification evidence and development-history commits are intentionally excluded from this publication branch.

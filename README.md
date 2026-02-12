# Libra Support Site

## Local verification checks

Run the same checks as CI before pushing:

```bash
npm ci
npm run lint --if-present
npm run check:font
npm run build
```

Optional typecheck (only if a `typecheck` script is present):

```bash
npm run typecheck
```

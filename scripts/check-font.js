const fs = require('fs');

const layoutPath = 'src/app/layout.tsx';
const globalsPath = 'src/styles/globals.css';

if (!fs.existsSync(layoutPath)) {
  console.error(`❌ Font check failed: missing ${layoutPath}`);
  process.exit(1);
}

if (!fs.existsSync(globalsPath)) {
  console.error(`❌ Font check failed: missing ${globalsPath}`);
  process.exit(1);
}

const layoutSrc = fs.readFileSync(layoutPath, 'utf8');
const globalsSrc = fs.readFileSync(globalsPath, 'utf8');

const hasNextFontLexendImport =
  layoutSrc.includes("import { Lexend } from 'next/font/google';") ||
  layoutSrc.includes('import { Lexend } from "next/font/google";');

const hasLexendVariableBinding =
  /Lexend\(\{[\s\S]*variable\s*:\s*['"]--font-sans['"]/m.test(layoutSrc);

const hasRootFontSansClass = /<html\s+lang=["']en["']\s+className=\{?`?\$\{lexend\.variable\}\s+font-sans`?\}?/m.test(layoutSrc);

const appliesFontFamilyGlobally =
  /html\s*,\s*\n\s*body\s*\{[\s\S]*font-family\s*:\s*var\(--font-sans\)/m.test(globalsSrc) ||
  /body\s*\{[\s\S]*font-family\s*:\s*var\(--font-sans\)/m.test(globalsSrc);

const hasConflictingRootFontClass =
  layoutSrc.includes('className="font-serif"') ||
  layoutSrc.includes('className="font-mono"');

if (
  !hasNextFontLexendImport ||
  !hasLexendVariableBinding ||
  !hasRootFontSansClass ||
  !appliesFontFamilyGlobally ||
  hasConflictingRootFontClass
) {
  console.error('❌ Font check failed: Lexend must be loaded via next/font/google and applied globally through --font-sans + font-sans.');
  console.error(
    `   hasNextFontLexendImport=${hasNextFontLexendImport} hasLexendVariableBinding=${hasLexendVariableBinding} hasRootFontSansClass=${hasRootFontSansClass} appliesFontFamilyGlobally=${appliesFontFamilyGlobally} hasConflictingRootFontClass=${hasConflictingRootFontClass}`,
  );
  process.exit(1);
}

console.log('✅ Font check passed');

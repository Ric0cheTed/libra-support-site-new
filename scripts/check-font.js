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

const hasLexendVariable =
  globalsSrc.includes('--font-sans: "Lexend"') ||
  globalsSrc.includes("--font-sans: 'Lexend'") ||
  globalsSrc.includes('--font-sans:"Lexend"') ||
  globalsSrc.includes("--font-sans:'Lexend'");

const appliesFontFamilyGlobally =
  /html\s*,\s*\n\s*body\s*\{[\s\S]*font-family\s*:\s*var\(--font-sans\)/m.test(globalsSrc) ||
  /body\s*\{[\s\S]*font-family\s*:\s*var\(--font-sans\)/m.test(globalsSrc);

const hasRootFontSansClass =
  layoutSrc.includes('<html lang="en" className="font-sans">') ||
  layoutSrc.includes("<html lang='en' className='font-sans'>");

const hasConflictingRootFontClass =
  layoutSrc.includes('className="font-serif"') ||
  layoutSrc.includes('className="font-mono"');

if (!hasLexendVariable || !appliesFontFamilyGlobally || !hasRootFontSansClass || hasConflictingRootFontClass) {
  console.error('❌ Font check failed: Lexend must remain the global font source and root class must be font-sans.');
  console.error(
    `   hasLexendVariable=${hasLexendVariable} appliesFontFamilyGlobally=${appliesFontFamilyGlobally} hasRootFontSansClass=${hasRootFontSansClass} hasConflictingRootFontClass=${hasConflictingRootFontClass}`,
  );
  process.exit(1);
}

console.log('✅ Font check passed');

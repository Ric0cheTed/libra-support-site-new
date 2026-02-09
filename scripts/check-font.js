const fs = require('fs');

const layoutPath = 'src/app/layout.tsx';

if (!fs.existsSync(layoutPath)) {
  console.error(`❌ Font check failed: missing ${layoutPath}`);
  process.exit(1);
}

const src = fs.readFileSync(layoutPath, 'utf8');

const hasVar = src.includes("variable: '--font-sans'") || src.includes('variable: "--font-sans"');
const hasHtmlVar = src.includes('className={lexend.variable}') || src.includes('className={ lexend.variable }');
const hasBodySans = src.includes('font-sans');

if (!hasVar || !hasHtmlVar || !hasBodySans) {
  console.error('❌ Font check failed: layout.tsx must bind Lexend to --font-sans and apply font-sans.');
  console.error(`   hasVar=${hasVar} hasHtmlVar=${hasHtmlVar} hasBodySans=${hasBodySans}`);
  process.exit(1);
}

console.log('✅ Font check passed');

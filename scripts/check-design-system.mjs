import { readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';

const files = readdirSync('src', { recursive: true })
  .filter(path => /\.(css|tsx?|jsx?)$/.test(path));
const failures = [];
for (const path of files) {
  const text = readFileSync(`src/${path}`, 'utf8');
  const checks = [
    [/intel-card/, 'legacy panel role'],
    [/#[\da-f]{3,8}\b|0x[\da-f]{6}\b/ig, 'literal color'],
    [/(?:hsl|rgb)a?\(\s*\d/g, 'literal functional color'],
    [/(?:text|bg|border|ring|shadow)-(?:blue|cyan|sky|indigo|violet|purple|amber|yellow|orange|red|green|emerald|slate|gray|zinc|neutral|stone)-\d+/g, 'nonsemantic palette utility'],
    [/rounded-(?:lg|xl|2xl|3xl|full|none|\[[^\]]+\])/g, 'out-of-scale radius utility'],
  ];
  for (const [pattern, problem] of checks) {
    if (pattern.test(text)) failures.push(`${path}: ${problem}`);
  }
  for (const match of text.matchAll(/border-radius:\s*([^;]+);/g)) {
    if (!/^var\(--radius-(sm|md)\)$/.test(match[1].trim())) failures.push(`${path}: out-of-scale CSS radius`);
  }
}
const tokens = readFileSync('src/index.css', 'utf8');
assert.equal((tokens.match(/--radius-(?:sm|md):/g) || []).length, 2);
assert.equal((tokens.match(/--width-(?:wide|standard|reading):/g) || []).length, 3);
assert.equal((tokens.match(/--space-(?:dense|standard|narrative):/g) || []).length, 3);
assert.equal(failures.length, 0, failures.join('\n'));
console.log(`Design-system checks passed across ${files.length} source files.`);

import { mkdir, writeFile } from 'node:fs/promises';
const fonts = [
  ['dm-sans', 'DM Sans:wght@300..700', 'dmsans'],
  ['space-grotesk', 'Space Grotesk:wght@400..700', 'spacegrotesk'],
  ['jetbrains-mono', 'JetBrains Mono:wght@400..700', 'jetbrainsmono'],
];
await mkdir('public/fonts', { recursive: true });
for (const [name, family, licenseFolder] of fonts) {
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}&display=swap`, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' } });
  if (!response.ok) throw new Error(`Font CSS: ${response.status}`);
  const css = await response.text();
  const latin = css.split('/* latin */')[1];
  const url = latin?.match(/url\(([^)]+)\)/)?.[1];
  if (!url || !url.endsWith('.woff2')) throw new Error(`Missing Latin WOFF2: ${name}: ${css.slice(-900)}`);
  const binary = await fetch(url);
  if (!binary.ok) throw new Error(`Font binary: ${binary.status}`);
  await writeFile(`public/fonts/${name}-latin.woff2`, Buffer.from(await binary.arrayBuffer()));
  const license = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${licenseFolder}/OFL.txt`);
  if (!license.ok) throw new Error(`Font license: ${license.status}`);
  await writeFile(`public/fonts/${name}-OFL.txt`, await license.text());
  console.log(name, url);
}

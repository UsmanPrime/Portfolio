// Build-time asset conversion; original photograph remains untouched.
// Run with SHARP_MODULE pointing to a locally installed Sharp package.
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
await mkdir('public/portrait', { recursive: true });
for (const size of [192, 384]) {
  const source = sharp('src/assets/Usman.jpg').rotate();
  // Original 1920 × 2212 photograph: top-anchored head-and-shoulders crop.
  // Approved crop C: roughly 56% head height and 13% headroom, with jacket visible.
  // Always export from the original, never from a resized derivative.
  const crop = source.extract({ left: 590, top: 555, width: 760, height: 760 }).resize(size, size);
  await crop.clone().webp({ quality: 80 }).toFile(`public/portrait/usman-${size}.webp`);
  await crop.clone().avif({ quality: 55, effort: 6 }).toFile(`public/portrait/usman-${size}.avif`);
  await crop.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`public/portrait/usman-${size}.jpg`);
}

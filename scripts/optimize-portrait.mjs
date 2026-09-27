// Build-time asset conversion; original photograph remains untouched.
// Run with SHARP_MODULE pointing to a locally installed Sharp package.
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
await mkdir('public/portrait', { recursive: true });
for (const size of [192, 384]) {
  const source = sharp('src/assets/Usman.jpg').rotate();
  const meta = await source.metadata();
  // Match the existing square object-fit: cover / object-position: center 35%.
  const side = Math.min(meta.width, meta.height);
  const crop = source.extract({ left: Math.round((meta.width - side) / 2), top: Math.round((meta.height - side) * 0.35), width: side, height: side }).resize(size, size);
  await crop.clone().webp({ quality: 80 }).toFile(`public/portrait/usman-${size}.webp`);
  await crop.clone().avif({ quality: 55, effort: 6 }).toFile(`public/portrait/usman-${size}.avif`);
  await crop.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`public/portrait/usman-${size}.jpg`);
}

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

// Render real page content at build time; no crawler-specific or duplicate copy.
const server = await createServer({
  mode: 'production',
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: 'custom',
});

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  const markup = render();
  const indexPath = resolve(server.config.root, server.config.build.outDir, 'index.html');
  const template = await readFile(indexPath, 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!template.includes(placeholder) || !markup.includes('<h1')) {
    throw new Error('Prerender requires a fresh Vite build and a non-empty homepage.');
  }
  await writeFile(indexPath, template.replace(placeholder, () => `<div id="root">${markup}</div>`));
  console.log('Prerendered homepage content into dist/index.html.');
} finally {
  await server.close();
}

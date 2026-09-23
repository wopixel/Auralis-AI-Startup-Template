import { mkdir, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'assets/vendor');
await mkdir(target, { recursive: true });
await cp(path.join(root, 'node_modules/@tabler/icons-webfont/dist'), path.join(target, 'tabler'), { recursive: true });
await mkdir(path.join(target, 'fonts'), { recursive: true });
for (const [source, name] of [
  ['@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', 'manrope.woff2'],
  ['@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2', 'dm-mono.woff2'],
  ['@fontsource-variable/manrope/LICENSE', 'Manrope-LICENSE.txt'],
  ['@fontsource/dm-mono/LICENSE', 'DM-Mono-LICENSE.txt'],
]) {
  await copyFile(path.join(root, 'node_modules', source), path.join(target, 'fonts', name));
}
await copyFile(path.join(root, 'node_modules/@tabler/icons-webfont/LICENSE'), path.join(target, 'tabler/LICENSE.txt'));
console.log('Local Tabler icons and fonts are ready.');

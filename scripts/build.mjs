import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build as bundle } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  'index.html',
  'features.html',
  'solutions.html',
  'pricing.html',
  'customers.html',
  'about.html',
  'blog.html',
  'contact.html',
  'login.html',
  'signup.html'
];

const failures = [];

await bundle({
  entryPoints: [path.join(root, 'assets/js/hero-scene.src.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: path.join(root, 'assets/js/hero-scene.js'),
  minify: true,
  legalComments: 'none',
  logLevel: 'silent'
});

await bundle({
  entryPoints: [path.join(root, 'assets/js/motion.src.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: path.join(root, 'assets/js/motion.js'),
  minify: true,
  legalComments: 'none',
  logLevel: 'silent'
});

for (const page of pages) {
  const file = path.join(root, page);
  if (!fs.existsSync(file)) {
    failures.push(`${page}: missing page`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  for (const requirement of [
    ['doctype', /<!doctype html>/i],
    ['viewport', /<meta\s+name=["']viewport["']/i],
    ['Tabler icons', /@tabler\/icons-webfont/i],
    ['shared stylesheet', /assets\/css\/styles\.css/i],
    ['premium stylesheet', /assets\/css\/premium\.css/i],
    ['shared script', /assets\/js\/main\.js/i],
    ['page marker', /<body[^>]+data-page=/i]
  ]) {
    if (!requirement[1].test(html)) failures.push(`${page}: missing ${requirement[0]}`);
  }

  const refs = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|#|javascript:|data:)/i.test(ref)) continue;
    const cleanRef = ref.split('#')[0].split('?')[0];
    if (!cleanRef) continue;
    const target = path.resolve(path.dirname(file), cleanRef);
    if (!fs.existsSync(target)) failures.push(`${page}: missing local reference ${ref}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Build passed: ${pages.length} HTML5 pages, shared assets, and local references verified.`);
}

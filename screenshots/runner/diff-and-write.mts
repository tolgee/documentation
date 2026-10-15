import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

sharp.cache(false);

const MAX_CHANGED_RATIO = 0.005;

type Outcome = 'created' | 'updated' | 'unchanged';

const raw = async (file: string) =>
  sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const writeWebp = async (png: string, webp: string) => {
  mkdirSync(dirname(webp), { recursive: true });
  await sharp(png).webp({ quality: 90 }).toFile(webp);
};

export async function syncScreenshot(png: string, webp: string): Promise<Outcome> {
  if (!existsSync(webp)) {
    await writeWebp(png, webp);
    return 'created';
  }
  const next = await raw(png);
  const prev = await raw(webp);
  const sameSize = next.info.width === prev.info.width && next.info.height === prev.info.height;
  if (sameSize) {
    const { width, height } = next.info;
    const changed = pixelmatch(next.data, prev.data, null, width, height, { threshold: 0.1 });
    if (changed / (width * height) <= MAX_CHANGED_RATIO) return 'unchanged';
  }
  await writeWebp(png, webp);
  return 'updated';
}

export function targetFor(png: string, staticDir: string): string {
  const parts = png.split(sep);
  const start = parts.indexOf('img');
  if (start < 0) throw new Error(`No img/ segment in captured path: ${png}`);
  return join(staticDir, ...parts.slice(start)).replace(/\.png$/, '.webp');
}

export async function main(outputDir: string, staticDir: string) {
  const pngs = readdirSync(outputDir, { recursive: true, encoding: 'utf8' })
    .filter((f) => f.endsWith('.png'))
    .map((f) => join(outputDir, f));
  if (pngs.length === 0) throw new Error(`No PNGs under ${outputDir}; did cypress run?`);
  const results = [];
  for (const png of pngs) {
    const webp = targetFor(png, staticDir);
    const outcome = await syncScreenshot(png, webp);
    results.push({ target: webp.slice(staticDir.length), outcome });
    console.log(`${outcome.padEnd(9)} ${webp.slice(staticDir.length)}`);
  }
  writeFileSync(join(outputDir, 'summary.json'), JSON.stringify(results, null, 2));
  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const here = dirname(fileURLToPath(import.meta.url));
  main(resolve(here, 'output'), resolve(here, '../../static')).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

// Without this libvips serves a cached decode of a file rewritten at the same path, so a changed
// capture is compared against stale pixels.
sharp.cache(false);

const MAX_CHANGED_RATIO = 0.005;

type Outcome = 'created' | 'updated' | 'unchanged';

async function main(outputDir: string, staticDir: string) {
  const pngs = readdirSync(outputDir, { recursive: true, encoding: 'utf8' }).filter((f) =>
    f.endsWith('.png')
  );
  if (pngs.length === 0) throw new Error(`No PNGs under ${outputDir}; did cypress run?`);
  const results = [];
  for (const png of pngs) {
    const target = targetFor(png);
    const source = join(outputDir, png);
    const outcome = await syncScreenshot(source, join(staticDir, target));
    const { width, height } = await sharp(source).metadata();
    results.push({ target, outcome, width, height });
    console.log(`${outcome.padEnd(9)} ${target}`);
  }
  writeFileSync(join(outputDir, 'summary.json'), JSON.stringify(results, null, 2));
}

export async function syncScreenshot(png: string, webp: string): Promise<Outcome> {
  if (!existsSync(webp)) {
    await writeWebp(png, webp);
    return 'created';
  }
  const next = await decodeRgba(png);
  const prev = await decodeRgba(webp);
  const sameSize = next.info.width === prev.info.width && next.info.height === prev.info.height;
  if (sameSize) {
    const { width, height } = next.info;
    const changed = pixelmatch(next.data, prev.data, null, width, height, { threshold: 0.1 });
    if (changed / (width * height) <= MAX_CHANGED_RATIO) return 'unchanged';
  }
  await writeWebp(png, webp);
  return 'updated';
}

// Cypress writes `<spec file>/<name>.png` under the output folder, and `<name>` is the MDX src.
export function targetFor(capturedPng: string): string {
  const [, ...srcParts] = capturedPng.split(sep);
  if (srcParts[0] !== 'img') throw new Error(`Captured path does not start with img/: ${capturedPng}`);
  return join(...srcParts).replace(/\.png$/, '.webp');
}

const decodeRgba = async (file: string) =>
  sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const writeWebp = async (png: string, webp: string) => {
  mkdirSync(dirname(webp), { recursive: true });
  await sharp(png).webp({ quality: 90 }).toFile(webp);
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const here = dirname(fileURLToPath(import.meta.url));
  main(resolve(here, 'output'), resolve(here, '../../static')).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

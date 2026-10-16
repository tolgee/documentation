import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { syncScreenshot, targetFor } from './diff-and-write.mts';

const dir = mkdtempSync(join(tmpdir(), 'docs-screens-'));

const solid = (w: number, h: number, rgb: [number, number, number]) =>
  sharp({ create: { width: w, height: h, channels: 3, background: { r: rgb[0], g: rgb[1], b: rgb[2] } } });

const pngWithPatch = async (file: string, patchPixels: number) => {
  const w = 100, h = 100;
  const base = Buffer.alloc(w * h * 3, 255);
  for (let i = 0; i < patchPixels; i++) base.fill(0, i * 3, i * 3 + 3);
  await sharp(base, { raw: { width: w, height: h, channels: 3 } }).png().toFile(file);
};

test('creates the webp when the target is missing', async () => {
  const png = join(dir, 'a.png');
  await solid(10, 10, [255, 0, 0]).png().toFile(png);
  const webp = join(dir, 'a.webp');
  assert.equal(await syncScreenshot(png, webp), 'created');
  assert.ok(existsSync(webp));
});

test('leaves an identical image untouched', async () => {
  const png = join(dir, 'b.png');
  await solid(10, 10, [0, 255, 0]).png().toFile(png);
  const webp = join(dir, 'b.webp');
  await syncScreenshot(png, webp);
  const before = statSync(webp).mtimeMs;
  assert.equal(await syncScreenshot(png, webp), 'unchanged');
  assert.equal(statSync(webp).mtimeMs, before);
});

test('ignores a diff at or below 0.5 % of pixels', async () => {
  const png = join(dir, 'c.png');
  await pngWithPatch(png, 0);
  const webp = join(dir, 'c.webp');
  await syncScreenshot(png, webp);
  await pngWithPatch(png, 50);
  assert.equal(await syncScreenshot(png, webp), 'unchanged');
});

test('writes when more than 0.5 % of pixels differ', async () => {
  const png = join(dir, 'd.png');
  await pngWithPatch(png, 0);
  const webp = join(dir, 'd.webp');
  await syncScreenshot(png, webp);
  await pngWithPatch(png, 51);
  assert.equal(await syncScreenshot(png, webp), 'updated');
});

test('writes when dimensions differ', async () => {
  const png = join(dir, 'e.png');
  await solid(10, 10, [0, 0, 255]).png().toFile(png);
  const webp = join(dir, 'e.webp');
  await syncScreenshot(png, webp);
  await solid(12, 10, [0, 0, 255]).png().toFile(png);
  assert.equal(await syncScreenshot(png, webp), 'updated');
  assert.equal((await sharp(webp).metadata()).width, 12);
});

test('maps a capture under its spec folder to the webp path and rejects paths outside img/', () => {
  assert.equal(
    targetFor(join('a.screenshots.ts', 'img', 'docs', 'platform', 'a.png')),
    join('img', 'docs', 'platform', 'a.webp')
  );
  assert.throws(() => targetFor(join('img', 'docs', 'a.png')));
  assert.throws(() => targetFor(join('a.screenshots.ts', 'docs', 'a.png')));
});

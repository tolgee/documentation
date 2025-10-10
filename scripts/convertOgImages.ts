#!/usr/bin/env tsx
/**
 * Convert SVG OG images to PNG format
 *
 * This script converts SVG files in the og-images directory to PNG format
 * using ImageMagick (which is already installed as a dependency).
 *
 * Usage:
 *   npm run convert-og-images
 */

import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const OG_IMAGES_DIR = path.join(__dirname, '../static/img/og-images');
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 630;

async function checkImageMagick(): Promise<boolean> {
  try {
    await execAsync('magick -version');
    return true;
  } catch {
    return false;
  }
}

async function convertSvgToPng(
  svgPath: string,
  pngPath: string
): Promise<void> {
  // Use rsvg-convert which properly handles SVG colors and gradients
  const command = `rsvg-convert -w ${TARGET_WIDTH} -h ${TARGET_HEIGHT} "${svgPath}" -o "${pngPath}"`;

  try {
    await execAsync(command);
    console.log(`✅ Converted: ${path.basename(pngPath)}`);
  } catch (error) {
    console.error(`❌ Failed to convert ${path.basename(svgPath)}:`, error);
  }
}

async function main() {
  console.log('🔄 Converting SVG OG images to PNG...\n');

  // Check if ImageMagick is installed
  const hasImageMagick = await checkImageMagick();

  if (!hasImageMagick) {
    console.error('❌ ImageMagick is not installed on your system.');
    console.error('\n📦 Installation instructions:');
    console.error('   macOS:   brew install imagemagick');
    console.error('   Ubuntu:  sudo apt-get install imagemagick');
    console.error(
      '   Windows: Download from https://imagemagick.org/script/download.php\n'
    );
    process.exit(1);
  }

  // Find all SVG files in the og-images directory
  const files = fs.readdirSync(OG_IMAGES_DIR);
  const svgFiles = files.filter(
    (file) => file.endsWith('.svg') && !file.includes('TEMPLATE')
  );

  if (svgFiles.length === 0) {
    console.log('⚠️  No SVG files found in', OG_IMAGES_DIR);
    console.log('💡 Run: npm run generate-og-images first\n');
    process.exit(0);
  }

  console.log(`Found ${svgFiles.length} SVG files to convert\n`);

  // Convert each SVG to PNG
  for (const svgFile of svgFiles) {
    const svgPath = path.join(OG_IMAGES_DIR, svgFile);
    const pngFile = svgFile.replace('.svg', '.png');
    const pngPath = path.join(OG_IMAGES_DIR, pngFile);

    await convertSvgToPng(svgPath, pngPath);
  }

  console.log(
    `\n✨ Conversion complete! Generated ${svgFiles.length} PNG files`
  );
  console.log(`📁 Location: ${OG_IMAGES_DIR}\n`);
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});

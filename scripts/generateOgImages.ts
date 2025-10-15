#!/usr/bin/env tsx
/**
 * Generate OG images from SVG templates
 *
 * This script creates SVG templates for different documentation sections
 * and optionally converts them to PNG using Puppeteer.
 *
 * Usage:
 *   npm run generate-og-images           # Generate SVG templates only
 *   npm run generate-og-images --png     # Generate SVG and convert to PNG
 */

import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = path.join(__dirname, '../static/img/og-images');
const STANDARD_WIDTH = 1200;
const STANDARD_HEIGHT = 630;

// Tolgee brand colors
const COLORS = {
  primary: '#EC407A',
  primaryDark: '#D81B60',
  white: '#FFFFFF',
};

interface OgImageConfig {
  filename: string;
  title: string;
  subtitle: string;
  gradient?: boolean;
  category?: string; // Category badge text
}

const IMAGE_CONFIGS: OgImageConfig[] = [
  {
    filename: 'platform',
    title: 'Tolgee Platform',
    subtitle: 'Localization Platform for Developers',
    gradient: true,
    category: 'WEB & MOBILE',
  },
  {
    filename: 'js-sdk',
    title: 'JavaScript SDK',
    subtitle: 'Integrate Tolgee with Your Web App',
    gradient: true,
    category: 'JAVASCRIPT',
  },
  {
    filename: 'android-sdk',
    title: 'Android SDK',
    subtitle: 'Native Android Localization',
    gradient: true,
    category: 'ANDROID',
  },
  {
    filename: 'ios-sdk',
    title: 'iOS SDK',
    subtitle: 'Native iOS Localization',
    gradient: true,
    category: 'iOS',
  },
  {
    filename: 'cli',
    title: 'Tolgee CLI',
    subtitle: 'Command-Line Tools for Localization',
    gradient: true,
    category: 'COMMAND LINE',
  },
  {
    filename: 'api',
    title: 'REST API',
    subtitle: 'Programmatic Access to Tolgee',
    gradient: true,
    category: 'HTTP API',
  },
  {
    filename: 'react',
    title: 'React Integration',
    subtitle: 'Localize Your React Applications',
    gradient: true,
    category: 'REACT',
  },
  {
    filename: 'vue',
    title: 'Vue Integration',
    subtitle: 'Localize Your Vue.js Applications',
    gradient: true,
    category: 'VUE.JS',
  },
  {
    filename: 'angular',
    title: 'Angular Integration',
    subtitle: 'Localize Your Angular Applications',
    gradient: true,
    category: 'ANGULAR',
  },
  {
    filename: 'svelte',
    title: 'Svelte Integration',
    subtitle: 'Localize Your Svelte Applications',
    gradient: true,
    category: 'SVELTE',
  },
  {
    filename: 'next',
    title: 'Next.js Integration',
    subtitle: 'Localize Your Next.js Applications',
    gradient: true,
    category: 'NEXT.JS',
  },
  {
    filename: 'integrations',
    title: 'Integrations',
    subtitle: 'Connect Tolgee with Your Tools',
    gradient: true,
    category: 'THIRD-PARTY',
  },
  {
    filename: 'i18next',
    title: 'i18next Integration',
    subtitle: 'Use Tolgee with i18next',
    gradient: true,
    category: 'I18NEXT',
  },
  {
    filename: 'react-native',
    title: 'React Native',
    subtitle: 'Localize Your Mobile Apps',
    gradient: true,
    category: 'REACT NATIVE',
  },
  {
    filename: 'vanilla',
    title: 'Vanilla JavaScript',
    subtitle: 'Pure JavaScript Integration',
    gradient: true,
    category: 'VANILLA JS',
  },
  {
    filename: 'self-hosting',
    title: 'Self-Hosting',
    subtitle: 'Deploy Your Own Tolgee Instance',
    gradient: true,
    category: 'DOCKER',
  },
  {
    filename: 'in-context',
    title: 'In-Context Translation',
    subtitle: 'Translate Directly in Your App',
    gradient: true,
    category: 'LIVE EDITING',
  },
  {
    filename: 'machine-translation',
    title: 'Machine Translation',
    subtitle: 'AI-Powered Translation Services',
    gradient: true,
    category: 'AI POWERED',
  },
  {
    filename: 'figma-plugin',
    title: 'Figma Plugin',
    subtitle: 'Extract Strings from Figma Designs',
    gradient: true,
    category: 'FIGMA',
  },
  {
    filename: 'slack',
    title: 'Slack Integration',
    subtitle: 'Manage Translations in Slack',
    gradient: true,
    category: 'SLACK',
  },
  {
    filename: 'unreal',
    title: 'Unreal Engine Plugin',
    subtitle: 'Localize Your Unreal Projects',
    gradient: true,
    category: 'UNREAL ENGINE',
  },
  {
    filename: 'homepage',
    title: 'Tolgee Documentation',
    subtitle: 'Open-Source Localization Platform',
    gradient: true,
    category: 'OPEN SOURCE',
  },
];

function generateSvgTemplate(config: OgImageConfig): string {
  const { title, subtitle, gradient, category } = config;

  const backgroundDef = gradient
    ? `
    <defs>
      <linearGradient id="grad-${config.filename}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${COLORS.primaryDark};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${STANDARD_WIDTH}" height="${STANDARD_HEIGHT}" fill="url(#grad-${config.filename})"/>`
    : `<rect width="${STANDARD_WIDTH}" height="${STANDARD_HEIGHT}" fill="${COLORS.primary}"/>`;

  return `<svg width="${STANDARD_WIDTH}" height="${STANDARD_HEIGHT}" viewBox="0 0 ${STANDARD_WIDTH} ${STANDARD_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${backgroundDef}
  
  <!-- Border frame -->
  <rect x="20" y="20" width="${STANDARD_WIDTH - 40}" height="${
    STANDARD_HEIGHT - 40
  }" stroke="${
    COLORS.white
  }" stroke-width="2" fill="none" opacity="0.15" rx="12"/>
  
  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="200" fill="${COLORS.white}" opacity="0.05"/>
  <circle cx="${STANDARD_WIDTH - 100}" cy="${
    STANDARD_HEIGHT - 100
  }" r="150" fill="${COLORS.white}" opacity="0.05"/>
  
  ${
    category
      ? `<!-- Category badge -->
  <rect x="100" y="180" width="${
    category.length * 12 + 30
  }" height="36" fill="${COLORS.white}" opacity="0.2" rx="18"/>
  <text x="${
    100 + (category.length * 12 + 30) / 2
  }" y="202" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="${
          COLORS.white
        }" text-anchor="middle" letter-spacing="1">${escapeXml(
          category
        )}</text>`
      : ''
  }
  
  <!-- Main Title -->
  <text x="100" y="280" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="${
    COLORS.white
  }">
    ${escapeXml(title)}
  </text>
  
  <!-- Subtitle -->
  <text x="100" y="360" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="${
    COLORS.white
  }" opacity="0.9">
    ${escapeXml(subtitle)}
  </text>
  
  <!-- Footer -->
  <text x="100" y="550" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${
    COLORS.white
  }" opacity="0.8">
    docs.tolgee.io
  </text>
  
  <!-- Tolgee Logo (top right with padding) -->
  <g transform="translate(${STANDARD_WIDTH - 200}, 80) scale(0.6)">
    <!-- Background circle for contrast -->
    <circle cx="100" cy="100" r="140" fill="${COLORS.white}" opacity="0.12"/>
    <!-- Tolgee mouse logo -->
    <path d="M97.16,7.27a16.94,16.94,0,0,0-1.9,24.47,16.36,16.36,0,0,0,5,3.83,3.23,3.23,0,0,1-2.9,5.77,23.14,23.14,0,0,1-11.41-13C73.83,31.1,63.46,37.09,52.82,46.51c-27.44,24.3-34.35,61.74-16.38,85.26-4.57,5.79-8,12.22-8.9,18.69a20.88,20.88,0,0,0,5.62,18c9.18,9.61,21.42,7.13,31.26,5.14,6.58-1.34,12.8-2.6,16.5-.23,3.22,2.07,3.47,3.87,3.61,4.45,2.1,9.32-5.79,13.89-7.67,16.27a1.48,1.48,0,0,0,1.13,2.4c3.48,0,9-1.18,12.34-4.08s7.16-7.9,5.89-16.32c-.08-.5-.18-1-.32-1.58-.86-3.35-3.1-7.57-8.61-11.09-7.72-4.95-17-3.07-25.22-1.41-9.76,2-16,2.85-20.37-1.71a9.13,9.13,0,0,1-2.46-8.19c.54-3.77,2.65-7.89,5.62-11.86,21.71,16.89,56.87,13.47,82.67-9.39a75.34,75.34,0,0,0,20.81-28.09A23.14,23.14,0,0,1,134.8,89a3.23,3.23,0,0,1,6.08-2.19,16.37,16.37,0,0,0,3.2,5.39,16.85,16.85,0,1,0,11.48-28a3.23,3.23,0,0,1-.51-6.44,23.41,23.41,0,0,1,12.88,2.69c2.6-14.08,3.34-31.41-2.06-37.51-4.08-4.61-20.62-8-35.18-7.76A23.48,23.48,0,0,1,130.8,25a3.23,3.23,0,0,1-6.33-1.28A16.94,16.94,0,0,0,97.16,7.27Zm63.25,21a5.29,5.29,0,0,1-.57,6.19c-1.29,1.14-2.72-.51-4.10-2.06s-3.10-3.42-1.81-4.56A5.74,5.74,0,0,1,160.41,28.27Z" 
          fill="${COLORS.white}" 
          fill-rule="evenodd" 
          clip-rule="evenodd"/>
  </g>
</svg>`;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function generateSvgImages() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🎨 Generating OG image SVG templates...\n');

  for (const config of IMAGE_CONFIGS) {
    const svg = generateSvgTemplate(config);
    const outputPath = path.join(OUTPUT_DIR, `${config.filename}.svg`);

    fs.writeFileSync(outputPath, svg, 'utf-8');
    console.log(`✅ Generated: ${config.filename}.svg`);
  }

  console.log(
    `\n✨ Generated ${IMAGE_CONFIGS.length} SVG templates in ${OUTPUT_DIR}`
  );
  console.log('\n📝 Next steps:');
  console.log('   1. Review the SVG files and customize as needed');
  console.log('   2. Convert to PNG using: npm run convert-og-images');
  console.log(
    '   3. Or manually convert using a tool like Inkscape or online converters'
  );
}

async function convertSvgToPng() {
  console.log('\n🔄 Converting SVG to PNG...\n');
  console.log('⚠️  PNG conversion requires additional dependencies.');
  console.log('    Install one of the following:\n');
  console.log('    Option 1 (Recommended): npm install --save-dev sharp');
  console.log('    Option 2: npm install --save-dev puppeteer\n');
  console.log('💡 For now, you can:');
  console.log('    - Use online tools: https://cloudconvert.com/svg-to-png');
  console.log(
    '    - Use Inkscape: inkscape --export-type=png --export-width=1200 file.svg'
  );
  console.log(
    '    - Use ImageMagick: convert -background none -size 1200x630 file.svg file.png'
  );
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const shouldConvertToPng = args.includes('--png');

  await generateSvgImages();

  if (shouldConvertToPng) {
    await convertSvgToPng();
  } else {
    console.log('\n💡 Tip: Run with --png flag to convert to PNG format');
  }
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});

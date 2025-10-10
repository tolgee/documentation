# OG Images Generation Scripts

Automated scripts to generate Open Graph images for Tolgee documentation.

## Quick Start

### Option 1: Generate Everything (Recommended)

```bash
npm run og-images
```

This will:

1. Generate SVG templates for all categories
2. Convert them to PNG format (requires ImageMagick)

### Option 2: Step by Step

```bash
# Step 1: Generate SVG templates
npm run generate-og-images

# Step 2: Convert to PNG (requires ImageMagick)
npm run convert-og-images
```

## Prerequisites

### For PNG Conversion

You need ImageMagick installed on your system:

**macOS:**

```bash
brew install imagemagick
```

**Ubuntu/Debian:**

```bash
sudo apt-get install imagemagick
```

**Windows:**
Download from https://imagemagick.org/script/download.php

## What Gets Generated

The script creates OG images (1200x630px) for:

### Main Sections

- `platform.png` - Platform documentation
- `js-sdk.png` - JavaScript SDK
- `android-sdk.png` - Android SDK
- `ios-sdk.png` - iOS SDK
- `cli.png` - Tolgee CLI
- `api.png` - REST API

### Framework Integrations

- `react.png` - React integration
- `vue.png` - Vue.js integration
- `angular.png` - Angular integration
- `svelte.png` - Svelte integration
- `next.png` - Next.js integration

### Features & Tools

- `integrations.png` - Integrations overview
- `self-hosting.png` - Self-hosting guides
- `in-context.png` - In-context translation
- `machine-translation.png` - Machine translation
- `figma-plugin.png` - Figma plugin
- `homepage.png` - Homepage

All images are saved to `/static/img/og-images/`

## Customization

### Modify Templates

Edit `scripts/generateOgImages.ts` to customize:

- **Colors**: Change the `COLORS` object
- **Layout**: Modify the SVG template in `generateSvgTemplate()`
- **Content**: Update the `IMAGE_CONFIGS` array

### Add New Images

Add entries to the `IMAGE_CONFIGS` array:

```typescript
{
  filename: 'my-section',
  title: 'My Section',
  subtitle: 'Description of my section',
  gradient: true,
}
```

Then run `npm run og-images` again.

## Manual Conversion (Alternative)

If you don't want to install ImageMagick, you can:

### Option 1: Online Tools

- https://cloudconvert.com/svg-to-png
- https://svgtopng.com/

### Option 2: Inkscape

```bash
inkscape --export-type=png --export-width=1200 input.svg -o output.png
```

### Option 3: Browser-based

1. Open the SVG in a browser
2. Take a screenshot at exactly 1200x630px
3. Or use browser dev tools to export as PNG

## SVG vs PNG

### Why SVG First?

- ✅ Easy to edit and customize
- ✅ Perfect quality at any size
- ✅ Small file size in source control
- ✅ Can be version controlled effectively

### Why Convert to PNG?

- ✅ Better compatibility with social media platforms
- ✅ Facebook, Twitter, LinkedIn prefer PNG/JPG
- ✅ Consistent rendering across all platforms
- ✅ No browser-specific rendering issues

### Can I Use SVG Directly?

**Technically yes**, but:

- ⚠️ Some social platforms don't support SVG
- ⚠️ May not render correctly on all platforms
- ⚠️ PNG is the safer, more compatible choice

The current `og-default.svg` works, but PNG is recommended for maximum compatibility.

## Troubleshooting

### "ImageMagick not found"

Install ImageMagick using the commands above, or convert manually.

### "Permission denied"

Make the scripts executable:

```bash
chmod +x scripts/generateOgImages.ts
chmod +x scripts/convertOgImages.ts
```

### Images look blurry

Ensure the output size is exactly 1200x630px. The scripts handle this automatically.

### Want different dimensions?

Edit the constants in the scripts:

```typescript
const STANDARD_WIDTH = 1200; // Change this
const STANDARD_HEIGHT = 630; // Change this
```

## Next Steps

After generating images:

1. **Review the images** in `/static/img/og-images/`
2. **Customize if needed** - Edit SVGs and regenerate
3. **Add to documentation** - Add frontmatter to pages:
   ```yaml
   ---
   image: /img/og-images/platform.png
   ---
   ```
4. **Test** - Build and verify: `npm run build && npm run serve`
5. **Validate** - Use social media debugging tools

## See Also

- `/docs/OG_IMAGES_GUIDE.md` - Complete implementation guide
- `/static/img/og-images/README.md` - Usage instructions
- `/OG_IMAGES_TODO.md` - Implementation checklist

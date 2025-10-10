# Open Graph Images

This directory contains Open Graph (OG) images for social media sharing.

## Image Specifications

- **Recommended size**: 1200x630px
- **Format**: PNG or JPG
- **File size**: Keep under 1MB for optimal loading
- **Aspect ratio**: 1.91:1 (standard for Facebook, LinkedIn, Twitter)

## Usage

### For Documentation Pages (MDX/MD)

Add to the frontmatter of any `.mdx` or `.md` file:

```yaml
---
title: Your Page Title
description: Page description
image: /img/og-images/your-image.png
---
```

Docusaurus will automatically generate both `og:image` and `twitter:image` meta tags.

### For React/TSX Pages

```tsx
import Head from '@docusaurus/Head';

<Head>
  <meta property="og:image" content="/img/og-images/your-image.png" />
  <meta property="twitter:image" content="/img/og-images/your-image.png" />
</Head>
```

## Recommended Images to Create

Create category-specific OG images for major documentation sections:

- `platform.png` - For Platform documentation pages
- `js-sdk.png` - For JavaScript SDK pages
- `android-sdk.png` - For Android SDK pages
- `ios-sdk.png` - For iOS SDK pages
- `cli.png` - For CLI documentation pages
- `api.png` - For API documentation pages
- `integrations.png` - For integrations pages
- `self-hosting.png` - For self-hosting guides

## Design Guidelines

1. **Branding**: Include Tolgee logo and brand colors
2. **Typography**: Use clear, readable fonts (minimum 60px for main text)
3. **Content**: Keep text minimal - title and optional subtitle
4. **Safe zones**: Keep important content 100px from edges
5. **Contrast**: Ensure good contrast for readability
6. **Testing**: Test on multiple platforms (Facebook, Twitter, LinkedIn)

## Tools for Creating OG Images

- **Figma**: Professional design tool
- **Canva**: Quick templates and easy editing
- **OG Image Generator**: Automated generation tools
  - https://og-image.vercel.app/
  - https://www.opengraph.xyz/
- **Code-based**: Generate programmatically with libraries like `@vercel/og`

## Testing Your OG Images

Before deploying, test your OG images:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share the URL and preview
- **General**: https://www.opengraph.xyz/url/

## Current Status

- ✅ Global default OG image: `/img/og-images/homepage.png` (set in `docusaurus.config.ts`)
- ✅ 17 category-specific images created
- ✅ 9 main pages configured with custom OG images
- ✅ Automated generation scripts available

## Fallback Behavior

If a page doesn't specify a custom OG image:
1. Docusaurus checks for `image` in frontmatter
2. Falls back to the global default set in `docusaurus.config.ts` (`themeConfig.image`)

See: https://docusaurus.io/docs/seo#global-metadata

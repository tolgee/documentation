# OG Images Implementation Guide

This guide explains how Open Graph (OG) images work in the Tolgee documentation and how to add them to pages.

## Quick Start

To add a custom OG image to any documentation page, add this to the frontmatter:

```yaml
---
title: Your Page Title
image: /img/og-images/your-image.png
---
```

That's it! Docusaurus handles the rest automatically.

## How It Works

### 1. Global Default (Fallback)

**File**: `src/theme/LayoutContent.tsx` (line 103)

```tsx
<meta property="og:image" content="/img/og-default.svg" />
```

This applies to all pages that don't specify a custom image.

### 2. Homepage Override

**File**: `src/pages/index.tsx` (lines 18-24)

The homepage has a custom OG image set via the `<Head>` component.

### 3. Per-Page Images (Recommended)

Add to any `.mdx` or `.md` file frontmatter:

```yaml
---
image: /img/og-images/category-name.png
---
```

## Global Metadata Configuration

**File**: `docusaurus.config.ts` (lines 28-33)

```typescript
metadata: [
  { property: 'og:type', content: 'website' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { name: 'twitter:card', content: 'summary_large_image' },
],
```

This sets standard OG metadata for all pages.

## Image Specifications

- **Size**: 1200x630px (standard for all major platforms)
- **Format**: PNG or JPG (avoid SVG for compatibility)
- **File size**: Under 1MB
- **Location**: `/static/img/og-images/`

## Recommended Category Images

Create these images for major documentation sections:

| Section | Image Path | Usage |
|---------|-----------|-------|
| Platform | `/img/og-images/platform.png` | Platform docs |
| JS SDK | `/img/og-images/js-sdk.png` | JavaScript SDK docs |
| Android SDK | `/img/og-images/android-sdk.png` | Android SDK docs |
| iOS SDK | `/img/og-images/ios-sdk.png` | iOS SDK docs |
| CLI | `/img/og-images/cli.png` | CLI docs |
| API | `/img/og-images/api.png` | API docs |
| Integrations | `/img/og-images/integrations.png` | Integration guides |
| Self-hosting | `/img/og-images/self-hosting.png` | Self-hosting guides |

## Examples

### Example 1: Platform Documentation Page

```yaml
---
title: Getting Started with Tolgee Platform
description: Learn how to set up and use the Tolgee localization platform
image: /img/og-images/platform.png
---

# Getting Started with Tolgee Platform

Your content here...
```

### Example 2: SDK Documentation Page

```yaml
---
title: React Integration Guide
description: Integrate Tolgee with your React application
image: /img/og-images/js-sdk.png
---

# React Integration Guide

Your content here...
```

### Example 3: Custom Page-Specific Image

```yaml
---
title: Advanced Translation Features
description: Explore advanced translation capabilities
image: /img/og-images/advanced-features.png
---

# Advanced Translation Features

Your content here...
```

## Testing Your OG Images

After adding OG images, test them using these tools:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: Share the URL and check preview
4. **OpenGraph.xyz**: https://www.opengraph.xyz/url/

## Creating OG Images

### Design Tools

- **Figma**: Professional design (recommended)
- **Canva**: Quick templates
- **Photoshop/GIMP**: Advanced editing

### Automated Generation

For dynamic OG image generation, consider:

- **@vercel/og**: Generate images at build time
- **Cloudinary**: Dynamic image transformation
- **OG Image Generator**: https://og-image.vercel.app/

### Design Guidelines

1. **Branding**: Include Tolgee logo
2. **Colors**: Use Tolgee brand colors (#EC407A primary)
3. **Typography**: Minimum 60px for main text
4. **Safe zones**: Keep content 100px from edges
5. **Contrast**: Ensure readability on all backgrounds
6. **Testing**: Preview on multiple platforms

## Troubleshooting

### Image Not Showing

1. Check file path is correct (relative to `/static/`)
2. Verify image exists in `/static/img/og-images/`
3. Clear social media cache (use debugging tools above)
4. Ensure image is under 8MB (ideally under 1MB)

### Wrong Image Showing

1. Social platforms cache OG images aggressively
2. Use platform debugging tools to force refresh
3. Wait 24-48 hours for cache to expire naturally

### Image Dimensions Wrong

1. Verify image is exactly 1200x630px
2. Check `og:image:width` and `og:image:height` metadata
3. Avoid SVG format (limited platform support)

## Best Practices

1. **Consistency**: Use similar design across category images
2. **Branding**: Always include Tolgee branding
3. **Readability**: Keep text large and clear
4. **File size**: Optimize images (use tools like TinyPNG)
5. **Testing**: Always test before deploying
6. **Documentation**: Update this guide when adding new patterns

## Current Implementation Status

✅ Global default OG image configured
✅ Homepage custom OG image set
✅ Global metadata added to config
✅ Directory structure created
✅ Documentation created
⏳ Category-specific images (to be designed)
⏳ Per-page custom images (add as needed)

## Next Steps

1. **Design category images**: Create 8 category-specific OG images
2. **Add to index pages**: Add `image` frontmatter to main section pages
3. **Test thoroughly**: Verify on all major platforms
4. **Monitor**: Check social shares to ensure images display correctly
5. **Iterate**: Update images based on feedback and analytics

## Resources

- [Docusaurus SEO Documentation](https://docusaurus.io/docs/seo)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)

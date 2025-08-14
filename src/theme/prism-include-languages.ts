import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';
import type { Optional } from 'utility-types';

/**
 * This is swizzled to add more languages to Prism for syntax highlighting
 * Simplified version that only loads configured additional languages
 */
export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace
): void {
  const {
    themeConfig: { prism = {} },
  } = siteConfig;
  const { additionalLanguages = [] } = prism as {
    additionalLanguages: string[];
  };

  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  // Load only the configured additional languages
  additionalLanguages.forEach((lang) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require(`prismjs/components/prism-${lang}`);
  });

  // Clean up and eventually restore former globalThis.Prism object (if any)
  delete (globalThis as Optional<typeof globalThis, 'Prism'>).Prism;
  if (typeof PrismBefore !== 'undefined') {
    globalThis.Prism = PrismObject;
  }
}

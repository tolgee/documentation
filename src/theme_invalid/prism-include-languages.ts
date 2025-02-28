import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';

/**
 * This is swizzled to add more languages to Prism for syntax highlighting
 */
const prismIncludeLanguages = (PrismObject: typeof PrismNamespace): void => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: { prism = {} },
    } = siteConfig;
    const { additionalLanguages = [] } = prism as {
      additionalLanguages: string[];
    };

    // @ts-ignore
    window.Prism = PrismObject;

    require('prism-svelte');

    additionalLanguages.forEach((lang) => {
      require(`prismjs/components/prism-${lang}`);
    });

    delete (window as Window & { Prism?: typeof PrismNamespace }).Prism;
  }
};

export default prismIncludeLanguages;

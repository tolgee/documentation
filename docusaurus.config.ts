import dotenv from 'dotenv';
dotenv.config();

import { docs } from './docs';
import { redirects } from './redirects';
import { navbar } from './navbar';
import { footer } from './footer';
import type { Config } from '@docusaurus/types';
import openApiPluginConfig from './apiSpecGeneration/pluginConfig';
import tailwindPlugin from './plugins/tailwind-config.cjs';

const config: Config = {
  title: 'Tolgee',
  tagline: 'Localization for everyone',
  url: 'https://docs.tolgee.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  organizationName: 'Tolgee',
  projectName: 'Tolgee',
  themes: ['docusaurus-theme-openapi-docs'],
  themeConfig: {
    image: '/img/og-images/homepage.png',
    metadata: [
      { property: 'og:type', content: 'website' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    navbar,
    footer,
    algolia: {
      appId: 'PWTO4FHFDY',
      apiKey: '22a72d1546c01b9b386c0257604f2a38',
      indexName: 'tolgee',
      searchParameters: {}, // Optional (if provided by Algolia)
      searchPagePath: false,
    },
    prism: {
      additionalLanguages: ['icu-message-format'],
    },
    zoom: {
      selector: '.zoomable-image',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: '#182230',
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: '@theme/DocItem', // Derived from docusaurus-theme-openapi
          editUrl: 'https://github.com/tolgee/documentation/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    ['@docusaurus/plugin-client-redirects', redirects],
    openApiPluginConfig,
    ...docs,
    tailwindPlugin,
  ],
  customFields: {
    googleTrackingId: process.env.DOCUSAURUS_GOOGLE_TRACKING_ID,
    cookieYesId: process.env.DOCUSAURUS_COOKIE_YES_ID,
    utmCookieDomain: process.env.DOCUSAURUS_UTM_COOKIE_DOMAIN || 'tolgee.io',
    chatwootToken: process.env.DOCUSAURUS_CHATWOOT_TOKEN,
    hotjarId: process.env.DOCUSAURUS_HOTJAR_ID,
    typebotToken: process.env.DOCOSAURUS_TYPEBOT_TOKEN,
    posthogToken: process.env.DOCOSAURUS_POSTHOG_TOKEN,
    posthogApiHost:
      process.env.DOCOSAURUS_POSTHOG_API_HOST || 'https://app.posthog.com',
    plausibleTrackingDomain: process.env.DOCOSAURUS_PLAUSIBLE_TRACKING_DOMAIN,
  },
  scripts: [
    {
      src: '/scripts/cookieconsent.js',
      defer: true,
      async: true,
    },
  ],
  onBrokenAnchors: 'throw',
  trailingSlash: false,
};

module.exports = config;

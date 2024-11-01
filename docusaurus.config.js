// @ts-check
require('dotenv').config();

const { docs } = require('./docs');
const { redirects } = require('./redirects');
const { navbar } = require('./navbar');
const { footer } = require('./footer');
const openApiPluginConfig = require('./apiSpecGeneration/pluginConfig');

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'Tolgee',
  tagline: 'Localization for everyone',
  url: 'https://tolgee.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Tolgee',
  projectName: 'Tolgee',
  themes: ['docusaurus-theme-openapi-docs'],
  themeConfig: {
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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tolgee/documentation/tree/main',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl: 'https://github.com/tolgee/documentation/tree/main',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Tolgee`,
          },
          archiveBasePath: null,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    ['@docusaurus/plugin-client-redirects', redirects],
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            require('tailwindcss'),
            require('autoprefixer'),
          ];
          return postcssOptions;
        },
      };
    },
    openApiPluginConfig,
    ...docs,
  ],
  markdown: {
    preprocessor: ({ filePath, fileContent }) => {
      var key = '';
      var found = false;
      for (key in globalVariables) {
        let folderName = key == 'current' ? 'current' : `version-${key}`;
        if (filePath.includes(`/${folderName}/`)) {
          found = true;
          break;
        }
      }
      if (key == '' || !found) {
        key = 'current';
      }

      let content = fileContent;
      for (const variable in globalVariables[key]) {
        content = content.replaceAll(
          '@' + variable + '@',
          globalVariables[key][variable]
        );
      }

      return content;
    },
  },
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
};

module.exports = config;

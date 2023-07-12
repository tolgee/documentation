// @ts-check

const { docs } = require('./docs');
const { redirects } = require('./redirects');
const { navbar } = require('./navbar');
const { footer } = require('./footer');
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
  themeConfig: {
    navbar,
    footer,
    algolia: {
      appId: 'PWTO4FHFDY',
      apiKey: '22a72d1546c01b9b386c0257604f2a38',
      indexName: 'tolgee',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    prism: {
      additionalLanguages: ['icu-message-format'],
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
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl:
              'https://app.tolgee.io/v3/api-docs/Accessible%20with%20API%20key',
            routePath: '/api',
          },
        ],
        theme: {
          primaryColor: '#a94676',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus2-dotenv',
    ['@docusaurus/plugin-client-redirects', redirects],
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    ...docs,
  ],
  stylesheets: ['/font.css'],
  customFields: {
    googleTrackingId: process.env.DOCUSAURUS_GOOGLE_TRACKING_ID,
    utmCookieDomain: process.env.UTM_COOKIE_DOMAIN || 'tolgee.io',
    chatwootToken: process.env.DOCUSAURUS_CHATWOOT_TOKEN,
    hotjarId: process.env.DOCUSAURUS_HOTJAR_ID,
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

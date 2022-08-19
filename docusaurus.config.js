module.exports = {
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
    navbar: {
      title: 'Tolgee',
      logo: {
        alt: 'Tolgee',
        src: 'img/tolgeeLogo.svg',
        srcDark: 'img/tolgeeLogoDark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'pricing',
          activeBasePath: 'pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Development',
          position: 'right',
          items: [
            {
              type: 'html',
              value: '#Integrations',
            },
            {
              to: 'integrations/react',
              label: 'React',
            },
            {
              to: 'integrations/angular',
              label: 'Angular',
            },
            {
              to: 'integrations/vue',
              label: 'Vue',
            },
            {
              to: 'integrations/svelte',
              label: 'Svelte',
            },
            {
              to: 'integrations/next',
              label: 'Next.js',
            },
            {
              to: 'integrations/gatsby',
              label: 'Gatsby',
            },
            {
              to: 'integrations/all',
              label: 'more...',
            },
            {
              type: 'html',
              value: '#API',
            },
            {
              to: 'api',
              label: 'REST API docs',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Product',
          position: 'right',
          items: [
            {
              type: 'html',
              value: '#Features',
            },
            {
              to: 'features/dev-tools',
              label: 'Dev tools',
            },
            {
              to: 'features/translation-assistance',
              label: 'Translation assistance',
            },
            {
              to: 'features/collaboration',
              label: 'Collaboration',
            },
            {
              type: 'html',
              value: '#About us',
            },
            {
              to: 'roadmap',
              label: 'Roadmap',
            },
            {
              to: 'opensource',
              label: 'Why Open-source?',
            },
            {
              to: 'blog',
              label: 'Blog',
            },
          ],
        },
        {
          to: 'https://app.tolgee.io',
          label: 'Login',
          position: 'right',
          className: 'login-button',
        },
        {
          to: 'https://app.tolgee.io/sign_up',
          label: 'Start for free',
          position: 'right',
          className: 'get-started-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What is Tolgee',
              to: 'docs/',
            },
            {
              label: 'Get Started',
              to: 'docs/web/get_started/hello_world',
            },
            {
              label: 'Using Tolgee App',
              to: 'docs/platform',
            },
            {
              label: 'Running server',
              to: 'docs/platform/self_hosting/running_with_docker',
            },
            {
              label: 'Using with React',
              to: 'docs/web/using_with_react/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tolgee',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/tolgee/tolgee-platform/discussions',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/orgs/tolgee',
            },
            {
              label: 'Npm',
              href: 'https://www.npmjs.com/org/tolgee',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/tolgeecommunity/shared_invite/zt-195isb5u8-_RcSRgVJfvgsPpOBIok~IQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Go to App',
              href: 'https://app.tolgee.io',
            },
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/tolgee',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Tolgee_i18n',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Tolgee.i18n',
            },
            {
              label: 'Terms of use',
              href: '/docs/terms_of_use',
            },
            {
              html: '<a class="footer__link-item" href="javascript:;" onclick="openCookieSettings()">Cookie settings</a>',
            },
          ],
        },
      ],
      copyright: `<a class="footer__link-item" href="/">© 2021-${new Date().getFullYear()} Tolgee s.r.o. All rights reserved</a>`,
    },
    algolia: {
      appId: 'PWTO4FHFDY',
      apiKey: '22a72d1546c01b9b386c0257604f2a38',
      indexName: 'tolgee',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    // gtag: {
    //   trackingID: process.env.DOCUSAURUS_GOOGLE_TRACKING_ID || "G-K37DGCFGLS",
    // },
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // fixing legacy backlinks
          {
            from: '/docs/get_started/hello_world',
            to: '/docs/',
          },
          {
            from: '/docs/changelog/version_3',
            to: '/docs/changelog/tolgee_js_version_3',
          },
          {
            from: '/docs/server_and_web_app/self_hosting/running_with_docker',
            to: '/docs/platform/self_hosting/running_with_docker',
          },
          {
            from: '/docs/web_app',
            to: '/docs/web/understanding_tolgee_for_web',
          },
          {
            from: '/docs/web_app/creating_repository',
            to: '/docs/platform/creating_project',
          },
          {
            from: '/docs/web_app/obtaining_api_key',
            to: '/docs/platform/integration',
          },
          {
            from: '/docs/web/using_with_react/react_preparing_for_production',
            to: '/docs/web/using_with_react/preparing_for_production',
          },
          {
            from: '/server_and_web_app/self_hosting/configuration',
            to: '/docs/platform/self_hosting/configuration',
          },
          {
            from: '/tolgee-for-svelte',
            to: '/integrations/svelte',
          },
        ],
      },
    ],
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  stylesheets: ['/font.css'],
  customFields: {
    googleTrackingId: process.env.DOCUSAURUS_GOOGLE_TRACKING_ID,
    chatwootToken: process.env.DOCUSAURUS_CHATWOOT_TOKEN,
  },
  scripts: [
    {
      src:
        'https://www.googletagmanager.com/gtag/js?id=' +
        process.env.DOCUSAURUS_GOOGLE_TRACKING_ID,
      async: true,
    },
    {
      src: '/scripts/cookieconsent.js',
      defer: true,
      async: true,
    },
  ],
};

module.exports = {
  title: "Tolgee",
  tagline: "Localization for everyone",
  url: "https://tolgee.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.svg",
  onBrokenMarkdownLinks: "warn",
  organizationName: "Tolgee",
  projectName: "Tolgee",
  themeConfig: {
    navbar: {
      title: "Tolgee",
      logo: {
        alt: "Tolgee",
        src: "img/tolgeeLogo.svg",
        srcDark: "img/tolgeeLogoDark.svg",
      },
      items: [
        {
          type: "dropdown",
          activeBasePath: "integrations",
          label: "Integrations",
          items: [
            {
              to: "integrations/react",
              activeBasePath: "integrations/react",
              label: "React",
            },
            {
              to: "integrations/angular",
              activeBasePath: "integrations/angular",
              label: "Angular",
            },
            {
              to: "integrations/vue",
              activeBasePath: "integrations/vue",
              label: "Vue",
            },
            {
              to: "integrations/svelte",
              activeBasePath: "integrations/svelte",
              label: "Svelte",
            },
          ],
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "api",
          activeBasePath: "api",
          label: "API",
          position: "left",
        },
        {
          to: "pricing",
          activeBasePath: "pricing",
          label: "Pricing",
          position: "left",
        },
        {
          to: "roadmap",
          activeBasePath: "roadmap",
          label: "Roadmap",
          position: "left",
        },
        {
          to: "opensource",
          activeBasePath: "opensource",
          label: "Why Open-source?",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://app.tolgee.io",
          label: "Go to app",
          position: "right",
          className: "goToAppButton",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "What is Tolgee",
              to: "docs/",
            },
            {
              label: "Get Started",
              to: "docs/web/get_started/hello_world",
            },
            {
              label: "Using with React",
              to: "docs/web/using_with_react/installation",
            },
            {
              label: "Running server",
              to: "docs/server_and_web_app/self_hosting/running_with_docker",
            },
            {
              label: "Using Tolgee App",
              to: "docs/server_and_web_app",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tolgee",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/orgs/tolgee",
            },
            {
              label: "Npm",
              href: "https://www.npmjs.com/org/tolgee",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Go to App",
              href: "https://app.tolgee.io",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/tolgee",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Tolgee_i18n",
            },
            {
              label: "Terms of use",
              href: "/docs/terms_of_use",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tolgee`,
    },
    algolia: {
      apiKey: "4611f8562d237546845c8bdede50243f",
      indexName: "tolgee",
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    gtag: {
      trackingID: process.env.DOCUSAURUS_GOOGLE_TRACKING_ID || "G-K37DGCFGLS",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tolgee/documentation/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/tolgee/documentation/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            specUrl:
              "https://app.tolgee.io/v3/api-docs/Accessible%20with%20API%20key",
            routePath: "/api",
          },
        ],
        theme: {
          primaryColor: "#822B55",

          redocOptions: {
            theme: {
              sidebar: {
                backgroundColor: "#333333",
              },
              typography: {
                color: "white",
              },
            },
          },
        },
      },
    ],
  ],
  plugins: ["docusaurus2-dotenv"],
  stylesheets: ["/font.css"],
  customFields: {
    apiSpec: "https://app.tolgee.io/v3/api-docs/Accessible%20with%20API%20key",
  },
  scripts: [
    ...(process.env.DOCUSAURUS_TAWK_URL
      ? [
          {
            src: process.env.DOCUSAURUS_TAWK_URL,
            async: true,
          },
        ]
      : []),
  ],
};

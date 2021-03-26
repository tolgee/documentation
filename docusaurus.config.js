module.exports = {
    title: 'Tolgee Toolkit',
    tagline: 'Localization tools for efficiency',
    url: 'https://tolgee.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.svg',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'Tolgee',
    projectName: 'Tolgee',
    themeConfig: {
        navbar: {
            title: 'Tolgee Toolkit',
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
                    position: 'left',
                },
                {
                    to: 'apiReference',
                    activeBasePath: 'apiReference',
                    label: 'API',
                    position: 'left',
                },
                // {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://app.tolgee.io',
                    label: 'Go to app',
                    position: 'right',
                    className: 'goToAppButton'
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
                            label: 'What is Tolgee Toolkit',
                            to: 'docs/',
                        },
                        {
                            label: 'Get Started',
                            to: 'docs/web/get_started/hello_world',
                        },
                        {
                            label: 'Using with React',
                            to: 'docs/web/using_with_react/installation',
                        },
                        {
                            label: 'Running server',
                            to: 'docs/server_and_web_app/self_hosting/running_with_docker',
                        },
                        {
                            label: 'Using Tolgee App',
                            to: 'docs/server_and_web_app',
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
                            label: 'Docker Hub',
                            href: "https://hub.docker.com/orgs/tolgee"
                        },
                        {
                            label: "Npm",
                            href: "https://www.npmjs.com/org/tolgee"
                        }
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
                            label: "Linked in",
                            href: "https://www.linkedin.com/company/tolgee"
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tolgee`,
        },
        algolia: {
            apiKey: '4611f8562d237546845c8bdede50243f',
            indexName: 'tolgee',
            searchParameters: {}, // Optional (if provided by Algolia)
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/tolgee/documentation/tree/production',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/tolgee/documentation/tree/production',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        'docusaurus2-dotenv',
    ],
    stylesheets: [
        '/font.css'
    ],
    customFields: {
        apiSpec: "https://app.tolgee.io/v3/api-docs/Accessible%20with%20API%20key"
    }
};

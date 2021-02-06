module.exports = {
    title: 'Tolgee',
    tagline: 'The localization framework',
    url: 'https://tolgee.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.svg',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'tolgee',
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
                            label: 'Motivation',
                            to: 'docs/',
                        },
                        {
                            label: 'Get Started',
                            to: 'docs/get_started/hello_world',
                        },
                        {
                            label: 'Using with React',
                            to: 'docs/using_with_react/installation',
                        },
                        {
                            label: 'Running server',
                            to: 'docs/running_server/running_with_docker',
                        },
                        {
                            label: 'Using Tolgee App',
                            to: 'docs/web_app',
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
                        /*{
                            label: 'Blog',
                            to: 'blog',
                        },*/
                        {
                            label: 'Go to App',
                            href: 'https://app.tolgee.io',
                        },
                        {
                            label: 'Facebook @tolgeeLocalization',
                            href: 'https://www.facebook.com/tolgeeLocalization'
                        },
                        {
                            label: "Twitter @tolgeeLoc",
                            href: "https://twitter.com/TolgeeLoc"
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
            apiKey: '0502b545345a891c1ce24777bbed2fa9',
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
};

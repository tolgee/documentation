module.exports = {
    title: 'Polygloat',
    tagline: 'The localization framework',
    url: 'https://polygloat.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.svg',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'polygloat',
    projectName: 'Polygloat',
    themeConfig: {
        navbar: {
            title: 'Polygloat',
            logo: {
                alt: 'Polygloat',
                src: 'img/polygloatLogo.svg',
                srcDark: 'img/polygloatLogoDark.svg',
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
                    href: 'https://app.polygloat.io',
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
                            label: 'Using Polygloat App',
                            to: 'docs/web_app',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/polygloat',
                        },
                        {
                            label: 'Docker Hub',
                            href: "https://hub.docker.com/orgs/polygloat"
                        },
                        {
                            label: "Npm",
                            href: "https://www.npmjs.com/org/polygloat"
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
                            href: 'https://app.polygloat.io',
                        },
                        {
                            label: 'Facebook @polygloatLocalization',
                            href: 'https://www.facebook.com/polygloatLocalization'
                        },
                        {
                            label: "Twitter @polygloatLoc",
                            href: "https://twitter.com/PolygloatLoc"
                        },
                        {
                            label: "Linked in",
                            href: "https://www.linkedin.com/company/polygloat"
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Polygloat`,
        },
        algolia: {
            apiKey: '0502b545345a891c1ce24777bbed2fa9',
            indexName: 'polygloat',
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
                        'https://github.com/polygloat/documentation/tree/production',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/polygloat/documentation/tree/production',
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

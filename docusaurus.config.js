module.exports = {
    title: 'Polygloat',
    tagline: 'Localization made easy',
    url: 'https://polygloat.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.svg',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Polygloat',
            logo: {
                alt: 'Polygloat',
                src: 'img/polygloatLogo.svg',
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
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/JanCizmar/polygloat',
                        },
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
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Polygloat`,
        },
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',
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
                        'https://github.com/JanCizmar/polygloat/doc',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/JanCizmar/polygloat/blog',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    stylesheets: [
        'font.css'
    ],
};

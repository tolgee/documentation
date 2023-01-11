const docs = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'platform',
      path: 'platform',
      routeBasePath: 'platform',
      sidebarPath: require.resolve('./sidebarPlatform.js'),
      lastVersion: 'current',
      includeCurrentVersion: true,
      versions: {
        current: {
          banner: 'none',
          label: '3.x.x',
        },
      },
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'js-sdk',
      path: 'js-sdk',
      routeBasePath: 'js-sdk',
      sidebarPath: require.resolve('./sidebarJsSdk.js'),
      lastVersion: 'current',
      includeCurrentVersion: true,
      versions: {
        current: {
          banner: 'none',
          label: '5.x.x',
        },
      },
    },
  ],
];

module.exports = { docs };

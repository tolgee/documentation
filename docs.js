const docs = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'platform',
      path: 'platform',
      routeBasePath: 'platform',
      sidebarPath: require.resolve('./sidebarPlatform.js'),
      lastVersion: '2.x.x',
      versions: {
        current: {
          banner: 'none',
          label: '3.0.0-alpha.1',
          path: '3.0.0-alpha.1',
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
      lastVersion: '4.x.x',
      versions: {
        current: {
          banner: 'none',
          label: '5.0.0-alpha.1',
          path: '5.0.0-alpha.1',
        },
      },
    },
  ],
];

module.exports = { docs };

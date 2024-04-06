module.exports = [
  'docusaurus-plugin-openapi-docs',
  {
    id: 'openapi',
    docsPluginId: 'rest-api',
    config: {
      tolgee: {
        specPath: './apiSpecGeneration/apiSpecs.json', // path or URL to the OpenAPI spec
        outputDir: 'api', // output directory for generated *.mdx and sidebar.js files
        sidebarOptions: {
          categoryLinkSource: 'tag',
          sidebarCollapsible: false,
          sidebarCollapsed: false,
          groupPathsBy: 'tag', // generate a sidebar.js slice that groups operations by tag
        },
      },
    },
  },
];

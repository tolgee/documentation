module.exports = {
  someSidebar: [
    'about',
    'get-started',
    'quickstart',
    'modules',
    'usage',
    {
      type: 'category',
      label: 'Jetpack Compose',
      link: {
        type: 'doc',
        id: 'jetpack/overview',
      },
      items: ['jetpack/installation', 'jetpack/usage', 'jetpack/troubleshooting'],
    },
    'production',
    'troubleshooting',
  ],
};
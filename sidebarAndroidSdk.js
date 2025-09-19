module.exports = {
  someSidebar: [
    'about',
    'get-started',
    'quickstart',
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
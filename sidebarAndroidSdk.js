module.exports = {
  someSidebar: [
    'about',
    {
      type: 'category',
      label: 'Get started',
      link: {
        type: 'doc',
        id: 'get-started',
      },
      items: ['installation', 'modules'],
    },
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
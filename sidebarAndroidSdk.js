module.exports = {
  someSidebar: [
    'about',
    'get-started',
    {
      type: 'category',
      label: 'Core Module',
      items: [
        'core-module/quickstart',
        'core-module/usage',
        'core-module/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Jetpack Compose',
      items: [
        'jetpack/installation',
        'jetpack/usage',
        'jetpack/troubleshooting',
      ],
    },
    'production',
  ],
};

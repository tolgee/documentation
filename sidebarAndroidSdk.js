module.exports = {
  someSidebar: [
    'about',
    'installation',
    'modules',
    'usage',
    {
      type: 'category',
      label: 'Starters',
      items: ['integrate/AndroidViews', 'integrate/AndroidJetpackCompose'],
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
    'troubleshooting',
  ],
};

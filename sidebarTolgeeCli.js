module.exports = {
  someSidebar: [
    'introduction',
    'installation',
    'usage',
    'project-configuration',
    'push-pull-strings',
    'branching',
    {
      collapsed: false,
      label: 'Extracting from code',
      type: 'category',
      items: [
        'extraction/syncing-strings',
        'extraction/tagging-keys',
        'extraction/magic-comments',
        'extraction/parsers',
        'extraction/custom-extractor',
      ],
    },
    'migration-to-v2',
  ],
};

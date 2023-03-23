module.exports = {
  someSidebar: [
    {
      label: 'Getting started',
      type: 'category',
      items: [
        'getting_started/about_tolgee',
        'getting_started/creating_project',
      ],
    },
    {
      label: 'Projects and organizations',
      type: 'category',
      items: [
        'projects_and_organizations/project_settings',
        'projects_and_organizations/languages',
        'projects_and_organizations/import',
        'projects_and_organizations/export',
        'projects_and_organizations/members',
        'projects_and_organizations/organization_settings',
      ],
    },
    {
      label: 'Keys',
      type: 'category',
      items: ['keys/tags', 'keys/namespaces', 'keys/screenshots'],
    },
    {
      label: 'Translation process',
      type: 'category',
      items: [
        'translation_process/translation_memory',
        'translation_process/machine_translation',
        'translation_process/comments',
        'translation_process/icu_message_format',
      ],
    },
    {
      label: 'Integrations',
      type: 'category',
      items: [
        'integrations/about_integrations',
        {
          label: 'Figma plugin',
          type: 'category',
          items: [
            'integrations/figma_plugin/setup',
            'integrations/figma_plugin/usage',
          ],
        },
      ],
    },
    {
      label: 'Account settings',
      type: 'category',
      items: [
        'account_settings/password_and_2fa',
        'account_settings/api_keys_and_pat_tokens',
      ],
    },
    {
      label: 'Self-hosting',
      type: 'category',
      items: [
        'self_hosting/getting_started',
        'self_hosting/running_with_docker',
        'self_hosting/running_with_java',
        'self_hosting/configuration',
        'self_hosting/enterprise',
      ],
    },
    'faq',
  ],
};

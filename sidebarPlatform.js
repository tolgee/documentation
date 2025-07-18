module.exports = {
  someSidebar: [
    {
      label: 'Get started with Tolgee platform',
      type: 'category',
      items: [
        'getting_started/about_tolgee',
        'getting_started/creating_project',
        'getting_started/files_and_integrations',
      ],
    },
    {
      label: 'Projects and Organizations',
      type: 'category',
      items: [
        'projects_and_organizations/editing_translations',
        'projects_and_organizations/project_settings',
        'projects_and_organizations/languages',
        'projects_and_organizations/machine-translation-settings',
        'projects_and_organizations/ai-settings',
        'projects_and_organizations/tasks',
        'projects_and_organizations/order_translation',
        'projects_and_organizations/members',
        'projects_and_organizations/import',
        'projects_and_organizations/export',
        'projects_and_organizations/organization_settings',
        'projects_and_organizations/glossaries',
        'projects_and_organizations/llm-providers',
        'projects_and_organizations/content_delivery',
        'projects_and_organizations/webhooks',
      ],
    },
    {
      label: 'Translation Keys',
      type: 'category',
      items: [
        'translation_keys/keys',
        'translation_keys/tags',
        'translation_keys/namespaces',
        'translation_keys/screenshots',
        'translation_keys/batch_operations',
        'translation_keys/custom_values',
      ],
    },
    {
      label: 'Translation Process',
      type: 'category',
      items: [
        'translation_process/translation_memory',
        'translation_process/machine_translation',
        'translation_process/ai_translator',
        'translation_process/ai-playground',
        'translation_process/comments',
        'translation_process/glossaries',
        'translation_process/icu_message_format',
        'translation_process/tolgee_universal_icu_placeholders',
        'translation_process/notifications',
      ],
    },
    {
      label: 'Supported Formats',
      type: 'category',
      items: [
        'formats/supported_formats',
        'formats/message_placeholder_format',
        'formats/native_json',
        'formats/structured_json',
        'formats/xliff',
        'formats/po',
        'formats/properties',
        'formats/flat_yaml',
        'formats/structured_yaml',
        'formats/csv',
        'formats/xlsx',
        'formats/apple_strings',
        'formats/apple_xcstrings',
        'formats/apple_xliff',
        'formats/android_xml',
        'formats/compose_multiplatform_xml',
        'formats/flutter_arb',
        'formats/ruby_yaml',
        'formats/i18next_json',
        'formats/dotnet_resx',
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
            'integrations/figma_plugin/formatting_text_and_variables',
          ],
        },

        {
          label: 'Slack Integration',
          type: 'category',
          items: [
            'integrations/slack_integration/about',
            'integrations/slack_integration/setup',
            'integrations/slack_integration/usage',
          ],
        },

        {
          label: 'Unreal plugin',
          type: 'category',
          items: [
            'integrations/unreal_plugin/setup',
            'integrations/unreal_plugin/usage',
          ],
        },
        'integrations/other_integrations',
      ],
    },
    {
      label: 'Account Settings',
      type: 'category',
      items: [
        'account_settings/password_and_2fa',
        'account_settings/api_keys_and_pat_tokens',
      ],
    },
    {
      label: 'Single Sign-On (SSO)',
      type: 'category',
      items: [
        'sso/sso_getting_started',
        'sso/sso_okta',
        'sso/sso_keycloak',
        {
          label: 'Self-hosted setup',
          type: 'category',
          items: [
            'sso/sso_server_setup',
            'sso/sso_server_setup_global',
            'sso/sso_server_setup_organizations',
          ],
        },
      ],
    },
    {
      label: 'Self-hosting',
      type: 'category',
      items: [
        'self_hosting/getting_started',
        'self_hosting/running_with_docker',
        'self_hosting/running_with_java',
        'self_hosting/running_on_azure',
        'self_hosting/licensing',
        'self_hosting/configuration',
        'self_hosting/slack_integration_self_hosted',
      ],
    },
    'faq',
  ],
};

module.exports = {
  someSidebar: [
    { type: 'doc', id: 'what_is_tolgee' },
    {
      label: 'Tolgee Platform',
      type: 'category',
      items: [
        'platform/introduction',
        {
          label: 'Usage',
          type: 'category',
          items: [
            'platform/creating_project',
            'platform/integration',
            'platform/api-keys-and-pat-tokens',
            'platform/exporting_translations',
            'platform/translation_tools',
          ],
        },
        {
          label: 'Self hosting',
          type: 'category',
          items: [
            'platform/self_hosting/running_with_docker',
            'platform/self_hosting/running_with_java',
            'platform/self_hosting/configuration',
          ],
        },
      ],
    },
    {
      label: 'Tolgee SDK',
      collapsed: false,
      type: 'category',
      items: [
        {
          id: 'web/introduction',
          type: 'doc',
        },
        {
          id: 'web/packages',
          type: 'doc',
        },
        {
          id: 'web/wrapping',
          type: 'doc',
        },
        {
          id: 'web/in_context',
          type: 'doc',
        },
        {
          id: 'web/automated_screenshot_generation',
          type: 'doc',
        },
        {
          label: 'Core API',
          type: 'category',
          items: [
            {
              id: 'web/core_api/tolgee',
              type: 'doc',
            },
            {
              id: 'web/core_api/options',
              type: 'doc',
            },
            {
              id: 'web/core_api/events',
              type: 'doc',
            },
            {
              id: 'web/core_api/format_simple',
              type: 'doc',
            },
            {
              id: 'web/core_api/plugin',
              type: 'doc',
            },
            {
              id: 'web/core_api/observer_options',
              type: 'doc',
            },
          ],
        },
        {
          label: 'Integrations',
          collapsed: false,
          type: 'category',
          items: [
            {
              label: 'Vanilla HTML + JS',
              type: 'category',
              items: [
                'web/get_started/hello_world',
                'web/get_started/preparing_for_production',
                'web/get_started/adding_loading_overlay',
                'web/get_started/translating_imperatively',
                'web/get_started/providing_default_value',
                'web/get_started/parameter_interpolation',
              ],
            },
            {
              label: 'Using with Npm',
              type: 'category',
              items: ['web/using_with_npm/installation'],
            },
            {
              label: 'Using with React',
              type: 'category',
              items: [
                'web/using_with_react/installation',
                'web/using_with_react/translating',
                'web/using_with_react/tags_interpolation',
                'web/using_with_react/switching_languages',
                'web/using_with_react/preparing_for_production',
                {
                  label: 'Server Side Rendering (SSR)',
                  type: 'category',
                  items: [
                    'web/using_with_react/ssr/ssr',
                    'web/using_with_react/ssr/using_with_next',
                    'web/using_with_react/ssr/using_with_gatsby',
                  ],
                },
                'web/using_with_react/api',
              ],
            },
            {
              label: 'Using with Angular',
              type: 'category',
              items: [
                'web/using_with_angular/installation',
                'web/using_with_angular/translating',
                'web/using_with_angular/switching_language',
                'web/using_with_angular/angular_preparing_for_production',
                'web/using_with_angular/api',
              ],
            },
            {
              label: 'Using with Vue',
              type: 'category',
              items: [
                'web/using_with_vue/installation',
                'web/using_with_vue/translating',
                'web/using_with_vue/switching_languages',
                'web/using_with_vue/preparing_for_production',
                'web/using_with_vue/api',
              ],
            },
            {
              label: 'Using with Svelte',
              type: 'category',
              items: [
                'web/using_with_svelte/installation',
                'web/using_with_svelte/translating',
                'web/using_with_svelte/switching_language',
                'web/using_with_svelte/preparing_for_production',
                'web/using_with_svelte/api',
              ],
            },
            {
              label: 'Using with i18next',
              type: 'category',
              items: [
                'web/using_with_i18next/installation',
                'web/using_with_i18next/react',
                'web/using_with_i18next/vue',
                'web/using_with_i18next/preparing_for_production',
                'web/using_with_i18next/api',
              ],
            },
            {
              id: 'web/using_with_php',
              type: 'doc',
            },
            {
              id: 'web/using_with_dart',
              type: 'doc',
            },
          ],
        },
      ],
    },
    { type: 'doc', id: 'icu_message_format' },
    {
      label: 'Changelog',
      type: 'category',
      items: [
        { type: 'doc', id: 'changelog/tolgee_js_version_4' },
        { type: 'doc', id: 'changelog/tolgee_js_version_3' },
        { type: 'doc', id: 'changelog/tolgee_server_version_2' },
      ],
    },
  ],
};

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
      label: 'Tolgee for Web',
      collapsed: false,
      type: 'category',
      items: [
        'web/about',
        'web/installation',
        'web/initialization',
        'web/translating',
        'web/formatting',
        'web/language_change',
        'web/namespaces',
        'web/in_context',
        'web/wrapping',
        {
          label: 'Integrations',
          collapsed: false,
          type: 'category',
          items: [
            {
              label: 'Using with React',
              type: 'category',
              items: [
                'web/react/installation',
                'web/react/translating',
                'web/react/tags_interpolation',
                'web/react/switching_languages',
                'web/react/preparing_for_production',
                {
                  label: 'Server Side Rendering (SSR)',
                  type: 'category',
                  items: [
                    'web/react/ssr/ssr',
                    'web/react/ssr/next',
                    'web/react/ssr/gatsby',
                  ],
                },
                'web/react/api',
              ],
            },
            {
              label: 'Using with Angular',
              type: 'category',
              items: [
                'web/angular/installation',
                'web/angular/translating',
                'web/angular/switching_language',
                'web/angular/angular_preparing_for_production',
                'web/angular/api',
              ],
            },
            {
              label: 'Using with Vue',
              type: 'category',
              items: [
                'web/vue/installation',
                'web/vue/translating',
                'web/vue/switching_languages',
                'web/vue/preparing_for_production',
                'web/vue/api',
              ],
            },
            {
              label: 'Using with Svelte',
              type: 'category',
              items: [
                'web/svelte/installation',
                'web/svelte/translating',
                'web/svelte/switching_language',
                'web/svelte/preparing_for_production',
                'web/svelte/api',
              ],
            },
            {
              label: 'Using with i18next',
              type: 'category',
              items: [
                'web/i18next/installation',
                'web/i18next/react',
                'web/i18next/vue',
                'web/i18next/preparing_for_production',
                'web/i18next/api',
              ],
            },
            {
              id: 'web/php',
              type: 'doc',
            },
            {
              id: 'web/dart',
              type: 'doc',
            },
          ],
        },
        {
          label: 'Text observer',
          type: 'category',
          items: [
            'web/text_observer/hello_world',
            'web/text_observer/preparing_for_production',
            'web/text_observer/adding_loading_overlay',
            'web/text_observer/translating_imperatively',
            'web/text_observer/providing_default_value',
            'web/text_observer/parameter_interpolation',
          ],
        },
        {
          label: 'API',
          type: 'category',
          items: [
            'web/api/packages',
            {
              label: 'Core package',
              type: 'category',
              items: [
                'web/api/core_package/about',
                'web/api/core_package/tolgee',
                'web/api/core_package/options',
                'web/api/core_package/format_simple',
                'web/api/core_package/other_tools',
                'web/api/core_package/events',
                'web/api/core_package/plugin',
                'web/api/core_package/observer_options',
              ],
            },
            {
              label: 'Web package',
              type: 'category',
              items: [
                'web/api/web_package/about',
                'web/api/web_package/plugins',
                'web/api/web_package/bundled_plugins',
                'web/api/web_package/other_tools',
              ],
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

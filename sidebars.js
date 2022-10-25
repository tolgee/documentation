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
        'sdk/about',
        'sdk/installation',
        'sdk/initialization',
        'sdk/translating',
        'sdk/formatting',
        'sdk/language_change',
        'sdk/namespaces',
        'sdk/in_context',
        'sdk/wrapping',
        'sdk/preparing_for_production',
        {
          label: 'Integrations',
          collapsed: false,
          type: 'category',
          items: [
            {
              label: 'Using with React',
              type: 'category',
              items: [
                'sdk/react/installation',
                'sdk/react/translating',
                'sdk/react/tags_interpolation',
                'sdk/react/switching_languages',
                'sdk/react/preparing_for_production',
                {
                  label: 'Server Side Rendering (SSR)',
                  type: 'category',
                  items: [
                    'sdk/react/ssr/ssr',
                    'sdk/react/ssr/next',
                    'sdk/react/ssr/gatsby',
                  ],
                },
                'sdk/react/api',
              ],
            },
            {
              label: 'Using with Angular',
              type: 'category',
              items: [
                'sdk/angular/installation',
                'sdk/angular/translating',
                'sdk/angular/switching_language',
                'sdk/angular/angular_preparing_for_production',
                'sdk/angular/api',
              ],
            },
            {
              label: 'Using with Vue',
              type: 'category',
              items: [
                'sdk/vue/installation',
                'sdk/vue/translating',
                'sdk/vue/switching_languages',
                'sdk/vue/preparing_for_production',
                'sdk/vue/api',
              ],
            },
            {
              label: 'Using with Svelte',
              type: 'category',
              items: [
                'sdk/svelte/installation',
                'sdk/svelte/translating',
                'sdk/svelte/switching_language',
                'sdk/svelte/preparing_for_production',
                'sdk/svelte/api',
              ],
            },
            {
              label: 'Using with i18next',
              type: 'category',
              items: [
                'sdk/i18next/installation',
                'sdk/i18next/react',
                'sdk/i18next/vue',
                'sdk/i18next/preparing_for_production',
                'sdk/i18next/api',
              ],
            },
            {
              id: 'sdk/php',
              type: 'doc',
            },
            {
              id: 'sdk/dart',
              type: 'doc',
            },
          ],
        },
        {
          label: 'Text observer',
          type: 'category',
          items: [
            'sdk/text_observer/hello_world',
            'sdk/text_observer/preparing_for_production',
            'sdk/text_observer/adding_loading_overlay',
            'sdk/text_observer/translating_imperatively',
            'sdk/text_observer/providing_default_value',
            'sdk/text_observer/parameter_interpolation',
          ],
        },
        {
          label: 'API',
          type: 'category',
          items: [
            'sdk/api/packages',
            {
              label: 'Core package',
              type: 'category',
              items: [
                'sdk/api/core_package/about',
                'sdk/api/core_package/tolgee',
                'sdk/api/core_package/options',
                'sdk/api/core_package/format_simple',
                'sdk/api/core_package/other_tools',
                'sdk/api/core_package/events',
                'sdk/api/core_package/plugin',
                'sdk/api/core_package/observer_options',
              ],
            },
            {
              label: 'Web package',
              type: 'category',
              items: [
                'sdk/api/web_package/about',
                'sdk/api/web_package/plugins',
                'sdk/api/web_package/bundled_plugins',
                'sdk/api/web_package/other_tools',
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

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
      label: 'Tolgee JS SDK',
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
                'sdk/integrations/react/installation',
                'sdk/integrations/react/translating',
                'sdk/integrations/react/tags_interpolation',
                'sdk/integrations/react/switching_language',
                {
                  label: 'Server Side Rendering (SSR)',
                  type: 'category',
                  items: [
                    'sdk/integrations/react/ssr/ssr',
                    'sdk/integrations/react/ssr/next',
                    'sdk/integrations/react/ssr/gatsby',
                  ],
                },
                'sdk/integrations/react/api',
              ],
            },
            {
              label: 'Using with Angular',
              type: 'category',
              items: [
                'sdk/integrations/angular/installation',
                'sdk/integrations/angular/translating',
                'sdk/integrations/angular/namespaces',
                'sdk/integrations/angular/switching_language',
                'sdk/integrations/angular/html_tags',
                'sdk/integrations/angular/api',
              ],
            },
            {
              label: 'Using with Vue',
              type: 'category',
              items: [
                'sdk/integrations/vue/installation',
                'sdk/integrations/vue/translating',
                'sdk/integrations/vue/switching_language',
                'sdk/integrations/vue/api',
              ],
            },
            {
              label: 'Using with Svelte',
              type: 'category',
              items: [
                'sdk/integrations/svelte/installation',
                'sdk/integrations/svelte/translating',
                'sdk/integrations/svelte/switching_language',
                'sdk/integrations/svelte/api',
              ],
            },
            {
              label: 'Using with i18next',
              type: 'category',
              items: [
                'sdk/integrations/i18next/installation',
                'sdk/integrations/i18next/react',
                'sdk/integrations/i18next/vue',
                'sdk/integrations/i18next/api',
              ],
            },
            {
              id: 'sdk/integrations/php',
              type: 'doc',
            },
            {
              id: 'sdk/integrations/dart',
              type: 'doc',
            },
          ],
        },
        {
          id: 'sdk/text_observer',
          type: 'doc',
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

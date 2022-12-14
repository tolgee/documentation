module.exports = {
  someSidebar: [
    'about',
    'installation',
    'initialization',
    'translating',
    'formatting',
    'switching_language',
    'namespaces',
    'in_context',
    'wrapping',
    'providing_static_data',
    {
      label: 'Integrations',
      collapsed: false,
      type: 'category',
      items: [
        {
          label: 'Using with React',
          type: 'category',
          items: [
            'integrations/react/installation',
            'integrations/react/translating',
            'integrations/react/tags_interpolation',
            'integrations/react/switching_language',
            {
              label: 'Server Side Rendering (SSR)',
              type: 'category',
              items: [
                'integrations/react/ssr/ssr',
                'integrations/react/ssr/next',
                'integrations/react/ssr/gatsby',
              ],
            },
            'integrations/react/api',
          ],
        },
        {
          label: 'Using with Angular',
          type: 'category',
          items: [
            'integrations/angular/installation',
            'integrations/angular/translating',
            'integrations/angular/namespaces',
            'integrations/angular/switching_language',
            'integrations/angular/html_tags',
            'integrations/angular/api',
          ],
        },
        {
          label: 'Using with Vue',
          type: 'category',
          items: [
            'integrations/vue/installation',
            'integrations/vue/translating',
            'integrations/vue/switching_language',
            'integrations/vue/api',
          ],
        },
        {
          label: 'Using with Svelte',
          type: 'category',
          items: [
            'integrations/svelte/installation',
            'integrations/svelte/translating',
            'integrations/svelte/switching_language',
            'integrations/svelte/api',
          ],
        },
        {
          label: 'Using with i18next',
          type: 'category',
          items: [
            'integrations/i18next/installation',
            'integrations/i18next/react',
            'integrations/i18next/vue',
            'integrations/i18next/api',
          ],
        },
      ],
    },
    {
      id: 'text_observer',
      type: 'doc',
    },
    {
      id: 'usage_without_platform',
      type: 'doc',
    },
    {
      label: 'API',
      type: 'category',
      items: [
        'api/packages',
        {
          label: 'Core package',
          type: 'category',
          items: [
            'api/core_package/about',
            'api/core_package/tolgee',
            'api/core_package/options',
            'api/core_package/format_simple',
            'api/core_package/other_tools',
            'api/core_package/events',
            'api/core_package/plugin',
            'api/core_package/observer_options',
          ],
        },
        {
          label: 'Web package',
          type: 'category',
          items: [
            'api/web_package/about',
            'api/web_package/plugins',
            'api/web_package/bundled_plugins',
            'api/web_package/other_tools',
          ],
        },

        {
          label: 'Changelog',
          type: 'category',
          items: [
            { type: 'doc', id: 'changelog/tolgee_js_version_4' },
            { type: 'doc', id: 'changelog/tolgee_js_version_3' },
          ],
        },
      ],
    },
  ],
};

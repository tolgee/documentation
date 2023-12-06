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
    'plugins',
    'tolgee_context',
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
            'integrations/react/ssr',
            {
              label: 'Next.js',
              type: 'category',
              items: [
                'integrations/react/next/introduction',
                'integrations/react/next/pages_router',
                'integrations/react/next/app_router',
              ],
            },
            'integrations/react/react_native',
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
      id: 'typed_keys',
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
            'api/web_package/tools',
            'api/web_package/constants',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Migration to v5',
      items: [
        'migration_to_v5/core',
        'migration_to_v5/react',
        'migration_to_v5/ngx',
        'migration_to_v5/svelte',
        'migration_to_v5/vue',
        'migration_to_v5/i18next',
      ],
    },
  ],
};

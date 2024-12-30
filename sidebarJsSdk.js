module.exports = {
  someSidebar: [
    'about',
    'get_started',
    {
      label: 'Integrations',
      collapsed: false,
      type: 'category',
      items: [
        {
          label: 'React',
          type: 'category',
          items: [
            'integrations/react/overview',
            'integrations/react/installation',
            'integrations/react/translating',
            'integrations/react/tags_interpolation',
            'integrations/react/switching_language',
            {
              label: 'Next.js',
              type: 'category',
              items: [
                'integrations/react/next/introduction',
                'integrations/react/next/pages-router',
                'integrations/react/next/app-router',
                'integrations/react/next/app-router-next-intl',
              ],
            },
            'integrations/react/ssr',
            'integrations/react/react_native',
            'integrations/react/api',
          ],
        },
        {
          label: 'Angular',
          type: 'category',
          items: [
            'integrations/angular/overview',
            'integrations/angular/installation',
            'integrations/angular/translating',
            'integrations/angular/namespaces',
            'integrations/angular/switching_language',
            'integrations/angular/html_tags',
            'integrations/angular/api',
          ],
        },
        {
          label: 'Vue',
          type: 'category',
          items: [
            'integrations/vue/overview',
            'integrations/vue/installation',
            'integrations/vue/translating',
            'integrations/vue/component_interpolation',
            'integrations/vue/switching_language',
            'integrations/vue/ssr',
            'integrations/vue/api',
          ],
        },
        {
          label: 'Svelte',
          type: 'category',
          items: [
            'integrations/svelte/overview',
            'integrations/svelte/installation',
            'integrations/svelte/translating',
            'integrations/svelte/switching_language',
            'integrations/svelte/api',
          ],
        },
        {
          label: 'i18next',
          type: 'category',
          items: [
            'integrations/i18next/installation',
            'integrations/i18next/react',
            'integrations/i18next/vue',
            'integrations/i18next/api',
          ],
        },
        {
          label: 'Vanilla JS',
          type: 'category',
          items: [
            'integrations/vanilla/installation',
            'integrations/vanilla/initialization',
            'integrations/vanilla/translating',
          ],
        },
      ],
    },
    {
      label: 'Core concepts',
      type: 'category',
      collapsed: false,
      items: [
        'formatting',
        'language',
        'namespaces',
        'in_context',
        'wrapping',
        'providing_static_data',
        'filter_by_tags',
        'fetching_translations'
      ],
    },
    'keys_tagging',
    'plugins',
    'text_observer',
    'typed_keys',
    'usage_without_platform',
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
    'migration-to-v6'
  ],
};

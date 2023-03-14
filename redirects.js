module.exports.redirects = {
  redirects: [
    // fixing legacy backlinks
    {
      from: '/docs/get_started/hello_world',
      to: '/js-sdk/4.x.x/get_started/hello_world',
    },
    {
      from: '/docs/changelog/version_3',
      to: '/js-sdk/4.x.x/changelog/tolgee_js_version_3',
    },
    {
      from: '/docs/changelog/tolgee_js_version_3',
      to: '/js-sdk/4.x.x/changelog/tolgee_js_version_3',
    },
    {
      from: '/docs/server_and_web_app/self_hosting/running_with_docker',
      to: '/platform/self_hosting/running_with_docker',
    },
    {
      from: '/docs/web_app',
      to: '/js-sdk/',
    },
    {
      from: '/docs/web_app/creating_repository',
      to: '/platform/creating_project',
    },
    {
      from: '/docs/web_app/obtaining_api_key',
      to: '/platform/integration',
    },
    {
      from: '/docs/web/using_with_react/react_preparing_for_production',
      to: '/js-sdk/integrations/react/installation',
    },
    {
      from: '/docs/server_and_web_app/self_hosting/configuration',
      to: '/platform/self_hosting/configuration',
    },
    {
      from: '/tolgee-for-svelte',
      to: '/integrations/svelte',
    },
    {
      from: '/platform/managing_api_keys',
      to: '/platform/api-keys-and-pat-tokens',
    },
    {
      from: '/docs/web/understanding_tolgee_for_web',
      to: '/js-sdk/',
    },
    { from: '/docs/integrations', to: '/integrations/' },
    { from: '/integrations/all', to: '/integrations/' },
    { from: '/docs/icu_message_format', to: '/platform/icu_message_format' },
    {
      from: '/server_and_web_app/self_hosting/configuration',
      to: '/platform/self_hosting/configuration',
    },
    {
      from: '/docs/web/using_with_angular/translating',
      to: '/js-sdk/integrations/angular/translating',
    },
    {
      from: '/docs/web/in_context',
      to: '/js-sdk/in-context',
    },
    { from: '/docs/', to: '/platform/' },
    {
      from: '/docs/web/using_with_react/installation',
      to: '/js-sdk/integrations/react/installation',
    },
    {
      from: '/blog/let-this-script-type-instead-of-you-when-you-record-your-browser',
      to: '/blog/let-this-script-type-instead-of-you',
    },
    {
      from: '/docs/web/get_started/preparing_for_production',
      to: '/js-sdk/providing-static-data',
    },
    { from: '/docs/web/get_started/hello_world', to: '/js-sdk/' },
    {
      from: '/docs/web/using_with_react/ssr/ssr',
      to: '/js-sdk/integrations/react/ssr/',
    },
  ],
  createRedirects(existingPath) {
    if (existingPath.indexOf('/js-sdk/5.x.x') === 0) {
      return [
        existingPath.replace('/js-sdk/5.x.x', '/js-sdk/5.0.0-alpha.2'),
        existingPath.replace('/js-sdk/5.x.x', '/js-sdk/5.0.0-alpha.1'),
      ];
    }
    if (existingPath.indexOf('/js-sdk/4.x.x') === 0) {
      return [existingPath.replace('/js-sdk/4.x.x', '/js-sdk')];
    }
    if (existingPath.indexOf('/js-sdk') === 0) {
      return [existingPath.replace('/js-sdk', '/docs/web')];
    }
    if (existingPath.indexOf('/platform/3.x.x') === 0) {
      return [
        existingPath.replace('/platform/3.x.x', '/platform/3.0.0-alpha.1'),
        existingPath.replace('/platform/3.x.x', '/platform/3.0.0-alpha.6'),
      ];
    }
    if (existingPath.indexOf('/platform') === 0) {
      return [existingPath.replace('/platform', '/docs/platform')];
    }
    return undefined;
  },
};

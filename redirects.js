module.exports.redirects = {
  redirects: [
    // fixing legacy backlinks
    {
      from: '/docs/get_started/hello_world',
      to: '/js-sdk/get_started/hello_world',
    },
    {
      from: '/docs/changelog/version_3',
      to: '/js-sdk/changelog/tolgee_js_version_3',
    },
    {
      from: '/docs/changelog/tolgee_js_version_3',
      to: '/js-sdk/changelog/tolgee_js_version_3',
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
      to: '/js-sdk/using_with_react/preparing_for_production',
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
    { from: '/docs/integrations', to: '/integrations' },
    { from: '/integrations/all', to: '/integrations' },
  ],
  createRedirects(existingPath) {
    if (existingPath.indexOf('/docs/platform') === 0) {
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [existingPath.replace('/docs/platform', '/platform/2.x.x')];
    }
    if (existingPath.indexOf('/docs/web') === 0) {
      // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
      return [existingPath.replace('/docs/web', '/js-sdk')];
    }
    return undefined;
  },
};

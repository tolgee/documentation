import NextLogo from "../static/img/technologies/logo-next.svg";
import React from "react";

export const integrations = [{
  label: 'React',
  logo: '/img/technologies/logo-react.svg',
  links: {
    'Landing Page': '/integrations/react',
    'Docs': '/docs/web/using_with_react/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/react',
    'Example App': 'https://github.com/tolgee/react-example',
  }
}, {
  label: "Angular",
  logo: '/img/technologies/logo-angular.svg',
  links: {
    'Landing Page': '/integrations/angular',
    'Docs': '/docs/web/using_with_angular/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/ngx',
    'Example App': 'https://github.com/tolgee/ngx-example',
  }
}, {
  label: 'Vue',
  logo: '/img/technologies/logo-vue.svg',
  links: {
    'Landing Page': '/integrations/vue',
    'Docs': '/docs/web/using_with_vue/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/vue',
    'Example App': 'https://github.com/tolgee/vue-example',
  }
},
  {
    label: 'Svelte',
    logo: '/img/technologies/logo-svelte.svg',
    links: {
      'Landing Page': '/integrations/svelte',
      'Docs': '/docs/web/using_with_svelte/installation',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/svelte',
      'Example App': 'https://github.com/tolgee/svelte-example',
    }
  },
  {
    label: 'Next.js',
    logo: <NextLogo/>,
    links: {
      'Landing Page': '/integrations/next',
      'Docs': '/docs/web/using_with_react/ssr/using_with_next',
      'Example App': 'https://github.com/tolgee/next-example',
    }
  },
  {
    label: 'Gatsby',
    logo: '/img/technologies/logo-gatsby.svg',
    links: {
      'Landing Page': '/integrations/gatsby',
      'Docs': '/docs/web/using_with_react/ssr/using_with_gatsby',
      'Example App': 'https://github.com/tolgee/gatsby-example',
    }
  },
  {
    label: 'i18next',
    logo: '/img/technologies/logo-i18next.svg',
    links: {
      'Docs': '/docs/web/using_with_i18next/installation',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/i18next',
      'Example React App': 'https://github.com/tolgee/react-i18next-example',
      'Example Vue App': 'https://github.com/tolgee/vue-i18next-example',
    }
  },
  {
    label: 'Vanilla JS',
    logo: '/img/technologies/logo-js.svg',
    links: {
      'Docs': '/docs/web/get_started/hello_world',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/core',
      'Example App': 'https://github.com/tolgee/window-example',
    }
  },
  {
    label: 'REST API',
    logo: '/img/technologies/logo-swagger.svg',
    links: {
      'API Docs': '/api',
    }
  },
  {
    label: 'PHP',
    experimental: true,
    logo: '/img/technologies/logo-php.svg',
    links: {
      "Docs": "/docs/web/using_with_php",
      "GitHub Repository": "https://github.com/tolgee/php",
      "Example App": "https://github.com/tolgee/php-example",
    }
  },
  {
    label: 'Dart',
    experimental: true,
    logo: '/img/technologies/logo-dart.svg',
    links: {
      "Docs": "/docs/web/using_with_dart",
      "GitHub Repository": "https://github.com/tolgee/dart",
      "Example App": "https://github.com/tolgee/dart-example"
    }
  },
]

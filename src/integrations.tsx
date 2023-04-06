import NextLogo from '../static/img/technologies/logo-next.svg';
import React from 'react';

export const integrations = [
  {
    label: 'React',
    logo: '/img/technologies/logo-react.svg',
    links: {
      'Landing Page': '/integrations/react',
      Docs: '/js-sdk/integrations/react/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/react',
      'Example App': 'https://github.com/tolgee/react-example',
    },
  },
  {
    label: 'Angular',
    logo: '/img/technologies/logo-angular.svg',
    links: {
      'Landing Page': '/integrations/angular',
      Docs: '/js-sdk/integrations/angular/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/ngx',
      'Example App': 'https://github.com/tolgee/ngx-example',
    },
  },
  {
    label: 'Vue',
    logo: '/img/technologies/logo-vue.svg',
    links: {
      'Landing Page': '/integrations/vue',
      Docs: '/js-sdk/integrations/vue/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/vue',
      'Example App': 'https://github.com/tolgee/vue-example',
    },
  },
  {
    label: 'Svelte',
    logo: '/img/technologies/logo-svelte.svg',
    links: {
      'Landing Page': '/integrations/svelte',
      Docs: '/js-sdk/integrations/svelte/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/svelte',
      'Example App': 'https://github.com/tolgee/svelte-example',
    },
  },
  {
    label: 'Next.js',
    logo: <NextLogo />,
    links: {
      'Landing Page': '/integrations/next',
      Docs: '/js-sdk/integrations/react/ssr/next',
      'Example App': 'https://github.com/tolgee/next-example',
    },
  },
  {
    label: 'Gatsby',
    logo: '/img/technologies/logo-gatsby.svg',
    links: {
      'Landing Page': '/integrations/gatsby',
      Docs: '/js-sdk/integrations/react/ssr/gatsby',
      'Example App': 'https://github.com/tolgee/gatsby-example',
    },
  },
  {
    label: 'Figma plugin',
    logo: '/img/technologies/logo-figma.svg',
    links: {
      'Landing Page': '/integrations/figma',
      Docs: '/platform/integrations/figma_plugin/setup',
      'GitHub Repository': 'https://github.com/tolgee/figma-plugin',
    },
  },
  {
    label: 'i18next',
    logo: '/img/technologies/logo-i18next.svg',
    links: {
      Docs: '/js-sdk/integrations/i18next/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/i18next',
      'Example React App': 'https://github.com/tolgee/react-i18next-example',
      'Example Vue App': 'https://github.com/tolgee/vue-i18next-example',
    },
  },
  {
    label: 'Vanilla JS',
    logo: '/img/technologies/logo-js.svg',
    links: {
      Docs: '/js-sdk/installation',
      'GitHub Repository':
        'https://github.com/tolgee/tolgee-js/tree/main/packages/core',
      'Example App': 'https://github.com/tolgee/window-example',
    },
  },
  {
    label: 'REST API',
    logo: '/img/technologies/logo-swagger.svg',
    links: {
      'API Docs': '/api',
    },
  },
];

module.exports.footer = {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        {
          label: 'What is Tolgee',
          to: '/platform/',
        },
        {
          label: 'Get Started with Tolgee JS',
          to: '/js-sdk',
        },
        {
          label: 'Using Tolgee App',
          to: '/platform',
        },
        {
          label: 'Running server',
          to: '/platform/self_hosting/running_with_docker',
        },
        {
          label: 'Integrations',
          to: '/integrations',
        },
        {
          label: 'Chrome plugin',
          href: 'https://chrome.google.com/webstore/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj',
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Slack',
          href: 'https://join.slack.com/t/tolgeecommunity/shared_invite/zt-195isb5u8-_RcSRgVJfvgsPpOBIok~IQ',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/tolgee',
        },
        {
          label: 'Discussions',
          href: 'https://github.com/tolgee/tolgee-platform/discussions',
        },
        {
          label: 'Docker Hub',
          href: 'https://hub.docker.com/orgs/tolgee',
        },
        {
          label: 'Npm',
          href: 'https://www.npmjs.com/org/tolgee',
        },
        { label: 'OSS Friends', href: '/oss-friends' },
      ],
    },
    {
      title: 'More',
      items: [
        {
          label: 'Go to App',
          href: 'https://app.tolgee.io',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/tolgee',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/Tolgee_i18n',
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/Tolgee.i18n',
        },
        {
          label: 'Privacy policy',
          href: '/docs/terms_and_conditions/privacy_policy',
        },
        {
          label: 'Terms of use',
          href: '/docs/terms_of_use',
        },
        {
          html: '<a class="footer__link-item cky-banner-element" href="javascript:;">Cookie settings</a>',
        },
      ],
    },
  ],
  copyright: `<a class="footer__link-item" href="/">© 2021-${new Date().getFullYear()} Tolgee s.r.o. All rights reserved</a>`,
};

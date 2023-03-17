module.exports.navbar = {
  title: 'Tolgee',
  logo: {
    alt: 'Tolgee',
    src: 'img/tolgeeLogo.svg',
    srcDark: 'img/tolgeeLogoDark.svg',
  },
  items: [
    {
      type: 'dropdown',
      label: 'Product',
      position: 'right',
      items: [
        {
          type: 'html',
          value: '#Features',
        },
        {
          to: 'features/dev-tools',
          label: 'Dev tools',
        },
        {
          to: 'features/translation-assistance',
          label: 'Translation assistance',
        },
        {
          to: 'features/collaboration',
          label: 'Collaboration',
        },
        {
          type: 'html',
          value: '#About us',
        },
        {
          to: 'roadmap',
          label: 'Roadmap',
        },
        {
          to: 'opensource',
          label: 'Why Open-source?',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Development',
      position: 'right',
      items: [
        {
          type: 'html',
          value: '#Integrations',
        },
        {
          to: 'integrations/react',
          label: 'React',
        },
        {
          to: 'integrations/angular',
          label: 'Angular',
        },
        {
          to: 'integrations/vue',
          label: 'Vue',
        },
        {
          to: 'integrations/svelte',
          label: 'Svelte',
        },
        {
          to: 'integrations/next',
          label: 'Next.js',
        },
        {
          to: 'integrations/gatsby',
          label: 'Gatsby',
        },
        {
          to: 'integrations/figma',
          label: 'Figma',
        },
        {
          to: 'integrations',
          label: 'more...',
        },
        {
          type: 'html',
          value: '#API',
        },
        {
          to: 'api',
          label: 'REST API docs',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Docs',
      position: 'right',
      activeBasePath: 'docs',
      items: [
        {
          to: 'platform',
          label: 'Platform',
        },
        {
          to: 'js-sdk',
          label: 'JavaScript SDK',
        },
        {
          to: 'tolgee-cli',
          label: 'Tolgee CLI',
        },
      ],
    },
    {
      to: 'pricing',
      activeBasePath: 'pricing',
      label: 'Pricing',
      position: 'right',
    },
    {
      to: 'blog',
      activeBasePath: 'blog',
      label: 'Blog',
      position: 'right',
    },
    {
      to: 'https://app.tolgee.io',
      label: 'Login',
      position: 'right',
      className: 'login-button',
    },
    {
      to: 'https://app.tolgee.io/sign_up',
      label: 'Sign up',
      position: 'right',
      className: 'sign-up-button',
    },
  ],
};

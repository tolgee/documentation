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
          to: 'features/autonomous-translation',
          label: 'Autonomous translation',
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
        {
          to: 'career',
          label: 'We are hiring!',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Integrations',
      position: 'right',
      items: [
        {
          to: 'integrations',
          label: 'All integrations',
          activeBaseRegex: 'integrations$',
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
          to: 'js-sdk/integrations/react/react_native',
          label: 'React Native',
        },
        {
          to: 'integrations/figma',
          label: 'Figma',
        },
        {
          to: 'integrations/unreal',
          label: 'Unreal',
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
        {
          to: 'api',
          label: 'REST API',
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
      to: 'https://calendly.com/tolgee/30min',
      label: 'Book a Demo',
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

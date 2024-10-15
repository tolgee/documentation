module.exports.navbar = {
  title: 'Tolgee',
  logo: {
    alt: 'Tolgee',
    src: 'img/tolgeeLogo.svg',
    srcDark: 'img/tolgeeLogoDark.svg',
    width: 32,
    height: 32,
  },
  items: [
    {
      to: '/',
      label: 'Docs',
      className: 'menu-item-docs',
    },
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
    {
      to: 'blog',
      label: 'Blog',
      className: 'menu-item-blog',
    },

    {
      to: 'https://calendly.com/tolgee/30min',
      label: 'Book a Demo',
      position: 'right',
      className: 'book-a-demo-button',
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'home-text': 'var(--home-text)',
        'light-home-text': 'var(--light-home-text)',
        'dark-home-text': 'var(--dark-home-text)',
        primary: 'var(--ifm-color-primary)',
        'primary-dark': 'var(--ifm-color-primary-dark)',
        'primary-darker': 'var(--ifm-color-primary-darker)',
        'primary-darkest': 'var(--ifm-color-primary-darkest)',
        'primary-light': 'var(--ifm-color-primary-light)',
        'primary-lighter': 'var(--ifm-color-primary-lighter)',
        'primary-lightest': 'var(--ifm-color-primary-lightest)',
        surface: 'var(--ifm-background-surface-color)',
        'emphasis-0': 'var(--ifm-color-emphasis-0)',
        'emphasis-100': 'var(--ifm-color-emphasis-100)',
        'emphasis-200': 'var(--ifm-color-emphasis-200)',
        'emphasis-300': 'var(--ifm-color-emphasis-300)',
        'emphasis-400': 'var(--ifm-color-emphasis-400)',
        'emphasis-500': 'var(--ifm-color-emphasis-500)',
        'emphasis-600': 'var(--ifm-color-emphasis-600)',
        'emphasis-700': 'var(--ifm-color-emphasis-700)',
        'emphasis-800': 'var(--ifm-color-emphasis-800)',
        'emphasis-900': 'var(--ifm-color-emphasis-900)',
        'emphasis-1000': 'var(--ifm-color-emphasis-1000)',
        'references-bg': 'var(--references-bg)',
        'background-surface-color': 'var(--ifm-background-surface-color)',
      },
      screens: {
        desktop: '997px',
      },
    },
  },
  plugins: [],
};

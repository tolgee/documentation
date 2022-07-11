/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "home-text": "var(--home-text)",
        "light-home-text": "var(--light-home-text)",
        "dark-home-text": "var(--dark-home-text)",
        "primary": "var(--ifm-color-primary)",
        "primary-dark": "var(--ifm-color-primary-dark)",
        "primary-darker": "var(--ifm-color-primary-darker)",
        "primary-darkest": "var(--ifm-color-primary-darkest)",
        "primary-light": "var(--ifm-color-primary-light)",
        "primary-lighter": "var(--ifm-color-primary-lighter)",
        "primary-lightest": "var(--ifm-color-primary-lightest)",
      },
      screens: {
        desktop: "997px"
      }
    },
  },
  plugins: [],
}

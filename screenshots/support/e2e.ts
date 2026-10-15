import './commands';

Cypress.on('uncaught:exception', () => false);

Cypress.on('window:before:load', (win) => {
  win.localStorage.setItem('themeMode', 'light');
});

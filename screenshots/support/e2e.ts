import 'cypress-xpath';
import { register } from '../../../tolgee-platform/e2e/cypress/support/registerCommands';

register();

Cypress.on('uncaught:exception', () => false);

Cypress.on('window:before:load', (win) => {
  win.localStorage.setItem('themeMode', 'light');
});

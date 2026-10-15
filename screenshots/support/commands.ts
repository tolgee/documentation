import 'cypress-xpath';
import { register } from '../../../tolgee-platform/e2e/cypress/support/registerCommands';

declare global {
  namespace Cypress {
    interface Chainable {
      highlight(dataCy: DataCy.Value): Chainable;
      captureDoc(src: string, opts?: { clip?: DataCy.Value }): Chainable;
    }
  }
}

register();

Cypress.Commands.add('highlight', (dataCy) =>
  cy.gcy(dataCy).then(($el) => {
    $el.css({
      outline: '3px solid #e53935',
      'outline-offset': '2px',
      'border-radius': '4px',
    });
  })
);

Cypress.Commands.add('captureDoc', (src: string, opts: { clip?: DataCy.Value } = {}) => {
  const name = src.replace(/^\//, '').replace(/\.\w+$/, '');
  cy.document().then((doc) => doc.fonts.ready);
  if (opts.clip) {
    return cy.gcy(opts.clip).screenshot(name, { overwrite: true, padding: 0 });
  }
  return cy.screenshot(name, { capture: 'viewport', overwrite: true });
});

export {};

import { defineScreenshots, HOST, projectId } from '../support/defineScreenshots';

defineScreenshots([
  {
    src: '/img/docs/platform/ai-settings/prompts-list.webp',
    capture: (data) => {
      cy.visit(`${HOST}/projects/${projectId(data, 'Acme Shop')}/ai/prompts`);
      cy.gcy('ai-prompt-item-name').should('be.visible');
    },
  },
]);

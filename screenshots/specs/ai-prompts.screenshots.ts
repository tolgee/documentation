import { defineScreenshots, demoProjectUrl } from '../support/defineScreenshots';

defineScreenshots([
  {
    src: '/img/docs/platform/ai-settings/prompts-list.webp',
    prepare: (data) => {
      cy.visit(demoProjectUrl(data, 'ai/prompts'));
      cy.gcy('ai-prompt-item-name').should('be.visible');
    },
  },
]);

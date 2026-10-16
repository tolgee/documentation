import { getProjectByNameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
import { defineScreenshots, HOST } from '../support/defineScreenshots';

defineScreenshots([
  {
    src: '/img/docs/platform/ai-settings/prompts-list.webp',
    prepare: (data) => {
      cy.visit(`${HOST}/projects/${getProjectByNameFromTestData(data, 'Acme Shop').id}/ai/prompts`);
      cy.gcy('ai-prompt-item-name').should('be.visible');
    },
  },
]);

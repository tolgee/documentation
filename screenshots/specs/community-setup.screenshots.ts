import { getProjectByNameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
import { defineScreenshots, HOST } from '../support/defineScreenshots';

// The setup dialog opens only right after a project is opened to the community, so this spec
// closes and reopens the project. It has its own file because that changes the dataset.
defineScreenshots([
  {
    src: '/img/docs/platform/community-translation/setup-dialog.webp',
    viewport: { width: 1100, height: 760 },
    prepare: (data) => {
      const projectId = getProjectByNameFromTestData(data, 'Demo project').id;
      cy.visit(`${HOST}/projects/${projectId}/manage/edit/advanced`);
      const toggleCommunityTranslation = () => {
        cy.gcy('project-settings-public-switch')
          .find('input')
          .click({ scrollBehavior: false });
        cy.gcy('global-confirmation-confirm').click();
      };
      toggleCommunityTranslation();
      cy.gcy('project-settings-community-page').should('not.exist');
      toggleCommunityTranslation();
      cy.gcy('community-setup-description').should('be.visible');
      cy.focused().blur();
    },
  },
]);

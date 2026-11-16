import { getProjectByNameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
import { TestDataStandardResponse } from 'tg.baseCommon/apiCalls/testData/generator';
import { gcyAdvanced } from 'tg.baseCommon/shared';
import {
  defineScreenshots,
  highlightElement,
  HOST,
} from '../support/defineScreenshots';

const CONTRIBUTOR = 'dana.diaz@community.test';

const projectUrl = (data: TestDataStandardResponse, path: string) =>
  `${HOST}/projects/${getProjectByNameFromTestData(data, 'Demo project').id}/${path}`;

const openAdvancedSettings = (data: TestDataStandardResponse) => {
  cy.visit(projectUrl(data, 'manage/edit/advanced'));
  cy.gcy('project-settings-community-page').should('be.visible');
};

const openSuggestionsOfAppTitle = (data: TestDataStandardResponse) => {
  cy.visit(projectUrl(data, 'translations?languages=fr&search=app-title'));
  cy.gcy('translation-suggestion').should('have.length', 2);
};

defineScreenshots([
  {
    src: '/img/docs/platform/project-settings-advanced.webp',
    viewport: { width: 1280, height: 760 },
    prepare: openAdvancedSettings,
  },
  {
    src: '/img/docs/platform/community-translation/public-toggle.webp',
    viewport: { width: 1280, height: 660 },
    prepare: (data) => {
      openAdvancedSettings(data);
      // The data-cy sits inside the toggle; the option's container is its third ancestor.
      highlightElement(
        cy.gcy('project-settings-public-switch').parents().eq(2)
      );
    },
  },
  {
    src: '/img/docs/platform/community-translation/public-projects.webp',
    viewport: { width: 1280, height: 560 },
    loginAs: null,
    prepare: () => {
      cy.visit(`${HOST}/public-projects`);
      cy.gcy('dashboard-projects-list-item').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/community-project-page.webp',
    viewport: { width: 1280, height: 700 },
    loginAs: null,
    prepare: (data) => {
      cy.visit(projectUrl(data, 'community'));
      cy.gcy('community-language-row').should('be.visible');
      cy.gcy('community-top-contributor').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/contributors-page.webp',
    viewport: { width: 1280, height: 800 },
    loginAs: null,
    prepare: (data) => {
      cy.visit(projectUrl(data, 'community/contributors'));
      cy.gcy('community-activity-chart').should('be.visible');
      cy.gcy('community-contributor-card').first().should('be.visible');
      // The chart's bars grow in an animation.
      cy.wait(1500);
    },
  },
  {
    src: '/img/docs/platform/community-translation/community-profile.webp',
    viewport: { width: 1280, height: 1000 },
    loginAs: null,
    prepare: (data) => {
      const contributor = data.users.find((u) => u.username === CONTRIBUTOR);
      cy.visit(`${HOST}/users/${contributor.id}`);
      cy.gcy('community-profile-calendar').should('be.visible');
      cy.gcy('community-profile-activity-item').should('exist');
    },
  },
  {
    src: '/img/docs/platform/community-translation/suggestions-accept.webp',
    viewport: { width: 1200, height: 520 },
    prepare: (data) => {
      openSuggestionsOfAppTitle(data);
      cy.gcy('translations-table-cell-translation').first().click();
      gcyAdvanced({ value: 'suggestion-action', action: 'menu' })
        .first()
        .click({ force: true });
      cy.gcy('translation-suggestion-action-menu-item').should('be.visible');
      highlightElement(
        gcyAdvanced({ value: 'suggestion-action', action: 'accept' }).first()
      );
      highlightElement(
        gcyAdvanced({
          value: 'translation-suggestion-action-menu-item',
          action: 'accept-decline-others',
        }),
        { inset: true }
      );
    },
  },
  {
    src: '/img/docs/platform/community-translation/suggestion-author-card.webp',
    viewport: { width: 1200, height: 420 },
    prepare: (data) => {
      openSuggestionsOfAppTitle(data);
      cy.gcy('suggestion-author')
        .last()
        .trigger('mouseover', { scrollBehavior: false });
      cy.gcy('community-contributor-card-suggestions').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/members-community-tab.webp',
    viewport: { width: 1100, height: 440 },
    prepare: (data) => {
      cy.visit(projectUrl(data, 'manage/permissions'));
      cy.gcy('project-members-tab-community').click();
      cy.gcy('project-contributor-item').first().should('be.visible');
      cy.focused().blur();
    },
  },
  {
    src: '/img/docs/platform/community-translation/profile-visibility-switch.webp',
    viewport: { width: 1100, height: 500 },
    loginAs: CONTRIBUTOR,
    prepare: () => {
      cy.visit(`${HOST}/account/profile`);
      cy.gcy('user-profile-visibility-view-link').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/community-projects.webp',
    viewport: { width: 1100, height: 600 },
    loginAs: CONTRIBUTOR,
    prepare: () => {
      cy.visit(`${HOST}/community-projects`);
      cy.gcy('community-my-contributions-toggle').should('be.visible');
      cy.gcy('dashboard-projects-list-item').should('be.visible');
    },
  },
]);

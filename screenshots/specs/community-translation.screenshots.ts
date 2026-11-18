import { TestDataStandardResponse } from 'tg.baseCommon/apiCalls/testData/generator';
import { getUserByUsernameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
import { gcyAdvanced } from 'tg.baseCommon/shared';
import {
  defineScreenshots,
  demoProjectUrl,
  highlightElement,
  HOST,
} from '../support/defineScreenshots';

const DANA = 'dana.diaz@community.test';
const ELI = 'eli.evans@community.test';
const FATIMA = 'fatima.farouk@community.test';

const CHART_ANIMATION_MS = 1500;

const openAdvancedSettings = (data: TestDataStandardResponse) => {
  cy.visit(demoProjectUrl(data, 'manage/edit/advanced'));
  cy.gcy('project-settings-community-page').should('be.visible');
};

const communityOption = () =>
  cy.gcy('project-settings-public-switch').parents().eq(2);

const openFrenchSuggestionsOfAppTitle = (data: TestDataStandardResponse) => {
  cy.visit(demoProjectUrl(data, 'translations?languages=fr&search=app-title'));
  cy.gcy('translation-suggestion').should('have.length', 2);
};

const suggestionBy = (data: TestDataStandardResponse, username: string) =>
  gcyAdvanced({
    value: 'translation-suggestion',
    'author-id': String(getUserByUsernameFromTestData(data, username).id),
  });

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
      highlightElement(communityOption());
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
      cy.visit(demoProjectUrl(data, 'community'));
      cy.gcy('community-language-row').should('be.visible');
      cy.gcy('community-top-contributor').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/contributors-page.webp',
    viewport: { width: 1280, height: 800 },
    loginAs: null,
    prepare: (data) => {
      cy.visit(demoProjectUrl(data, 'community/contributors'));
      cy.gcy('community-activity-chart').should('be.visible');
      cy.gcy('community-contributor-card').first().should('be.visible');
      cy.wait(CHART_ANIMATION_MS);
    },
  },
  {
    src: '/img/docs/platform/community-translation/community-profile.webp',
    viewport: { width: 1280, height: 1000 },
    loginAs: null,
    prepare: (data) => {
      cy.visit(
        `${HOST}/users/${getUserByUsernameFromTestData(data, DANA).id}`
      );
      cy.gcy('community-profile-calendar').should('be.visible');
      cy.gcy('community-profile-activity-item').should('exist');
    },
  },
  {
    src: '/img/docs/platform/community-translation/suggestions-accept.webp',
    viewport: { width: 1200, height: 520 },
    prepare: (data) => {
      openFrenchSuggestionsOfAppTitle(data);
      cy.gcy('translations-table-cell-translation').click();
      suggestionBy(data, ELI)
        .findDcyAdvanced({ value: 'suggestion-action', action: 'menu' })
        .click({ force: true });
      cy.gcy('translation-suggestion-action-menu-item').should('be.visible');
      highlightElement(
        suggestionBy(data, ELI).findDcyAdvanced({
          value: 'suggestion-action',
          action: 'accept',
        })
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
      openFrenchSuggestionsOfAppTitle(data);
      suggestionBy(data, FATIMA)
        .findDcy('suggestion-author')
        .trigger('mouseover', { scrollBehavior: false });
      cy.gcy('community-contributor-card-suggestions').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/members-community-tab.webp',
    viewport: { width: 1100, height: 440 },
    prepare: (data) => {
      cy.visit(demoProjectUrl(data, 'manage/permissions'));
      cy.gcy('project-members-tab-community').click();
      cy.gcy('project-contributor-item').first().should('be.visible');
      cy.focused().blur();
    },
  },
  {
    src: '/img/docs/platform/community-translation/profile-visibility-switch.webp',
    viewport: { width: 1100, height: 500 },
    loginAs: DANA,
    prepare: () => {
      cy.visit(`${HOST}/account/profile`);
      cy.gcy('user-profile-visibility-view-link').should('be.visible');
    },
  },
  {
    src: '/img/docs/platform/community-translation/community-projects.webp',
    viewport: { width: 1100, height: 600 },
    loginAs: DANA,
    prepare: () => {
      cy.visit(`${HOST}/community-projects`);
      cy.gcy('community-my-contributions-toggle').should('be.visible');
      cy.gcy('dashboard-projects-list-item').should('be.visible');
    },
  },
]);

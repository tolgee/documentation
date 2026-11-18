import {
  forceDate,
  login,
  logout,
  releaseForcedDate,
  v2apiFetch,
} from 'tg.baseCommon/apiCalls/common';
import { HOST } from 'tg.baseCommon/constants';
import {
  generateTestDataObject,
  TestDataStandardResponse,
} from 'tg.baseCommon/apiCalls/testData/generator';
import { getProjectByNameFromTestData } from 'tg.baseCommon/apiCalls/testData/testData';
import { waitForGlobalLoading } from 'tg.baseCommon/loading';

export { HOST };

const PINNED_DATE = new Date('2026-01-15T10:00:00Z');
const OWNER = 'alice@whattopack.test';
const docsData = generateTestDataObject('docs');

export const demoProjectUrl = (data: TestDataStandardResponse, path: string) =>
  `${HOST}/projects/${getProjectByNameFromTestData(data, 'Demo project').id}/${path}`;

export type ScreenshotConfig = {
  src: string;
  viewport?: { width: number; height: number };
  clip?: DataCy.Value;
  highlight?: DataCy.Value[];
  /** `null` captures as a visitor without an account. Default: the owner. */
  loginAs?: string | null;
  prepare: (data: TestDataStandardResponse) => void;
};

export function defineScreenshots(configs: ScreenshotConfig[]) {
  describe(Cypress.spec.relative, () => {
    let data: TestDataStandardResponse;

    before(() => {
      forceDate(PINNED_DATE.getTime());
      docsData.clean();
      docsData.generateStandard().then((r) => {
        data = r.body;
      });
    });

    after(() => {
      releaseForcedDate();
    });

    configs.forEach((config) => {
      it(config.src, () => {
        if (config.viewport) {
          cy.viewport(config.viewport.width, config.viewport.height);
        }
        cy.clock(PINNED_DATE, ['Date']);
        hideTestClockWidget();
        logInOrOut(config.loginAs);
        config.prepare(data);
        config.highlight?.forEach(highlight);
        takeScreenshot(config.src, config.clip);
      });
    });
  });
}

function logInOrOut(loginAs: string | null | undefined) {
  if (loginAs === null) {
    logout();
    return;
  }
  login(loginAs ?? OWNER).then(dismissAnnouncements);
}

function hideTestClockWidget() {
  cy.intercept({ url: '**', middleware: true }, (req) => {
    req.on('response', (res) => {
      delete res.headers['x-tolgee-test-clock'];
    });
  });
}

function dismissAnnouncements() {
  v2apiFetch('announcement/dismiss', { method: 'POST' });
}

function highlight(dataCy: DataCy.Value) {
  highlightElement(cy.gcy(dataCy));
}

/**
 * For an element `highlight` cannot name by its data-cy alone; call it at the end of `prepare`.
 * `inset` draws the outline inside the element, for one whose parent clips what lies outside it.
 */
export function highlightElement(
  element: Cypress.Chainable<JQuery>,
  { inset = false } = {}
) {
  element.then(($el) => {
    $el.css({
      outline: '3px solid #e53935',
      'outline-offset': inset ? '-3px' : '2px',
      'border-radius': '4px',
    });
  });
}

function takeScreenshot(src: string, clip?: DataCy.Value) {
  const name = src.replace(/^\//, '').replace(/\.\w+$/, '');
  waitForGlobalLoading();
  cy.document().then((doc) => doc.fonts.ready);
  if (clip) {
    cy.gcy(clip).screenshot(name, { overwrite: true, padding: 0 });
    return;
  }
  cy.screenshot(name, { capture: 'viewport', overwrite: true });
}

import {
  forceDate,
  login,
  releaseForcedDate,
  v2apiFetch,
} from 'tg.baseCommon/apiCalls/common';
import { HOST } from 'tg.baseCommon/constants';
import {
  generateTestDataObject,
  TestDataStandardResponse,
} from 'tg.baseCommon/apiCalls/testData/generator';
import { waitForGlobalLoading } from 'tg.baseCommon/loading';

export { HOST };

const PINNED_DATE = new Date('2026-01-15T10:00:00Z');
const OWNER = 'olivia@acme.test';
const docsData = generateTestDataObject('docs');

export type ScreenshotConfig = {
  src: string;
  viewport?: { width: number; height: number };
  clip?: DataCy.Value;
  highlight?: DataCy.Value[];
  loginAs?: string;
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
        login(config.loginAs ?? OWNER).then(dismissAnnouncements);
        config.prepare(data);
        config.highlight?.forEach(highlight);
        takeScreenshot(config.src, config.clip);
      });
    });
  });
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
  cy.gcy(dataCy).then(($el) => {
    $el.css({
      outline: '3px solid #e53935',
      'outline-offset': '2px',
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

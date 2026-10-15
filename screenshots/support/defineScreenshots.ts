import { login } from 'tg.baseCommon/apiCalls/common';
import { HOST } from 'tg.baseCommon/constants';
import {
  generateTestDataObject,
  TestDataStandardResponse,
} from 'tg.baseCommon/apiCalls/testData/generator';

export const PINNED_DATE = new Date('2026-01-15T10:00:00Z');
export const OWNER = 'olivia@acme.test';
export { HOST };

export const docsData = generateTestDataObject('docs');

export type ScreenshotConfig = {
  src: string;
  viewport?: { width: number; height: number };
  clip?: DataCy.Value;
  highlight?: DataCy.Value[];
  loginAs?: string;
  capture: (data: TestDataStandardResponse) => void;
};

export const projectId = (data: TestDataStandardResponse, name: string) => {
  const project = data.projects.find((p) => p.name === name);
  if (!project) throw new Error(`Project "${name}" is not in the docs dataset`);
  return project.id;
};

export function defineScreenshots(configs: ScreenshotConfig[]) {
  describe(Cypress.spec.relative, () => {
    let data: TestDataStandardResponse;

    before(() => {
      docsData.clean();
      docsData.generateStandard().then((r) => {
        data = r.body;
      });
    });

    configs.forEach((config) => {
      it(config.src, () => {
        const { width, height } = config.viewport ?? { width: 1512, height: 768 };
        cy.viewport(width, height);
        cy.clock(PINNED_DATE, ['Date']);
        login(config.loginAs ?? OWNER);
        config.capture(data);
        config.highlight?.forEach((dataCy) => cy.highlight(dataCy));
        cy.captureDoc(config.src, { clip: config.clip });
      });
    });
  });
}

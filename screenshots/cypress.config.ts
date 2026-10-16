import { defineConfig } from 'cypress';
import * as path from 'path';

const HOST =
  process.env.CYPRESS_HOST ??
  `http://localhost:${process.env.TOLGEE_E2E_PORT ?? 8201}`;

export default defineConfig({
  viewportWidth: 1512,
  viewportHeight: 768,
  defaultCommandTimeout: 20000,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'specs/*.screenshots.ts',
    supportFile: 'support/e2e.ts',
    fixturesFolder: false,
    screenshotsFolder: path.join(__dirname, 'runner/output'),
    setupNodeEvents(on) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args = launchOptions.args.filter(
            (a) => !a.startsWith('--window-size=')
          );
          launchOptions.args.push(
            '--window-size=2400,1400',
            '--force-device-scale-factor=2',
            '--hide-scrollbars'
          );
        }
        return launchOptions;
      });
    },
  },
  env: {
    HOST,
    API_URL: process.env.CYPRESS_API_URL ?? HOST,
  },
});

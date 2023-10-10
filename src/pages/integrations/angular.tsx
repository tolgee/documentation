import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import { LandingPageInstallationCode } from '../../component/landingPages/LandingPageInstallationCode';
import AngularLogo from '../../../static/img/technologies/logo-angular.svg';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';
import { LandingPageBottomSignUp } from '../../component/landingPages/LandingPageBottomSignup';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/js-sdk/integrations/angular/installation' }}
    githubRepo={{ link: 'ngx' }}
    exampleApp="ngx-example"
    primary={primary}
  />
);

export default function Angular() {
  return (
    <LandingPage title={'Tolgee for Angular'}>
      <Head>
        <meta
          name="description"
          content="Learn how to install Tolgee Angular integration library. With Tolgee i18n library for Angular, you can enjoy all Tolgee i18n features."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <AngularLogo width={80} />,
          name: 'Angular',
        }}
        title="Tolgee for Angular"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/ngx">
        <p>
          Tolgee for Angular provides a simple API to create a multi-lingual
          Angular application. With Tolgee i18n library for Angular, you can
          enjoy all Tolgee i18n features.
        </p>
        <p>
          To see Angular with Tolgee in action, check{' '}
          <a href="https://github.com/tolgee/ngx-example">this example app</a>.
        </p>
      </LandingPageDescription>

      <LandingPageInstallation>
        <LandingPageInstallationStep title="1. Create project in Tolgee platform">
          <p>
            Go to <a href="https://app.tolgee.io">Tolgee Cloud app</a> or access
            your{' '}
            <a href="/platform/self_hosting/running_with_docker">
              self-hosted instance
            </a>{' '}
            and create a project. Then obtain your API key.
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/ngx
          </LandingPageInstallationCode>
          <p>Then import NgxTolgeeModule in your app</p>
          <LandingPageInstallationCode language="ts" fullWidth>
            {providerCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title='3. Use elements with the "t" attribute to translate'>
          <LandingPageInstallationCode language="html" fullWidth>
            {usingTCode}
          </LandingPageInstallationCode>
          <p>Now you are able to Alt + Click & translate your texts!</p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="Explore the Docs and check out example app!">
          <p>Continue exploring...</p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <DocsLinks primary />
          </div>
        </LandingPageInstallationStep>

        <LandingPageBottomSignUp label="Localize your Angular app" />
      </LandingPageInstallation>
      <MoreIntegrations />
    </LandingPage>
  );
}

const providerCode = `import {
  DevTools,
  NgxTolgeeModule,
  Tolgee,
  TOLGEE_INSTANCE,
  FormatSimple
} from '@tolgee/ngx';

...
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    NgxTolgeeModule,
    ...
  ],
  providers: [
    {
      provide: TOLGEE_INSTANCE,
      useFactory: () => {
        return Tolgee()
          .use(DevTools())
          .use(FormatSimple())
          .init({
            language: 'en'
            apiUrl: environment.tolgeeApiUrl,
            apiKey: environment.tolgeeApiKey,
          });
      },
    },
  ],
  ...
})
export class AppModule {}`;

const usingTCode = `<h1 t key="translate_me" default="Translate me!"></h1>`;

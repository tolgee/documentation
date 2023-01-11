import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import { LandingPageInstallationCode } from '../../component/landingPages/LandingPageInstallationCode';
import { AlertInfo } from '../../component/AlertInfo';
import VueLogo from '../../../static/img/technologies/logo-vue.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/js-sdk/using_with_vue/installation' }}
    githubRepo="vue"
    exampleApp="vue-example"
    primary={primary}
  />
);

export default function Vue() {
  return (
    <LandingPage title={'Tolgee for Vue'}>
      <Head>
        <meta
          name="description"
          content="Learn how to install Tolgee Vue integration library. With Tolgee i18n library for Vue, you can enjoy all Tolgee i18n features."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <VueLogo width={80} />,
          name: 'Vue',
        }}
        title="Tolgee for Vue"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/vue">
        <p>
          Tolgee for Vue provides a simple API to create a multi-lingual Vue
          application. With Tolgee i18n library for Vue, you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see Vue with Tolgee in action, check{' '}
          <a href="https://github.com/tolgee/vue-example">this example app</a>.
        </p>
      </LandingPageDescription>

      <LandingPageInstallation>
        <AlertInfo>Tolgee for Vue currently supports only Vue v3.</AlertInfo>
        <LandingPageInstallationStep title="1. Create a project in Tolgee platform">
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
            npm i @tolgee/vue
          </LandingPageInstallationCode>
          <p>Initialize Tolgee and use Vue plugin:</p>
          <LandingPageInstallationCode language="js" fullWidth={true}>
            {initialization}
          </LandingPageInstallationCode>
          <p>And use Tolgee provider:</p>
          <LandingPageInstallationCode language="html" fullWidth={true}>
            {providerCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="3. Use T component to translate your texts">
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
      </LandingPageInstallation>
      <MoreIntegrations />
    </LandingPage>
  );
}

const initialization = `import { Tolgee, DevTools, VueTolgee, FormatSimple } from '@tolgee/vue';

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',
    apiUrl: process.env.VUE_APP_TOLGEE_API_URL,
    apiKey: process.env.VUE_APP_TOLGEE_API_KEY,
  });

...

app.use(VueTolgee, { tolgee });
`;

const providerCode = `<template>
  <TolgeeProvider>
    <template v-slot:fallback>
      <div>Loading...</div>
    </template>
    <App />
  </TolgeeProvider>
</template>`;

const usingTCode = `<template>
  <T keyName="translation_key" defaultValue="Translate me!" />
</template>
`;

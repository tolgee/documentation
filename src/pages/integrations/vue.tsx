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

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/docs/sdk/integrations/vue/installation' }}
    githubRepo="vue"
    exampleApp="vue-example"
    primary={primary}
  />
);

export default function Vue() {
  return (
    <LandingPage title={'Tolgee for Vue'}>
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
          Tolgee for Vue provides simple API to create multi-lingual Vue
          application. With Tolgee i18n library for Vue you can enjoy all Tolgee
          i18n features.
        </p>
        <p>
          To see Vue with Tolgee in action, check{' '}
          <a href="https://github.com/tolgee/vue-example">this example app</a>.
        </p>
      </LandingPageDescription>

      <LandingPageInstallation>
        <AlertInfo>Tolgee for Vue currently supports only Vue v3.</AlertInfo>
        <LandingPageInstallationStep title="1. Create project in Tolgee platform">
          <p>
            Go to <a href="https://app.tolgee.io">Tolgee Cloud app</a> or access
            your{' '}
            <a href="/docs/platform/self_hosting/running_with_docker">
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
          <p>Then wrap your code with TolgeeProvider</p>
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

const providerCode = `<template>
  <TolgeeProvider :config="config">
    <YourApp />
  </TolgeeProvider>
</template>

<script>

export default {
  data() {
    return {
      config: {
        apiUrl: 'https://app.tolgee.io',
        apiKey: '<your api key>',
      },
    };
  },
};
</script>`;

const usingTCode = `<template>
  <T keyName="translation_key" defaultValue="Translate me!" />
</template>
`;

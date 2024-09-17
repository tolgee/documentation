import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import { LandingPageInstallationCode } from '../../component/landingPages/LandingPageInstallationCode';
import ReactLogo from '../../../static/img/technologies/logo-react.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';
import { LandingPageBottomSignUp } from '../../component/landingPages/LandingPageBottomSignup';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/js-sdk/integrations/react/installation' }}
    githubRepo={{ link: 'react' }}
    exampleApp="react-example"
    primary={primary}
  />
);

export default function ReactIntegration() {
  return (
    <LandingPage title={'Tolgee for React'}>
      <Head>
        <meta
          name="description"
          content="Learn how to install Tolgee React integration library. With Tolgee i18n library for React you can enjoy all Tolgee i18n features."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <ReactLogo width={80} />,
          name: 'React',
        }}
        title="Tolgee for React"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react">
        <p>
          Tolgee for React provides a simple API to create a multi-lingual React
          application. With Tolgee i18n library for React, you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see React with Tolgee in action, check{' '}
          <a href="https://github.com/tolgee/react-example">this example app</a>
          .
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
          <p>Install the npm package.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/react
          </LandingPageInstallationCode>
          <p>Then wrap your code with TolgeeProvider</p>
          <LandingPageInstallationCode language="jsx" fullWidth={true}>
            {reactProviderCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="3. Use T component to translate your texts">
          <LandingPageInstallationCode language="jsx" fullWidth>
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
        <LandingPageBottomSignUp label="Localize your React app" />
      </LandingPageInstallation>
      <MoreIntegrations />
    </LandingPage>
  );
}

const reactProviderCode = `import { Tolgee, DevTools, TolgeeProvider, FormatSimple } from "@tolgee/react";

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',
    apiUrl: process.env.VITE_APP_TOLGEE_API_URL,
    apiKey: process.env.VITE_APP_TOLGEE_API_KEY,
  });

...

<TolgeeProvider
  tolgee={tolgee}
  fallback="Loading..." // loading fallback
>
  <App />
</TolgeeProvider>
`;

const usingTCode = `import { T } from "@tolgee/react";

export const Component = () => {
  return (
    <h1>
      <T keyName="translate_me">Translate me!</T>
    </h1>
  )
}`;

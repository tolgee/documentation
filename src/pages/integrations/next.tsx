import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import { LandingPageInstallationCode } from '../../component/landingPages/LandingPageInstallationCode';
import { ExampleAppLinkDescriptionParagraph } from '../../component/landingPages/common/ExampleAppLinkDescriptionParagraph';
import { InstallationStepCreateProjectInTolgeePlatform } from '../../component/landingPages/common/InstallationStepCreateProjectInTolgeePlatform';
import { ReactBaseParagraph } from '../../component/landingPages/ReactBaseParagraph';
import { ReactInstallationStepUseTComponent } from '../../component/landingPages/js/TeactInstallationStepUseTComponent';
import NextLogo from '../../../static/img/technologies/logo-next.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{
      label: 'Next Docs',
      link: '/docs/sdk/integrations/react/ssr/next',
    }}
    exampleApp="next-example"
    additionalDocs={{
      label: 'React Docs',
      link: '/docs/sdk/integrations/react/installation',
    }}
    primary={primary}
  />
);

export default function Next() {
  return (
    <LandingPage title={'Tolgee for Next'}>
      <LandingPageHeadline
        loveImage={{
          img: <NextLogo width={80} />,
          name: 'Next.js',
        }}
        title="Tolgee for Next"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react">
        <p>
          To use Tolgee with your Next application, use React integration
          library together with Next i18n support.
        </p>
        <ReactBaseParagraph />
        <ExampleAppLinkDescriptionParagraph
          repoName={'next-example'}
          technologyName={'Next'}
        />
      </LandingPageDescription>

      <LandingPageInstallation>
        <InstallationStepCreateProjectInTolgeePlatform />
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/react
          </LandingPageInstallationCode>
          <p>Prepare your next-config.js.</p>
          <LandingPageInstallationCode language="js">
            {nextConfigCode}
          </LandingPageInstallationCode>
          <p>Then wrap your code with TolgeeProvider</p>
          <LandingPageInstallationCode language="jsx" fullWidth={true}>
            {reactProviderCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <ReactInstallationStepUseTComponent />

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

const nextConfigCode = `/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'cs'],
        localeDetection: true,
        defaultLocale: "en"
    },
}`;

const reactProviderCode = `import { TolgeeProvider } from "@tolgee/react";
import enLocale from "../i18n/en.json";
import csLocale from "../i18n/cs.json";

export const Wrapper = () => {
  const {locale: activeLocale} = useRouter();
  
  return (
    <TolgeeProvider
      filesUrlPrefix="i18n/"
      apiUrl="https://app.tolgee.io"
      apiKey="<your api key>"
      forceLanguage={activeLocale}
      staticData={{
        en: enLocale,
        cs: csLocale
      }}
    >
      <App />
    </TolgeeProvider>
  );
}`;

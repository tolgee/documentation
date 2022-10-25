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
import GatsbyLogo from '../../../static/img/technologies/logo-gatsby.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{
      label: 'Gatsby Docs',
      link: '/docs/sdk/integrations/react/ssr/gatsby',
    }}
    exampleApp="gatsby-example"
    additionalDocs={{
      label: 'React Docs',
      link: '/docs/sdk/integrations/react/installation',
    }}
    primary={primary}
  />
);

export default function Gatsby() {
  return (
    <LandingPage title={'Tolgee for Gatsby'}>
      <LandingPageHeadline
        loveImage={{
          img: <GatsbyLogo width={70} />,
          name: 'Gatsby',
        }}
        title="Tolgee for Gatsby"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react">
        <p>
          To use Tolgee with your Gatsby application, use React integration
          library together with Gatsby i18n support.
        </p>
        <ReactBaseParagraph />
        <ExampleAppLinkDescriptionParagraph
          repoName={'gatsby-example'}
          technologyName={'Gatsby'}
        />
      </LandingPageDescription>
      <LandingPageInstallation>
        <InstallationStepCreateProjectInTolgeePlatform />
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/react gatsby-plugin-react-intl
          </LandingPageInstallationCode>
          <p>Prepare your gatsby-config.js.</p>
          <LandingPageInstallationCode language="js">
            {gatsbyConfigCode}
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

const gatsbyConfigCode = `module.exports = {
  plugins: [
    {
      resolve: \`gatsby-plugin-react-intl\`,
      options: {
        path: \`\${__dirname}/src/i18n\`,
        languages: [\`en\`, \`cs\`],
        defaultLanguage: \`en\`,
        redirect: true,
      },
    },
  ],
};`;

const reactProviderCode = `import { TolgeeProvider } from "@tolgee/react";
import enLocale from "../i18n/en.json";
import csLocale from "../i18n/cs.json";

export const Wrapper = () => {
  const intl = useIntl();
  
  return (
    <TolgeeProvider
      filesUrlPrefix="i18n/"
      apiUrl="https://app.tolgee.io"
      apiKey="<your api key>"
      forceLanguage={intl.locale}
      staticData={{
            en: enLocale,
            cs: csLocale
      }}
    >
      <App />
    </TolgeeProvider>
  );
}`;

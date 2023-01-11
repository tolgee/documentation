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
import Head from '@docusaurus/Head';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{
      label: 'Next Docs',
      link: '/js-sdk/integrations/react/ssr/next',
    }}
    exampleApp="next-example"
    additionalDocs={{
      label: 'React Docs',
      link: '/js-sdk/integrations/react/installation',
    }}
    primary={primary}
  />
);

export default function Next() {
  return (
    <LandingPage title={'Tolgee for Next'}>
      <Head>
        <meta
          name="description"
          content="Learn how to install Tolgee React integration library. With Tolgee i18n library for React, you can enjoy all Tolgee i18n features."
        />
      </Head>
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

const nextConfigCode = `module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'cs'],
        localeDetection: true,
        defaultLocale: "en"
    },
}`;

const reactProviderCode = `import enLocale from '../i18n/en.json';
import csLocale from '../i18n/cs.json';
import { useRouter } from 'next/router';
import { TolgeeProvider, DevTools, Tolgee, FormatSimple } from '@tolgee/react';

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    defaultLanguage: 'en',
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    staticData: {
      en: enLocale,
      cs: csLocale,
    },
  });

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  useMemo(() => {
    // change tolgee language without emitting events
    tolgee.setEmmiterActive(false);
    tolgee.changeLanguage(locale);
    tolgee.setEmmiterActive(true);
  }, [locale]);

  return (
    <TolgeeProvider tolgee={tolgee}>
      <Component {...pageProps} />
    </TolgeeProvider>
  );
}

export default MyApp;`;

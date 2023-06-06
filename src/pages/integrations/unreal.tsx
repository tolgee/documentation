import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import UnrealLogo from '../../../static/img/technologies/logo-unreal-engine.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/platform/integrations/unreal_plugin/usage' }}
    additionalDocs={{
      label: 'Unreal Marketplace',
      link: 'TODO',
    }}
    githubRepo={{
      explicitLink: true,
      link: 'https://github.com/tolgee/tolgee-unreal',
    }}
    primary={primary}
  />
);

export default function Unreal() {
  return (
    <LandingPage title={'Tolgee Unreal plugin'}>
      <Head>
        <meta
          name="description"
          content="Connect your Unreal Engine project with the Tolgee localization platform. This plugin will make the process of localizing your strings faster, easier, and more efficient."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <UnrealLogo width={100} />,
          name: 'Unreal',
        }}
        title="Tolgee Unreal plugin"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription
        imageLinks={{
          light: '/img/unreal-plugin-light.png',
          dark: '/img/unreal-plugin-dark.png',
        }}
      >
        <p>
          Integrate your existing Unreal Engine project with the Tolgee platform
          within minutes by using our plugin to automate the process.
        </p>
        <p>
          Start translating your project today with Tolgee and add new languages
          without changing your current localization pipeline.
        </p>
        <p>
          Invite collaborators to help you with translating and leverage our
          Translation assistance to speed up the process.
        </p>
      </LandingPageDescription>

      <LandingPageInstallation>
        <LandingPageInstallationStep title="1. Create project in Tolgee platform">
          <p>
            Go to the <a href="https://app.tolgee.io">Tolgee Cloud app</a> or
            access your{' '}
            <a href="/platform/self_hosting/running_with_docker">
              self-hosted instance
            </a>{' '}
            and create a project. Then obtain your API key.
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="2. Install Unreal plugin">
          <p>
            First, you need to install the plugin from the{' '}
            <a href="TODO">
              Unreal Marketplace
            </a>{' '}
            and <strong>enable it in your project</strong>.
          </p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="3. Setup Unreal plugin">
          <p>
            After installing and enabling the plugin, you need to set the{' '}
            <strong>API key</strong> you created previously and the{' '}
            <strong>API url</strong> in the Project Settings.
          </p>
          <p>
            If you have already set up your project, you can directly
            upload all your keys to the Tolgee platform.
            If you are unfamiliar with the localization setup, you can read our
            step-by-step guide.
          </p>
          <p>
            Then open the <strong>Tolgee Dashboard</strong>, and you are now ready 
            to hover over any text you wish to translate!
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="Explore the Docs and check out GitHub repository!">
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

import React from 'react';
import { LandingPage } from '../../component/landingPages/LandingPage';
import { LandingPageHeadline } from '../../component/landingPages/LandingPageHeadline';
import { LandingPageDescription } from '../../component/landingPages/LandingPageDescription';
import { LandingPageInstallationStep } from '../../component/landingPages/LandingPageInstallationStep';
import { LandingPageInstallation } from '../../component/landingPages/LandingPageInstallation';
import FigmaLogo from '../../../static/img/technologies/logo-figma.svg';
import { LandingPageActions } from '../../component/landingPages/LandingPageActions';
import { MoreIntegrations } from '../../component/landingPages/LandingPageMoreIntegrations';
import Head from '@docusaurus/Head';

const DocsLinks = ({ primary }: { primary?: boolean }) => (
  <LandingPageActions
    docs={{ link: '/platform/integrations/figma_plugin/usage' }}
    githubRepo={{
      explicitLink: true,
      link: 'https://github.com/tolgee/figma-plugin',
    }}
    primary={primary}
  />
);

export default function Figma() {
  return (
    <LandingPage title={'Tolgee Figma plugin'}>
      <Head>
        <meta
          name="description"
          content="Connect your Figma designs with Tolgee localization platform. This plugin will make the process of localizing your designs faster, easier, and more efficient."
        />
      </Head>
      <LandingPageHeadline
        loveImage={{
          img: <FigmaLogo width={65} />,
          name: 'Figma',
        }}
        title="Tolgee Figma plugin"
      >
        <DocsLinks />
      </LandingPageHeadline>
      <LandingPageDescription
        imageLinks={{
          light: '/img/figma-plugin-light.png',
          dark: '/img/figma-plugin-dark.png',
        }}
      >
        <p>
          Easily manage translations within your Figma design files by
          connecting Figma with Tolgee.
        </p>
        <p>
          Simplify your localization process with our plugin that allows you to
          seamlessly synchronize text with screenshots from Figma to Tolgee.
        </p>
        <p>
          Connect existing keys, pull translations, and create page copies with
          ease. Save time and improve efficiency with Tolgee Figma plugin!
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
        <LandingPageInstallationStep title="2. Install Figma plugin">
          <p>
            First, you need to install the plugin from the{' '}
            <a href="https://www.figma.com/community/plugin/1212381421658754793/Tolgee">
              Figma Community
            </a>{' '}
            by clicking on the <strong>Try it out</strong> button.
            Alternatively, you can find the plugin in Figma by opening the
            Resources &gt; Plugins, searching for &quot;<strong>Tolgee</strong>
            &quot;, and then click <strong>Run</strong>.
          </p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="3. Setup Figma plugin">
          <p>
            After installing and launching the plugin, you need to insert the{' '}
            <strong>API key</strong> you created previously.
          </p>
          <p>
            You can then select the language of the Figma file, the default
            namespace for new keys (if you use namespaces), and whether to hide
            the namespace selector.
          </p>
          <p>
            Then click <strong>Save</strong>, and you are now ready to use the
            plugin!
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

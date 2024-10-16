import React from 'react';
import Head from '@docusaurus/Head';

import baseSchema from '../info/organization';
import DecoratedLayout from '../theme/DecoratedLayout';
import { DocsTile } from '../component/docsIndex/DocsTile';

function Home() {
  return (
    <div className="home__container">
      <Head>
        <meta
          name="description"
          content="Open-source localization platform developers enjoy working with. Set up in seconds & speed up the translation process. Sign up for free. No credit card required."
        />
        <meta
          property="og:image"
          content="/assets/images/post-ai-6d514962f3af26e527cf4e4bfbef2ef6.png"
        />
        <meta
          property="twitter:image"
          content="/assets/images/post-ai-6d514962f3af26e527cf4e4bfbef2ef6.png"
        />
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <div className="text-home-text pt-[60px]">
          <div className="max-w-[1200px] mx-auto px-12 py-[120px]">
            <div className="grid gap-10">
              <h1 className="text-primary m-0">Welcome to Tolgee Docs</h1>
              <p className="m-0">
                Tolgee is a localization platform that streamlines translations
                for web, mobile, and desktop apps. With tools like the SDK, CLI,
                and REST API, it simplifies in-context translation and string
                management for efficient localization. Explore the docs to get
                started!
              </p>
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                }}
              >
                <DocsTile
                  title="Platform"
                  text={
                    <>
                      Tolgee is a developer-friendly localization platform for
                      web, mobile, and desktop apps. It simplifies translation
                      without code changes or manual file management.
                    </>
                  }
                  link="/platform"
                  linkText="Go to Platform docs"
                />
                <DocsTile
                  title="JavaScript SDK"
                  text={
                    <>
                      The Tolgee SDK handles i18n tasks like formatting and
                      language detection, connects to the Tolgee Platform, and
                      enables in-context translation, one-click screenshots, and
                      direct translation editing.
                    </>
                  }
                  link="/js-sdk"
                  linkText="Go to SDK docs"
                />
                <DocsTile
                  title="Tolgee CLI"
                  text={
                    <>
                      The Tolgee CLI simplifies syncing projects with Tolgee,
                      offering easy setup, string extraction, and push/pull
                      translations for seamless localization management.
                    </>
                  }
                  link="/tolgee-cli"
                  linkText="Go to CLI docs"
                />
                <DocsTile
                  title="REST API"
                  text={
                    <>
                      The Tolgee REST API allows you to manage translations
                      programmatically, enabling automated project setup, string
                      management, and integration with your localization
                      workflow.
                    </>
                  }
                  link="/api"
                  linkText="Go to API docs"
                />
              </div>
            </div>
          </div>
        </div>
      </DecoratedLayout>
    </div>
  );
}

export default Home;

import React from "react";
import { LandingPage } from "../component/landingPages/LandingPage";
import { LandingPageHeadline } from "../component/landingPages/LandingPageHeadline";
import { LandingPageDescription } from "../component/landingPages/LandingPageDescription";
import { LandingPagePreviewFeatures } from "../component/landingPages/LandingPagePreviewFeatures";
import { LandingPagePreviewFeature } from "../component/landingPages/LandingPagePreviewFeature";
import { LandingPageFeatures } from "../component/landingPages/LandingPageFeatures";
import { LandingPageFeature } from "../component/landingPages/LandingPageFeature";
import { LandingPageInstallationStep } from "../component/landingPages/LandingPageInstallationStep";
import { LandingPageInstallation } from "../component/landingPages/LandingPageInstallation";
import { LandingPageInstallationCode } from "../component/landingPages/LandingPageInstallationCode";
import { CoolButton } from "../component/buttons/CoolButton";
import { CoolButtonText } from "../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import { CoolButtonImage } from "../component/buttons/CoolButtonImage";

export default () => {
  return (
    <LandingPage title={"Tolgee for Svelte"}>
      <LandingPageHeadline
        loveImage={{
          imgSrc: "/img/technologies/logo-svelte.svg",
          name: "Svelte",
        }}
        badges={[
          {
            name: "Discord",
            aHref: "https://discord.com/channels/887646957043064872",
            imgSrc:
              "https://img.shields.io/discord/887646957043064872?logo=discord&label=Discord",
          },
          {
            name: "Github Tolgee jS",
            aHref: "https://github.com/tolgee/tolgee-js",
            imgSrc:
              "https://img.shields.io/github/stars/tolgee/tolgee-js?label=Tolgee%20JS&logo=github&style=social",
          },
          {
            name: "Github Tolgee Server",
            aHref: "https://github.com/tolgee/server",
            imgSrc:
              "https://img.shields.io/github/stars/tolgee/server?label=Tolgee%20Server&logo=github&style=social",
          },
        ]}
      />
      <LandingPageDescription installationCommand="npm i @tolgee/svelte @tolgee/ui">
        <p>
          Tolgee for Svelte provides simple API to create multi-lingual Svelte
          application. With Tolgee i18n library for Svelte you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see Svelte with Tolgee in action, check{" "}
          <a href="https://github.com/tolgee/svelte-example">
            this example app
          </a>
          .
        </p>
      </LandingPageDescription>
      <LandingPagePreviewFeatures>
        <LandingPagePreviewFeature videoSrc="/svelte_landing/in_context.mov">
          <h2>In-context localization 🐁</h2>
          <p>
            Tolgee for Svelte is not just an i18n library. It provides much
            more. With in-context localization feature, you can just Alt + Click
            translations in your app and translate them directly. No more
            extracting, no more editing of .jsons or .xliff.
          </p>
        </LandingPagePreviewFeature>
        <LandingPagePreviewFeature
          videoSrc="/svelte_landing/platform.mov"
          bigger={true}
        >
          <h2>Localization platform ☁️</h2>
          <p>
            Tolgee localization platform provides simple user interface where,
            you can edit all your localization string. So you don't have to
            worry about choosing other tool for editing your translations.
            Tolgee and it's SDKs is all you need to localize your app.
          </p>
        </LandingPagePreviewFeature>
      </LandingPagePreviewFeatures>
      <LandingPageFeatures>
        <LandingPageFeature>
          <h2>Simple integration 🎉</h2>
          <p>
            To integrate Tolgee to Svelte project, you can just simply follow
            these docs, or use integration guides in Tolgee platform. You can do
            that in less than one minute.
          </p>
        </LandingPageFeature>
        <LandingPageFeature>
          <h2>Automated screenshot generation 📸</h2>
          <p>
            With in-context localization UI, you can take screenshots of your
            application and uploaded them to Tolgee platform just by single
            click.
          </p>
        </LandingPageFeature>

        <LandingPageFeature>
          <h2>Open-source 📖</h2>
          <p>
            Tolgee platform and integration libraries are open-source. So you
            can self-host it and be fine!
          </p>
        </LandingPageFeature>
      </LandingPageFeatures>
      <LandingPageInstallation>
        <LandingPageInstallationStep title="1. Create project in Tolgee platform">
          <p>
            Go to <a href="https://app.tolgee.io">Tolgee Cloud app</a> or access
            your{" "}
            <a href="/docs/server_and_web_app/self_hosting/running_with_docker">
              self-hosted instance
            </a>{" "}
            and create a project. Then obtain your API key.
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/svelte @tolgee/ui
          </LandingPageInstallationCode>
          <p>Then wrap your code with TolgeeProvider</p>
          <LandingPageInstallationCode language="svelte" fullWidth={true}>
            {svelteProviderCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="3. Use T component to translate your texts">
          <LandingPageInstallationCode language="svelte">
            {usingTCode}
          </LandingPageInstallationCode>{" "}
          <p>Now you are able to Alt + Click & translate your texts!</p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="Explore the Docs and check out example app!">
          <p>Continue exploring...</p>

          <div style={{ display: "flex", gap: "20px" }}>
            <CoolButton
              component={Link}
              to="/docs/web/using_with_svelte/installation"
            >
              <CoolButtonText>Tolgee for Svelte Docs</CoolButtonText>
              <CoolButtonImage>📖</CoolButtonImage>
            </CoolButton>
            <CoolButton
              component={Link}
              to="https://github.com/tolgee/svelte-example"
            >
              <CoolButtonText>Tolgee + Svelte Example App</CoolButtonText>
              <CoolButtonImage>
                <img src="/img/github.svg" alt="GitHub" />
              </CoolButtonImage>
            </CoolButton>
          </div>
        </LandingPageInstallationStep>
      </LandingPageInstallation>
    </LandingPage>
  );
};

const svelteProviderCode = `<script lang="ts">
  import { TolgeeProvider } from "@tolgee/svelte";
  import UI from "@tolgee/ui";
  import type { TolgeeConfig } from "@tolgee/core";

  const tolgeeConfig = {
  preloadFallback: true,
  ui: UI,
  apiKey: '<your API key>',
} as TolgeeConfig;
</script>

<TolgeeProvider config={tolgeeConfig}>
  <div slot="loading-fallback">Loading...</div>
  <slot />
</TolgeeProvider>`;

const usingTCode = `<script>
  import { T } from "../clients/js/packages/svelte/package/index";
</script>
<h1>
  <T keyName="translate_me">Translate me!</T>
</h1>`;

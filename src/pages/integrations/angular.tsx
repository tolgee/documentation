import React from "react";
import { LandingPage } from "../../component/landingPages/LandingPage";
import { LandingPageHeadline } from "../../component/landingPages/LandingPageHeadline";
import { LandingPageDescription } from "../../component/landingPages/LandingPageDescription";
import { LandingPagePreviewFeatures } from "../../component/landingPages/LandingPagePreviewFeatures";
import { LandingPagePreviewFeature } from "../../component/landingPages/LandingPagePreviewFeature";
import { LandingPageFeatures } from "../../component/landingPages/LandingPageFeatures";
import { LandingPageFeature } from "../../component/landingPages/LandingPageFeature";
import { LandingPageInstallationStep } from "../../component/landingPages/LandingPageInstallationStep";
import { LandingPageInstallation } from "../../component/landingPages/LandingPageInstallation";
import { LandingPageInstallationCode } from "../../component/landingPages/LandingPageInstallationCode";
import { CoolButton } from "../../component/buttons/CoolButton";
import { CoolButtonText } from "../../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import { CoolButtonImage } from "../../component/buttons/CoolButtonImage";
import AngularLogo from "../../../static/img/technologies/logo-angular.svg";


export default () => {
  return (
    <LandingPage title={"Tolgee for Angular"}>
      <LandingPageHeadline
        loveImage={{
          img: <AngularLogo width={80} />,
          name: "Angular",
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
      >
        Tolgee for Angular
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/ngx @tolgee/ui">
        <p>
          Tolgee for Angular provides simple API to create multi-lingual Angular
          application. With Tolgee i18n library for Angular you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see Angular with Tolgee in action, check{" "}
          <a href="https://github.com/tolgee/ngx-example">
            this example app
          </a>
          .
        </p>
      </LandingPageDescription>
      <LandingPagePreviewFeatures>
        <LandingPagePreviewFeature videoSrc="/landing/in_context.mov">
          <h2>In-context localization 🐁</h2>
          <p>
            Tolgee for Angular is not just an i18n library. It provides much
            more. With in-context localization feature, you can just Alt + Click
            translations in your app and translate them directly. No more
            extracting, no more editing of .jsons or .xliff.
          </p>
        </LandingPagePreviewFeature>
        <LandingPagePreviewFeature
          videoSrc="/landing/platform.mov"
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
            To integrate Tolgee to Angular project, you can just simply follow
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
            <a href="/docs/platform/self_hosting/running_with_docker">
              self-hosted instance
            </a>{" "}
            and create a project. Then obtain your API key.
          </p>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/ngx @tolgee/ui
          </LandingPageInstallationCode>
          <p>Then import NgxTolgeeModule in your app</p>
          <LandingPageInstallationCode language="ts" fullWidth>
            {providerCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <LandingPageInstallationStep title='3. Use elements with "t" attribute to translate'>
          <LandingPageInstallationCode language="html" fullWidth>
            {usingTCode}
          </LandingPageInstallationCode>
          <p>Now you are able to Alt + Click & translate your texts!</p>
        </LandingPageInstallationStep>

        <LandingPageInstallationStep title="Explore the Docs and check out example app!">
          <p>Continue exploring...</p>

          <div style={{ display: "flex", gap: "20px", flexWrap: 'wrap' }}>
            <CoolButton
              component={Link}
              to="/docs/web/using_with_angular/installation"
            >
              <CoolButtonText>Tolgee for Angular Docs</CoolButtonText>
              <CoolButtonImage>📖</CoolButtonImage>
            </CoolButton>
            <CoolButton
              component={Link}
              to="https://github.com/tolgee/ngx-example"
            >
              <CoolButtonText>Tolgee + Angular Example App</CoolButtonText>
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

const providerCode = `import { NgxTolgeeModule } from "@tolgee/ngx";
import { UI } from "@tolgee/ui";
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    NgxTolgeeModule.forRoot({
      apiUrl: "https://app.tolgee.io",
      apiKey: "<your api key>",
      ui: UI
    }),
    ...,
  ],
  ...,
})
export class AppModule {
}`;

const usingTCode = `<h1 t key="translate_me" default="Translate me!"></h1>`;

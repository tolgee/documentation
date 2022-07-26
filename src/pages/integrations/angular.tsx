import React from "react";
import ThemedImage from "@theme/ThemedImage";
import {LandingPage} from "../../component/landingPages/LandingPage";
import {LandingPageHeadline} from "../../component/landingPages/LandingPageHeadline";
import {LandingPageInstallationStep} from "../../component/landingPages/LandingPageInstallationStep";
import {LandingPageInstallation} from "../../component/landingPages/LandingPageInstallation";
import {LandingPageInstallationCode} from "../../component/landingPages/LandingPageInstallationCode";
import {CoolButton} from "../../component/buttons/CoolButton";
import {CoolButtonText} from "../../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import {CoolButtonImage} from "../../component/buttons/CoolButtonImage";
import AngularLogo from "../../../static/img/technologies/logo-angular.svg";
import {baseBadges} from "../../component/landingPages/js/baseBadges";
import {TwoColumnSection} from "../../component/pageComponents/twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText} from "../../component/pageComponents/twoColumnSection/TextColumn";
import CodeBlock from "@theme/CodeBlock";
import {Features} from "../../component/home/Features";

export default () => {
  return (
    <LandingPage title={"Tolgee for Angular"}>
      <LandingPageHeadline
        loveImage={{
          img: <AngularLogo width={80}/>,
          name: "Angular",
        }}
        badges={baseBadges}
      >
        Tolgee for Angular
      </LandingPageHeadline>
      <TwoColumnSection className="md:h-[500px]">
        <TextColumn>
          <TextColumnText>
            Tolgee for Angular provides simple API to create multi-lingual Angular
            application. With Tolgee i18n library for Angular you can enjoy all
            Tolgee i18n features.
          </TextColumnText>
        </TextColumn>
        <TextColumn>
          <CodeBlock>npm i @tolgee/ngx @tolgee/ui</CodeBlock>
        </TextColumn>
      </TwoColumnSection>
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

          <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
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
                <ThemedImage
                  sources={{
                    light: "/img/github.svg",
                    dark: "/img/githubLight.svg",
                  }}
                  alt="GitHub"
                />
              </CoolButtonImage>
            </CoolButton>
          </div>
        </LandingPageInstallationStep>
      </LandingPageInstallation>
      <Features/>
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

import React from "react";
import ThemedImage from "@theme/ThemedImage";
import {LandingPage} from "../../component/landingPages/LandingPage";
import {LandingPageHeadline} from "../../component/landingPages/LandingPageHeadline";
import {LandingPageDescription} from "../../component/landingPages/LandingPageDescription";
import {LandingPageInstallationStep} from "../../component/landingPages/LandingPageInstallationStep";
import {LandingPageInstallation} from "../../component/landingPages/LandingPageInstallation";
import {LandingPageInstallationCode} from "../../component/landingPages/LandingPageInstallationCode";
import {CoolButton} from "../../component/buttons/CoolButton";
import {CoolButtonText} from "../../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import {CoolButtonImage} from "../../component/buttons/CoolButtonImage";
import ReactLogo from "../../../static/img/technologies/logo-react.svg";
import {baseBadges} from "../../component/landingPages/js/baseBadges";
import {Features} from "../../component/home/Features";

export default () => {
  return (
    <LandingPage title={"Tolgee for React"}>
      <LandingPageHeadline
        loveImage={{
          img: <ReactLogo width={80} />,
          name: "React",
        }}
        badges={baseBadges}
      >
        Tolgee for React
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react">
        <p>
          Tolgee for React provides simple API to create multi-lingual React
          application. With Tolgee i18n library for React you can enjoy all
          Tolgee i18n features.
        </p>
        <p>
          To see React with Tolgee in action, check{" "}
          <a href="https://github.com/tolgee/react-example">this example app</a>
          .
        </p>
      </LandingPageDescription>

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

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <CoolButton
              component={Link}
              to="/docs/web/using_with_react/installation"
            >
              <CoolButtonText>Tolgee for React Docs</CoolButtonText>
              <CoolButtonImage>📖</CoolButtonImage>
            </CoolButton>
            <CoolButton
              component={Link}
              to="https://github.com/tolgee/react-example"
            >
              <CoolButtonText>Tolgee + React Example App</CoolButtonText>
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

const reactProviderCode = `import { TolgeeProvider } from "@tolgee/react";
export const Wrapper = () => {
  return (
    <TolgeeProvider
      filesUrlPrefix="i18n/"
      apiUrl="https://app.tolgee.io"
      apiKey="<your api key>"
      loadingFallback="Loading..."
    >
      <App />
    </TolgeeProvider>
  );
}
`;

const usingTCode = `import { T } from "@tolgee/react";

export const Component = () => {
  return (
    <h1>
      <T keyName="translate_me">Translate me!</T>
    </h1>
  )
}`;

import React from "react";
import ThemedImage from "@theme/ThemedImage";
import { LandingPage } from "../../component/landingPages/LandingPage";
import { LandingPageHeadline } from "../../component/landingPages/LandingPageHeadline";
import { LandingPageDescription } from "../../component/landingPages/LandingPageDescription";
import { LandingPageInstallationStep } from "../../component/landingPages/LandingPageInstallationStep";
import { LandingPageInstallation } from "../../component/landingPages/LandingPageInstallation";
import { LandingPageInstallationCode } from "../../component/landingPages/LandingPageInstallationCode";
import { CoolButton } from "../../component/buttons/CoolButton";
import { CoolButtonText } from "../../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import { CoolButtonImage } from "../../component/buttons/CoolButtonImage";
import { baseBadges } from "../../component/landingPages/js/baseBadges";
import { ReactBaseFeatures } from "../../component/landingPages/js/ReactBaseFeatures";
import { ExampleAppLinkDescriptionParagraph } from "../../component/landingPages/common/ExampleAppLinkDescriptionParagraph";
import { InstallationStepCreateProjectInTolgeePlatform } from "../../component/landingPages/common/InstallationStepCreateProjectInTolgeePlatform";
import { ReactDocsCoolButton } from "../../component/landingPages/js/ReactDocsCoolButton";
import { ReactBaseParagraph } from "../../component/landingPages/ReactBaseParagraph";
import { ReactInstallationStepUseTComponent } from "../../component/landingPages/js/TeactInstallationStepUseTComponent";
import GatsbyLogo from "../../../static/img/technologies/logo-gatsby.svg";
import {Features} from "../../component/home/Features";

export default () => {
  return (
    <LandingPage title={"Tolgee for Gatsby"}>
      <LandingPageHeadline
        loveImage={{
          img: <GatsbyLogo width={70} />,
          name: "Gatsby",
        }}
        badges={baseBadges}
      >
        Tolgee for Gatsby
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react">
        <p>
          To use Tolgee with your Gatsby application, use React integration
          library together with Gatsby i18n support.
        </p>
        <ReactBaseParagraph />
        <ExampleAppLinkDescriptionParagraph
          repoName={"gatsby-example"}
          technologyName={"Gatsby"}
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

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <ReactDocsCoolButton />
            <CoolButton
              component={Link}
              to="/docs/web/using_with_react/ssr/using_with_gatsby"
            >
              <CoolButtonText>Tolgee for Gatsby Docs</CoolButtonText>
              <CoolButtonImage>📖</CoolButtonImage>
            </CoolButton>
            <CoolButton
              component={Link}
              to="https://github.com/tolgee/gatsby-example"
            >
              <CoolButtonText>Tolgee + Gatsby Example App</CoolButtonText>
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

import React, {FC} from "react";
import {LandingPageInstallationStep} from "../LandingPageInstallationStep";

export const InstallationStepCreateProjectInTolgeePlatform: FC = () => {
  return (
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
  )
}

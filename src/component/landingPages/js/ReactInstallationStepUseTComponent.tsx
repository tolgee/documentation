import { LandingPageInstallationStep } from '../LandingPageInstallationStep';
import { LandingPageInstallationCode } from '../LandingPageInstallationCode';
import React from 'react';

export const ReactInstallationStepUseTComponent = () => (
  <LandingPageInstallationStep title="3. Use T component to translate your texts">
    <LandingPageInstallationCode language="jsx" fullWidth>
      {usingTCode}
    </LandingPageInstallationCode>
    <p>Now you are able to Alt + Click & translate your texts!</p>
  </LandingPageInstallationStep>
);

const usingTCode = `import { T } from "@tolgee/react";

export const Component = () => {
  return (
    <h1>
      <T keyName="translate_me">Translate me!</T>
    </h1>
  )
}`;

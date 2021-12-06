import {LandingPagePreviewFeatures} from "../LandingPagePreviewFeatures";
import {LandingPagePreviewFeature} from "../LandingPagePreviewFeature";
import {LandingPageFeatures} from "../LandingPageFeatures";
import {LandingPageFeature} from "../LandingPageFeature";
import React, {FC} from "react";

export const ReactBaseFeatures: FC<{
  technologyName?: string
}> = (props) =>
{
  const technologyName = props.technologyName || 'React';

  return <>
    <LandingPagePreviewFeatures>
      <LandingPagePreviewFeature videoSrc="/landing/in_context.mov">
        <h2>In-context localization 🐁</h2>
        <p>
          Tolgee for React is not just an i18n library. It provides much
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
          To integrate {technologyName} to React project, you can just simply follow
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
  </>;
}

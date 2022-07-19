import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../../../info/organization";
import DecoratedLayout from "../../../../theme/DecoratedLayout";
import {PageHeader} from "../../PageHeader";
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {GradientText} from "../../../GradientText";
import {CoolButton} from "../../../buttons/CoolButton";
import {MoreFeatures} from "../MoreFeatures";
import {FeatureHeader} from "../FeatureHeader";

export const TrueIntegrationsFeature = () => {
  return (
    <>
      <FeatureHeader title="True integrations" id="true-integrations"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Tolgee is real</TextColumnTitle>
          <TextColumnText>
            Tolgee is not just other localization platform offering integrations which are just syncing you local data with the backend. Tolgee is really
            integrated into your App via SDKs.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

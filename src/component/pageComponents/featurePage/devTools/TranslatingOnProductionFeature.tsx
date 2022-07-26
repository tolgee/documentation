import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../../../info/organization";
import DecoratedLayout from "../../../../theme/DecoratedLayout";
import {EmphasisPageHeader} from "../../header/EmphasisPageHeader";
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {GradientText} from "../../../GradientText";
import {CoolButton} from "../../../buttons/CoolButton";
import {MoreFeatures} from "../MoreFeatures";
import {FeatureHeader} from "../FeatureHeader";

export const TranslatingOnProductionFeature = () => {
  return (
    <>
      <FeatureHeader title="Translating on production" id="translating-on-production"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Delegate it.</TextColumnTitle>
          <TextColumnText>
            In-context translating also works in production environment of your deployed App. Using Tolgee Tools Chrome plugin you can simply provide your API
            key and start translating. This enables anybody without developer knowledge to translate your App.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

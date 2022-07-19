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

export const TranslationHistoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation history" id="translation-history"/>
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>See the changes.</TextColumnTitle>
          <TextColumnText>
            See the changes of specific translation of specific key in specific language. Something is wrong? Blame the guilty!
          </TextColumnText>
        </TextColumn>
        <ImageColumn/>
      </TwoColumnSection>
    </>)
}

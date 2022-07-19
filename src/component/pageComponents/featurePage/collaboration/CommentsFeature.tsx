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

export const CommentsFeature = () => {
  return (
    <>
      <FeatureHeader title="Comment on translations" id="comments"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Say what you think.</TextColumnTitle>
          <TextColumnText>
            Something odd? Tell others what you would change. You can comment <GradientText>every translation</GradientText> in Tolgee platform.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

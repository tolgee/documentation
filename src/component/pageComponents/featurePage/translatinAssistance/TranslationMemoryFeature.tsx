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

export const TranslationMemoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation memory" id="translation-memory"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>We remember.</TextColumnTitle>
          <TextColumnText>
            Tolgee is automatically suggesting from translations you already used in the project.
            So you can translate similar phrases similar way.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Know more.</TextColumnTitle>
          <TextColumnText>
            Translation memory suggestions also show the similarity percentage and the key and the original text of the translated string.
          </TextColumnText>
        </TextColumn>
        <ImageColumn/>

      </TwoColumnSection>
    </>)
}

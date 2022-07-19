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

export const InContextFeature = () => {
  return (
    <>
      <FeatureHeader title="In context translating" id="in-context"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>No more time wasted.</TextColumnTitle>
          <TextColumnText>
            Add translations in the code, translate them directly in the App with Tolgee i18n tool.
            Clicking an element with while holding <GradientText>ALT / Option key</GradientText> opens a dialog, where you can simply modify your strings.
            No need to edit large .json/.po/.whatever file.
            In-context translating works great also in production environment.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>

      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>No more mistakes.</TextColumnTitle>
          <TextColumnText>
            Translating in the context is the best way how to avoid mistakes translators make because of missing context.
            Imagine you've got just words, strings, phrases without knowing how they related, what's their order or where are they placed in the
            App.
          </TextColumnText>
        </TextColumn>
        <ImageColumn/>
      </TwoColumnSection>
    </>)
}

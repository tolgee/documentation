import React from "react"
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {GradientText} from "../../../GradientText";
import {FeatureHeader} from "../FeatureHeader";

export const InContextFeature = () => {
  return (
    <>
      <FeatureHeader title="In context translating" id="in-context"/>
      <TwoColumnSection>
        <ImageColumn>
          <img alt="In context ALT key" src="/img/features/in-context1-ligth.svg"/>
        </ImageColumn>
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
        <ImageColumn>
          <img alt="In context dialog" src="/img/features/in-context2-light.svg"/>
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>No more mistakes.</TextColumnTitle>
          <TextColumnText>
            Translating in the context is the best way how to avoid mistakes translators make because of missing context.
            Imagine you've got just words, strings, phrases without knowing how they related, what's their order or where are they placed in the
            App.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

import React from "react"
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {FeatureHeader} from "../FeatureHeader";

export const TranslationMemoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation memory" id="translation-memory"/>
      <TwoColumnSection className="mb-36">
        <ImageColumn>
          <img alt="Translation memory" src="/img/features/translation-memory-light.svg"/>
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>We remember.</TextColumnTitle>
          <TextColumnText>
            Tolgee is automatically suggesting from translations you already used in the project.
            So you can translate similar phrases similar way.
          </TextColumnText>
          <TextColumnText>
            Translation memory suggestions also show the similarity percentage and the key and the original text of the translated string.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

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
import Link from "@docusaurus/Link";

export const MachineTranslationFeature = () => {
  return (
    <>
      <FeatureHeader title="Machine translation" id="machine-translation"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Machines work for you.</TextColumnTitle>
          <TextColumnText>
            Machine translation features makes whole localization process <GradientText>extremely faster</GradientText>.
            Translators can just use translation suggestions provided by third party machine translation services.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Select your service.</TextColumnTitle>
          <TextColumnText>
            We support <GradientText>DeepL</GradientText>, <GradientText>Google Translate</GradientText> or <GradientText>AWS Translate</GradientText>.
            Select which services you want to use in the settings section.
          </TextColumnText>
        </TextColumn>
        <ImageColumn/>
      </TwoColumnSection>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Pay as you go.</TextColumnTitle>
          <TextColumnText>
            There are some machine translation credits included in each <Link to="/pricing">subscription plan</Link>.
            If it's not enough, you can buy Extra Machine Translation credits in the Billing section. These credits not reset every month,
            so you can use them as long as you want.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}

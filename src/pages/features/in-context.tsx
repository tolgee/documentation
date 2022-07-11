import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {PageHeader} from "../../component/pageComponents/PageHeader";
import {TwoColumnSection} from "../../component/pageComponents/twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../component/pageComponents/twoColumnSection/TextColumn";
import {ImageColumn} from "../../component/pageComponents/twoColumnSection/ImageColumn";
import {GradientText} from "../../component/GradientText";
import {CoolButton} from "../../component/buttons/CoolButton";
import {MoreFeatures} from "../../component/pageComponents/featurePage/MoreFeatures";

export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={baseSchema.slogan}
      description={baseSchema.description}
    >
      <PageHeader title="Translate in the context." title2="Get the best results."/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>No more time wasted.</TextColumnTitle>
          <TextColumnText>
            Add translations in the code, translate them directly in the App with Tolgee i18n tool. No need to edit large .json/po/whatever file.
            Let your no-developer colleagues to translate your App. In-context translating works great also in production environment.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>

      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Just ALT + Click.</TextColumnTitle>
          <TextColumnText>
            Clicking an element with while holding ALT / Option key opens a dialog, where you can simply modify your strings. This approach may rocket reduce
            the time developers spend on App localization.
          </TextColumnText>
        </TextColumn>
        <ImageColumn/>

      </TwoColumnSection>

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
      <div className="m-12 flex justify-center">
        <a href="https://app.tolgee.io/sign_up" className="button--primary mb-12">Start localizing now</a>
      </div>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}

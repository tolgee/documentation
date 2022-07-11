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
      <div className="text-home-text">
        <PageHeader title="Now." title2="When you need it fast."/>
        <TwoColumnSection>
          <ImageColumn/>
          <TextColumn>
            <TextColumnTitle>Just translated.</TextColumnTitle>
            <TextColumnText>
              When enabled. Tolgee automatically translates new keys using translation memory
              or machine translation services. Your strings are translated immediately, right after creation.
            </TextColumnText>
          </TextColumn>
        </TwoColumnSection>
        <TwoColumnSection>
          <TextColumn>
            <TextColumnTitle>Choose your weapon.</TextColumnTitle>
            <TextColumnText>
              Select if you would like to use translation memory or/and which machine translation service you would like
              to use to automatically translate new keys.
            </TextColumnText>
          </TextColumn>
          <ImageColumn/>
        </TwoColumnSection>
      </div>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}

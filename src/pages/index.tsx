import React from 'react';
import Head from '@docusaurus/Head';

import baseSchema from '../info/organization';
import DecoratedLayout from '../theme/DecoratedLayout';
import { Features } from '../component/home/Features';
import { Technologies } from '../component/home/Technologies';
import { References } from '../component/home/References';
import { Pricing } from '../component/home/Pricing';
import { NotConvincedYet } from '../component/home/NotConvincedYet';
import { EmphasisPageHeader } from '../component/pageComponents/header/EmphasisPageHeader';
import { ImageColumn } from '../component/pageComponents/twoColumnSection/ImageColumn';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../component/pageComponents/twoColumnSection/TextColumn';
import { GradientText } from '../component/GradientText';
import { ParallaxImage } from '../component/home/ParallaxImage';

function Home() {
  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <div className="text-home-text">
          <EmphasisPageHeader
            title2="Fast integration."
            title="Smart platform."
            title3="Painless localization."
          />
          <section className="my-[100px] flex items-center md:max-w-[1500px] mx-auto">
            <div className="flex gap-12 sm:m-12 m-8 flex-col lg:flex-row">
              <ImageColumn>
                <ParallaxImage />
              </ImageColumn>
              <TextColumn className="min-w-[300px] lg:items-end md:items-center md:text-center lg:text-left lg:mt-[60px]">
                <TextColumnTitle>Revolution is here</TextColumnTitle>
                <TextColumnText>
                  Speed up your translation process by{' '}
                  <span>
                    <GradientText>90%</GradientText>
                  </span>{' '}
                  using Tolgee. It has{' '}
                  <GradientText>revolutionary</GradientText> integrations. Setup
                  Tolgee in seconds. Let <GradientText>anyone</GradientText>{' '}
                  translate your App with in-context localization feature.
                </TextColumnText>
              </TextColumn>
            </div>
          </section>
          <Features />
          <Technologies />
          <References />
          <Pricing />
          <NotConvincedYet />
        </div>
      </DecoratedLayout>
    </div>
  );
}

export default Home;

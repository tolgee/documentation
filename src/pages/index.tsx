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
import { Intro } from '../component/home/Intro';

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
          <Intro />
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

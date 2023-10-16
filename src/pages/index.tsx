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
        <meta
          name="description"
          content="Open-source localization platform developers enjoy working with. Set up in seconds & speed up the translation process. Sign up for free. No credit card required."
        />
        <meta
          property="og:image"
          content="/assets/images/post-ai-6d514962f3af26e527cf4e4bfbef2ef6.png"
        />
        <meta
          property="twitter:image"
          content="/assets/images/post-ai-6d514962f3af26e527cf4e4bfbef2ef6.png"
        />
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <div className="text-home-text">
          <EmphasisPageHeader
            title="Smart platform."
            title2="Fast integration."
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

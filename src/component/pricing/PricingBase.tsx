import React, { useEffect, useState } from 'react';

import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';
import { PricingFAQs } from './PricingFAQs';
import { GradientText } from '../GradientText';
import { PageHeaderSubtitle } from '../pageComponents/header/PageHeaderSubtitle';
import { FeaturesToggle } from './featuresTable/FeaturesToggle';
import {
  FEATURES_TABLE_HASH,
  FeaturesTable,
  FeaturesTableProps,
} from './featuresTable/FeaturesTable';
import { useLocation } from '@docusaurus/router';
import { ScrollAnchor } from '../ScrollAnchor';

type Props = {
  children: React.ReactNode;
  features: FeaturesTableProps;
};

export const PricingBase = ({ children, features }: Props) => {
  const router = useLocation();

  const [featuresHidden, setFeaturesHidden] = useState(true);

  useEffect(() => {
    setFeaturesHidden(router.hash !== `#${FEATURES_TABLE_HASH}`);
  }, []);

  useEffect(() => {
    if (!featuresHidden) {
      document
        .querySelector(`#${FEATURES_TABLE_HASH}`)
        .scrollIntoView({ behavior: 'smooth' });
    }
  }, [featuresHidden]);

  function toggleFeaturesHidden() {
    if (featuresHidden) {
      setFeaturesHidden(false);
      if (history.replaceState) {
        history.replaceState(null, null, `#${FEATURES_TABLE_HASH}`);
      } else {
        window.location.hash = FEATURES_TABLE_HASH;
      }
    } else {
      setFeaturesHidden(true);
      if (history.replaceState) {
        history.replaceState('', '', `${location.pathname}${location.search}`);
      } else {
        window.location.href = window.location.href.split('#')[0];
      }
    }
  }

  return (
    <div className="text-home-text">
      <DecoratedLayout title={`Pricing`}>
        <PageHeader className="mb-[40px]">
          <PageHeaderTitle h1 className="md:text-[50px] mb-8">
            Flexible <GradientText>Pay as you go</GradientText> Localization
          </PageHeaderTitle>
          <PageHeaderSubtitle className="font-normal text-center">
            Benefit from the power of an open-source solution.
          </PageHeaderSubtitle>
          <PageHeaderSubtitle className="font-normal text-center">
            Self-host or use our cloud version, and start localizing
            hassle-free.
          </PageHeaderSubtitle>
        </PageHeader>

        <div className="flex flex-col justify-center items-center">
          <div className="pricing__container xl:max-w-[1200px]">{children}</div>
        </div>
        <ScrollAnchor id={FEATURES_TABLE_HASH} />
        <div className="pricing__features-wrapper">
          {!featuresHidden && (
            <div className="pricing__features-wrapper--scroll">
              <div className="pricing__features-content">
                <h3 className="pricing__features-main-title">
                  {features.title}
                </h3>
                <FeaturesTable {...features} />
              </div>
            </div>
          )}
          <FeaturesToggle
            hidden={featuresHidden}
            onToggle={toggleFeaturesHidden}
            openTitle={features.title}
          />
        </div>

        <PricingFAQs />

        <Features />
      </DecoratedLayout>
    </div>
  );
};

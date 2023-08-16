import React, { useState } from 'react';

import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';
import { PricingFAQs } from './PricingFAQs';
import { GradientText } from '../GradientText';
import { PageHeaderSubtitle } from '../pageComponents/header/PageHeaderSubtitle';
import { FeaturesToggle } from './featuresTable/FeaturesToggle';
import {
  FeaturesTable,
  FeaturesTableProps,
} from './featuresTable/FeaturesTable';

type Props = {
  children: React.ReactNode;
  features: FeaturesTableProps;
};

export const PricingBase = ({ children, features }: Props) => {
  const [featuresHidden, setFeaturesHidden] = useState(true);

  function toggleFeaturesHidden() {
    setFeaturesHidden((val) => !val);
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
        <div className="pricing__features-wrapper">
          {!featuresHidden && (
            <div className="pricing__features-wrapper--scroll">
              <div className="pricing__features-content">
                <h3 className="pricing__features-main-title">
                  Detailed plan comparison
                </h3>
                <FeaturesTable {...features} />
              </div>
            </div>
          )}
          <FeaturesToggle
            hidden={featuresHidden}
            onToggle={toggleFeaturesHidden}
          />
        </div>

        <PricingFAQs />

        <Features />
      </DecoratedLayout>
    </div>
  );
};

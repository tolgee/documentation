import React from 'react';

import { RoboMouse } from '../images/RoboMouse';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';
import { PricingFAQs } from './PricingFAQs';
import { GradientText } from '../GradientText';
import { PageHeaderSubtitle } from '../pageComponents/header/PageHeaderSubtitle';

export const PricingBase: React.FC = ({ children }) => {
  return (
    <div className="text-home-text">
      <DecoratedLayout title={`Pricing`}>
        <PageHeader className="mb-[100px]">
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

        <div className="flex flex-col justify-center items-center pb-20">
          <div className="pricing__container xl:max-w-[1200px]">
            {children}

            <div className="pricing__bottom-center-robomouse">
              <RoboMouse />
            </div>
          </div>
        </div>

        <PricingFAQs />

        <Features />
      </DecoratedLayout>
    </div>
  );
};

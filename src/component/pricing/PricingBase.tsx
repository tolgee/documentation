import React from 'react';

import { RoboMouse } from '../images/RoboMouse';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';
import { PricingFAQs } from './PricingFAQs';

export const PricingBase: React.FC = ({ children }) => {
  return (
    <div className="text-home-text">
      <DecoratedLayout title={`Flexible Pay as You Go Localization`}>
        <PageHeader className="mb-[48px]">
          <PageHeaderTitle h1>
            Flexible <span className="text-gradient">Pay-as-You-Go</span>{' '}
            Localization
          </PageHeaderTitle>
          <p className="text-[20px] md:text-[24px] mb-0 mt-6">
            Benefit from the power of an open-source solution.
          </p>
          <p className="text-[20px] md:text-[24px] mb-0">
            Self-host or use our cloud version, and start localizing
            hassle-free.
          </p>
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

import React from 'react';

import { RoboMouse } from '../images/RoboMouse';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';
import { PricingDetails } from './PricingDetails';

export const PricingBase: React.FC = ({ children }) => {
  return (
    <div className="text-home-text">
      <DecoratedLayout title={`Pricing`}>
        <PageHeader className="mb-[100px]">
          <PageHeaderTitle h1>Pricing</PageHeaderTitle>
        </PageHeader>

        <div className="flex flex-col justify-center items-center pb-20">
          <div className="pricing__container xl:max-w-[1200px]">
            {children}

            <div className="pricing__bottom-center-robomouse">
              <RoboMouse />
            </div>
          </div>
        </div>

        <PricingDetails />

        <Features />
      </DecoratedLayout>
    </div>
  );
};

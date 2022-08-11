import React from 'react';
import { RoboMouse } from '../images/RoboMouse';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { Features } from '../home/Features';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';

export const PricingBase: React.FC = ({ children }) => {
  return (
    <div className="text-home-text">
      <DecoratedLayout title={`Pricing`}>
        <PageHeader className="mb-[100px]">
          <PageHeaderTitle active>Pricing (Preview)</PageHeaderTitle>
        </PageHeader>

        <div className="flex flex-col justify-center items-center">
          <div className="pricing__container xl:max-w-[1200px]">
            {children}

            <div className="pricing__bottom-center-robomouse">
              <RoboMouse />
            </div>

            <div className="ml-[20px] text-lg my-16">
              <p>
                Currently, no limits are applied to translations count. We plan
                to release pricing during July.
              </p>
            </div>
          </div>
        </div>

        <Features />
      </DecoratedLayout>
    </div>
  );
};

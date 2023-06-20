import React from 'react';

const PricingDetailsLink = ({ children }) => {
  return (
    <a
      href="#pricing-details"
      className="pricing__with-hint"
      onClick={(e) => {
        e.preventDefault();
        document
          .querySelector('#pricing-details')
          .scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
};

type Limits = {
  strings?: number;
  mtCredits?: number;
  seats?: number;
};

type Props = {
  name: string;
  description: React.ReactNode;
  limits?: Limits;
  price?: number;
  secondaryPrices?: string[];
  action: React.ReactNode;
};

export const PricingHorizontalPlan: React.FC<Props> = ({
  price,
  name,
  description,
  limits,
  action,
}) => {
  const { strings, mtCredits, seats } = limits || {};

  return (
    <div className="flex space-x-16">
      <div className="w-3/4 p-0">
        <h3 className="pricing__option--title">{name}</h3>
        <div className="pb-8">
          <p>{description}</p>
        </div>

        <div className="grid md:grid-cols-3">
          {limits && (
            <>
              {strings !== undefined && (
                <div className="pricing__option-highlights pricing__option-highlights--no-list-style">
                  <span className="pricing__option-value">
                    {strings !== Infinity
                      ? strings.toLocaleString()
                      : 'Unlimited'}
                  </span>{' '}
                  <PricingDetailsLink>strings</PricingDetailsLink> included
                </div>
              )}
              {mtCredits !== undefined && (
                <div className="pricing__option-highlights pricing__option-highlights--no-list-style">
                  <span className="pricing__option-value">
                    {mtCredits !== Infinity
                      ? mtCredits.toLocaleString()
                      : 'Unlimited'}
                  </span>{' '}
                  <PricingDetailsLink>MT credits</PricingDetailsLink> included
                </div>
              )}
              {seats !== undefined && (
                <div className="pricing__option-highlights pricing__option-highlights--no-list-style">
                  <span className="pricing__option-value">
                    {seats !== Infinity ? seats.toLocaleString() : 'Unlimited'}
                  </span>{' '}
                  <PricingDetailsLink>seats</PricingDetailsLink> included
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="w-1/4 flex flex-col justify-center">
        {price !== undefined && (
          <div className="pricing__option-price--horizontal">
            €{Number(price).toLocaleString()}
          </div>
        )}

        {action}
      </div>
    </div>
  );
};

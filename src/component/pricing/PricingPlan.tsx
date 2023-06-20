import Link from '@docusaurus/Link';
import React from 'react';
import { PricingFeatures, Feature } from './PricingFeatures';

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
  freeForOpensource?: boolean;
  billing?: { monthly: number; annually: number };
  billingType?: 'monthly' | 'annually';
  toggleBillingType?: () => void;
  price?: number;
  secondaryPrices?: string[];
  action: React.ReactNode;
  features?: Feature[];
  featuresHeight?: '250px' | '270px';
};

export const PricingPlan: React.FC<Props> = ({
  billingType,
  toggleBillingType,
  billing,
  price,
  name,
  description,
  freeForOpensource,
  limits,
  action,
  features,
  featuresHeight,
  secondaryPrices,
}) => {
  const BillingSwitch = () => {
    return (
      <button onClick={toggleBillingType} className="pricing__billing-switch">
        {billingType === 'monthly'
          ? 'Switch to annual billing'
          : 'Switch to monthly billing'}
      </button>
    );
  };

  const { strings, mtCredits, seats } = limits || {};

  return (
    <div>
      <h3 className="pricing__option--title">{name}</h3>
      {freeForOpensource && (
        <Link
          className="pricing__opensource-link"
          to="mailto:info@tolgee.io?subject=Tolgee for open-source"
        >
          <p className="pricing__free-for-open-source">
            Free for open-source projects
          </p>
        </Link>
      )}
      <p
        className={
          freeForOpensource
            ? ''
            : 'pricing__description-highlighted-noopensource'
        }
      >
        {description}
      </p>

      {Boolean(features?.length) && (
        <div
          className={`pricing__features-section${
            featuresHeight === '250px'
              ? ` h-[250px]`
              : featuresHeight === '270px'
              ? ` h-[270px]`
              : ''
          }`}
        >
          <p className="pricing__features-title">Features</p>
          <PricingFeatures features={features} />
        </div>
      )}

      {limits && (
        <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
          {strings !== undefined && (
            <li>
              <span className="pricing__option-value">
                {strings !== Infinity ? strings.toLocaleString() : 'Unlimited'}
              </span>{' '}
              <PricingDetailsLink>strings</PricingDetailsLink> included
            </li>
          )}
          {mtCredits !== undefined && (
            <li>
              <span className="pricing__option-value">
                {mtCredits !== Infinity
                  ? mtCredits.toLocaleString()
                  : 'Unlimited'}
              </span>{' '}
              <PricingDetailsLink>MT credits</PricingDetailsLink> included
            </li>
          )}
          {seats !== undefined && (
            <li>
              <span className="pricing__option-value">
                {seats !== Infinity ? seats.toLocaleString() : 'Unlimited'}
              </span>{' '}
              <PricingDetailsLink>seats</PricingDetailsLink> included
            </li>
          )}
        </ul>
      )}

      <div className="pricing__option-spacer" />

      {billing && (
        <>
          <div className="pricing__option-price">
            {billingType === 'monthly' ? (
              <div>
                €{Number(billing.monthly).toLocaleString()}
                <span>/mo</span>
              </div>
            ) : (
              <div>
                €{Number(billing.annually).toLocaleString()}
                <span>/mo</span>{' '}
              </div>
            )}
          </div>
          <BillingSwitch />
        </>
      )}

      {price !== undefined && (
        <div className="pricing__option-price">
          <div>€{Number(price).toLocaleString()}</div>
        </div>
      )}

      {secondaryPrices?.map((price, i) => (
        <div key={i} className="pricing__option-secondary-price">
          {price}
        </div>
      ))}

      {action}
    </div>
  );
};

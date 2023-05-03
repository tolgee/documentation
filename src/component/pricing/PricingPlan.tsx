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
          Free for open-source projects
        </Link>
      )}
      <p>{description}</p>
      {limits && (
        <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
          {strings !== undefined && (
            <li>
              <span className="pricing__option-value">
                {strings !== Infinity ? strings.toLocaleString() : 'unlimited'}
              </span>{' '}
              <PricingDetailsLink>strings</PricingDetailsLink>
            </li>
          )}
          {mtCredits !== undefined && (
            <li>
              <span className="pricing__option-value">
                {mtCredits !== Infinity
                  ? mtCredits.toLocaleString()
                  : 'unlimited'}
              </span>{' '}
              <PricingDetailsLink>MT credits</PricingDetailsLink>
            </li>
          )}
          {seats !== undefined && (
            <li>
              <span className="pricing__option-value">
                {seats !== Infinity ? seats.toLocaleString() : 'unlimited'}
              </span>{' '}
              <PricingDetailsLink>seats</PricingDetailsLink>
            </li>
          )}
        </ul>
      )}

      {Boolean(features?.length) && (
        <div className="pricing__features-section">
          <p className="pricing__features-title">Features</p>
          <PricingFeatures features={features} />
        </div>
      )}

      <div className="pricing__option-spacer" />

      {billing && (
        <>
          <BillingSwitch />

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
                <span className="pricing__option-billing">
                  (annual billing)
                </span>
              </div>
            )}
          </div>
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

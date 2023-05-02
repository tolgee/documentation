import Link from '@docusaurus/Link';
import React from 'react';
import { Tooltip } from '@mui/material';

const Translations = () => {
  return (
    <Tooltip
      title={
        <div>
          Total amount of translated texts you can store in projects in your
          organization.
        </div>
      }
      disableInteractive
    >
      <span className="pricing__with-hint">translations</span>
    </Tooltip>
  );
};

const Credits = () => {
  return (
    <Tooltip
      title="Credits for machine translation. One credit ⋍ 1 translated character."
      disableInteractive
    >
      <span className="pricing__with-hint">MT credits</span>
    </Tooltip>
  );
};

type Limits = {
  translations?: number;
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
  features?: string[];
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

  const { translations, mtCredits, seats } = limits || {};

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
          {translations !== undefined && (
            <li>
              <span className="pricing__option-value">
                {translations !== Infinity
                  ? translations.toLocaleString()
                  : 'unlimited'}
              </span>{' '}
              <Translations />
            </li>
          )}
          {mtCredits !== undefined && (
            <li>
              <span className="pricing__option-value">
                {mtCredits !== Infinity
                  ? mtCredits.toLocaleString()
                  : 'unlimited'}
              </span>{' '}
              <Credits />
            </li>
          )}
          {seats !== undefined && (
            <li>
              <span className="pricing__option-value">
                {seats !== Infinity ? seats.toLocaleString() : 'unlimited'}
              </span>{' '}
              users
            </li>
          )}
        </ul>
      )}

      {Boolean(features?.length) && (
        <div className="pricing__features-section">
          <p className="pricing__features-title">Features</p>
          <ul className="pricing__option-highlights">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="pricing__option-spacer" />

      {billing && (
        <>
          <BillingSwitch />

          <div className="pricing__option-price">
            {billingType === 'monthly' ? (
              <div>
                {Number(billing.monthly).toLocaleString()} €<span>/mo</span>
              </div>
            ) : (
              <div>
                {Number(billing.annually).toLocaleString()} €<span>/mo</span>{' '}
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
          <div>{Number(price).toLocaleString()} €</div>
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

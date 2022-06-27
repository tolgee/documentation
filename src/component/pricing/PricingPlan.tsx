import Link from "@docusaurus/Link";
import Tooltip from "react-simple-tooltip";
import React from "react";

type Props = {
  name: string;
  description: string;
  numTranslations: number | undefined;
  numCredits: number | undefined;
  freeForOpensource?: boolean;
  billing?: { monthly: number; annually: number };
  billingType?: "monthly" | "annually";
  toggleBillingType?: () => void;
  price?: number;
  action: React.ReactNode;
};

const Translations = () => {
  return (
    <Tooltip
      content={
        <div className="pricing__tooltip">
          Amount of translations you can store in <br/>
          projects in your organization.<br/>
          Current amount of translations is calculated <br/>
          as sum of keys multiplied by languages for every project.
        </div>
      }
    >
      <span className="pricing__with-hint">translations</span>
    </Tooltip>
  );
};

const Credits = () => {
  return (
    <Tooltip
      content={
        <div className="pricing__tooltip">Credits for machine translation</div>
      }
    >
      <span className="pricing__with-hint">MT credits</span>
    </Tooltip>
  );
};

export const PricingPlan: React.FC<Props> = ({
  billingType,
  toggleBillingType,
  billing,
  price,
  name,
  description,
  freeForOpensource,
  numCredits,
  numTranslations,
  action,
}) => {
  const BillingSwitch = () => {
    return (
      <button onClick={toggleBillingType} className="pricing__billing-switch">
        {billingType === "monthly"
          ? "Switch to annual billing"
          : "Switch to monthly billing"}
      </button>
    );
  };

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
      <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
        <li>
          <span className="pricing__option-value">
            {numTranslations !== undefined
              ? numTranslations.toLocaleString()
              : "unlimited"}
          </span>{" "}
          <Translations />
        </li>
        <li>
          <span className="pricing__option-value">
            {numCredits !== undefined
              ? numCredits.toLocaleString()
              : "unlimited"}
          </span>{" "}
          <Credits />
        </li>
        <li>
          <span className="pricing__option-value">unlimited</span> users
        </li>
        <li>
          <span className="pricing__option-value">unlimited</span> projects
        </li>
      </ul>

      {billing && (
        <>
          <BillingSwitch />

          <div className="pricing__option-price">
            {billingType === "monthly" ? (
              <div>
                {Number(billing.monthly).toLocaleString()} €<span>/mo</span>
              </div>
            ) : (
              <div>
                {Number(billing.annually).toLocaleString()} €<span>/mo</span>{" "}
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

      {action}
    </div>
  );
};

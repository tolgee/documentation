import React, { useState } from 'react';
import './pricing.css';
import { RoboMouse } from '../../component/images/RoboMouse';
import { PricingToggle } from '../../component/pricing/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import { PricingPlan } from '../../component/pricing/PricingPlan';
import Head from '@docusaurus/Head';
import { PricingHorizontalPlan } from '../../component/pricing/PricingHorizontalPlan';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase>
      <Head>
        <meta
          name="description"
          content="Pricing for the cloud version of Tolgee localization tool. Choose among Free, Business, or Enterprise subscription."
        />
      </Head>
      <div className="pricing__toggle">
        <PricingToggle value="cloud" />
      </div>
      <div className="pricing__option--horizontal">
        <PricingHorizontalPlan
          name="Free"
          price={0}
          description={
            <>
              Start localizing your project for free and connect with global
              audiences at no cost. When your project grows, you can upgrade to
              the Pay as you go plan and pay only for what you use. The Free
              plan comes with the same features as the Pay as you go plan.
              <br />
            </>
          }
          limits={{ strings: 1_000, mtCredits: 10_000, seats: Infinity }}
          action={
            <>
              <Link
                className="pricing__option-button pricing__option-button--contained"
                to="https://app.tolgee.io/sign_up"
              >
                Get started
              </Link>
              <div className="pricing__option--price-note">
                No credit card required
              </div>
            </>
          }
        />
      </div>
      <div className="pricing__top-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__bottom-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__options-wrapper">
        <div className="pricing__option">
          <PricingPlan
            name="Pay as you go"
            description={
              <>
                <br />
                You can start with the Free plan, then pay only for the
                translation strings and MT credits you actually use.
                <br />
              </>
            }
            limits={{ strings: 1_000, mtCredits: 10_000, seats: Infinity }}
            price={0}
            secondaryPrices={[
              `+ €${(10).toLocaleString()}/mo for extra 1000 strings`,
              `+ €${(0.2).toLocaleString()} for extra 1000 MT credits`,
            ]}
            features={[
              'in-context-translating',
              'translation-memory',
              'machine-translations',
              'auto-translation',
              'activity-log',
              'one-click-screenshots',
              'figma-plugin',
            ]}
            featuresHeight={'250px'}
            action={
              <>
                <Link
                  className="pricing__option-button pricing__option-button--grey"
                  to="https://app.tolgee.io/sign_up"
                >
                  Get started
                </Link>
              </>
            }
          />
        </div>

        <div className="pricing__option pricing__option--highlighted">
          <PricingPlan
            name="Business"
            freeForOpensource
            description="Designed for individuals and medium teams, leverage Tolgee's power for one or a few apps."
            limits={{
              strings: 20_000,
              mtCredits: 1_000_000,
              seats: Infinity,
            }}
            billing={{ monthly: 100, annually: 84 }}
            secondaryPrices={[
              `+ €${(7).toLocaleString()}/mo for extra 1000 strings`,
              `+ €${(0.15).toLocaleString()} for extra 1000 MT credits`,
            ]}
            billingType={billing}
            toggleBillingType={toggleBilling}
            features={[
              'all-from-free',
              'granular-permissions',
              'prioritized-feature-requests',
              'standard-support',
              'cdn',
              'webhooks',
            ]}
            featuresHeight={'250px'}
            action={
              <Link
                className="pricing__option-button pricing__option-button--contained"
                to="https://app.tolgee.io/billing"
              >
                Subscribe
              </Link>
            }
          />
        </div>

        <div className="pricing__option">
          <PricingPlan
            name="Enterprise"
            description={
              <>
                <br />
                Tailored for enterprise organizations and large teams, scale
                your translation needs with Tolgee.
                <br />
              </>
            }
            limits={{
              strings: Infinity,
              mtCredits: Infinity,
              seats: Infinity,
            }}
            features={[
              'all-from-business',
              'account-manager',
              'premium-support',
              'dedicated-slack-channel',
              'team-training',
            ]}
            featuresHeight={'250px'}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="mailto:info@tolgee.io"
              >
                Contact us
              </Link>
            }
          />
        </div>
      </div>
    </PricingBase>
  );
}

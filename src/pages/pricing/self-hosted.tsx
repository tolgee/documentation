import React from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function SelfHosted() {
  return (
    <PricingBase>
      <div className="pricing__toggle">
        <PricingToggle value="self-hosted" />
        <Head>
          <meta
            name="description"
            content="Pricing options for self-hosted Tolgee version. Support option for businesses that need high reliability and require professional support."
          />
        </Head>
      </div>
      <div className="pricing__options-wrapper-self-hosted">
        <div className="pricing__option pricing__option--no-support">
          <div>
            <h3 className="pricing__option--title">No support</h3>
            <p>
              Since Tolgee is open-source, self hosting will be{' '}
              <b>free forever</b>. However, you have to serve yourself.
            </p>
            <ul className="pricing__option-highlights" />
            <div className="pricing__option-price">0 €</div>
            <Link
              className="pricing__option-button"
              to="/platform/self_hosting/running_with_docker"
            >
              Docs
            </Link>
          </div>
        </div>

        <div className="pricing__option pricing__option--support pricing__option--highlighted">
          <div>
            <h3 className="pricing__option--title">With support</h3>
            <p>
              For businesses that need high reliability and require professional
              support.
            </p>
            <ul className="pricing__option-highlights">
              <li>
                Professional{' '}
                <span className="pricing__option-value">setup</span>
              </li>
              <li>
                <span className="pricing__option-value">Support</span> from our
                team
              </li>
              <li>
                Prioritized{' '}
                <span className="pricing__option-value">feature requests</span>
              </li>
            </ul>
            <Link
              className="pricing__option-button pricing__option-button--grey"
              to="mailto:info@tolgee.io"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </PricingBase>
  );
}

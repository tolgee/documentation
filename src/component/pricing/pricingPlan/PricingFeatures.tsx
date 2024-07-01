import React, { ReactNode } from 'react';
import { InDevelopment } from '../progressSymbols/InDevelopment';
import { Ready } from '../progressSymbols/Ready';
import { PricingDetailsLink } from './PricingDetailsLink';

const FEATURES_MAP = {
  'in-context-translating': <Ready>In-context translating</Ready>,
  'translation-memory': <Ready>Translation memory</Ready>,
  'machine-translations': <Ready>Machine translations</Ready>,
  'auto-translation': <Ready>Auto translation</Ready>,
  'activity-log': <Ready>Activity log</Ready>,
  'one-click-screenshots': <Ready>One-click screenshots</Ready>,
  'figma-plugin': <Ready>Figma plugin</Ready>,
  'single-content-delivery': (
    <Ready>
      <PricingDetailsLink item="what-is-content-delivery">
        Single Content Delivery
      </PricingDetailsLink>
    </Ready>
  ),
  'granular-permissions': (
    <Ready link="/platform/projects_and_organizations/members#granular-permissions">
      Granular permissions
    </Ready>
  ),
  'prioritized-feature-requests': <Ready>Prioritized feature requests</Ready>,
  'standard-support': <Ready>Standard support</Ready>,
  'multiple-content-deliveries': (
    <Ready>
      <PricingDetailsLink item="what-is-content-delivery">
        More Content Delivery configs
      </PricingDetailsLink>
    </Ready>
  ),
  webhooks: <Ready>Webhooks</Ready>,
  'custom-content-storage': (
    <Ready>
      <PricingDetailsLink item="what-is-custom-content-storage">
        Custom Content Storage
      </PricingDetailsLink>
    </Ready>
  ),
  'project-level-custom-content-storage': (
    <Ready>
      <PricingDetailsLink item="what-is-custom-content-storage">
        Custom content storage
      </PricingDetailsLink>
    </Ready>
  ),

  'premium-support': <Ready>Premium support</Ready>,
  'dedicated-slack-channel': <Ready>Dedicated Slack channel</Ready>,
  'assisted-updates': <Ready>Assisted updates</Ready>,
  'deployment-assistance': <Ready>Deployment assistance</Ready>,
  'backup-configuration': <Ready>Backup configuration</Ready>,
  'team-training': <Ready>Team training</Ready>,
  'account-manager': <Ready>Account manager</Ready>,
  'ai-prompt-customization': (
    <Ready>
      <PricingDetailsLink item="what-is-ai-customization">
        AI Customization
      </PricingDetailsLink>
    </Ready>
  ),
  'single-sign-on': <InDevelopment>Single Sign On</InDevelopment>,
  'slack-integration': <Ready>Slack integration</Ready>,
};

export type Feature = keyof typeof FEATURES_MAP;

type Props = {
  features: Feature[];
  featuresShortcut?: ReactNode;
  onMore?: () => void;
};

export const PricingFeatures = ({
  features,
  featuresShortcut,
  onMore,
}: Props) => {
  return (
    <ul className="pricing__features-list">
      {featuresShortcut && (
        <li className="pricing__features-list--shortcut">
          <Ready>{featuresShortcut}</Ready>
        </li>
      )}
      {features.map((feature) => (
        <li key={feature}>{FEATURES_MAP[feature]}</li>
      ))}
      {onMore && (
        <li>
          and{' '}
          <span
            className="pricing__with-hint cursor-pointer"
            role="button"
            onClick={() => onMore()}
          >
            much more
          </span>
        </li>
      )}
    </ul>
  );
};

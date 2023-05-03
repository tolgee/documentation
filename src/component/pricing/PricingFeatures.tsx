import React from 'react';
import { PricingCheckMark } from './PricingCheckMark';
import { PricingInDevelopment } from './PricingInDevelopment';
import { Tooltip } from '@mui/material';

function Ready({ children }) {
  return (
    <>
      <span className="pricing__features-option--checkmark">
        <PricingCheckMark />
      </span>
      {children}
    </>
  );
}

function InDevelopment({ children }) {
  return (
    <>
      <Tooltip title="Feature is in development" disableInteractive>
        <span className="pricing__with-hint">
          <span className="pricing__features-option--checkmark">
            <PricingInDevelopment />
          </span>
          <span>{children}</span>
        </span>
      </Tooltip>
    </>
  );
}

const FEATURES_MAP = {
  'in-context-translating': <Ready>In-context translating</Ready>,
  'translation-memory': <Ready>Translation memory</Ready>,
  'machine-translations': <Ready>Machine translations</Ready>,
  'auto-translation': <Ready>Auto translation</Ready>,
  'activity-log': <Ready>Activity log</Ready>,
  'one-click-screenshots': <Ready>One-click screenshots</Ready>,
  'figma-plugin': <Ready>Figma plugin</Ready>,

  'granular-permissions': <Ready>Granular permissions</Ready>,
  'prioritized-feature-requests': <Ready>Prioritized feature requests</Ready>,
  'standard-support': <Ready>Standard support</Ready>,
  cdn: <InDevelopment>CDN</InDevelopment>,
  webhooks: <InDevelopment>Webhooks</InDevelopment>,

  'premium-support': <Ready>Premium support</Ready>,
  'dedicated-slack-channel': <Ready>Dedicated Slack channel</Ready>,
  'assisted-updates': <Ready>Assisted updates</Ready>,
  'deployment-assistance': <Ready>Deployment assistance</Ready>,
  'backup-configuration': <Ready>Backup configuration</Ready>,
  'team-training': <Ready>Team training</Ready>,
  'account-manager': <Ready>Account manager</Ready>,

  'all-from-business': <Ready>{'All from "Business"'}</Ready>,
  'all-from-free': <Ready>{'All from "Free"'}</Ready>,
};

export type Feature = keyof typeof FEATURES_MAP;

type Props = {
  features: Feature[];
};

export const PricingFeatures = ({ features }: Props) => {
  return (
    <ul className="pricing__features-list">
      {features.map((feature) => (
        <li key={feature}>{FEATURES_MAP[feature]}</li>
      ))}
    </ul>
  );
};

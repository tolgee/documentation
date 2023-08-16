import { FeaturesTableItem } from './FeaturesTable';

export const featuresSelfHosted = {
  plans: ['Free', 'Business', 'Enterprise'],
  items: [
    { type: 'title', label: 'Main features' },
    {
      type: 'item',
      label: 'In-context translating',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Translation memory',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Machine translations',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Auto translation',
      items: ['y', 'y', 'y'],
    },
    { type: 'item', label: 'Activity log', items: ['y', 'y', 'y'] },
    {
      type: 'item',
      label: 'One-click screenshots',
      items: ['y', 'y', 'y'],
    },
    { type: 'item', label: 'Figma plugin', items: ['y', 'y', 'y'] },
    {
      type: 'item',
      label: 'Granular permissions',
      items: ['n', 'y', 'y'],
    },
    { type: 'item', label: 'CDN', items: ['n', 'd', 'd'] },
    { type: 'item', label: 'Webhooks', items: ['n', 'd', 'd'] },

    { type: 'title', label: 'Assistance' },
    {
      type: 'item',
      label: 'Prioritized feature requests',
      items: ['n', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Standard support',
      items: ['n', 'y', 'y'],
    },
    { type: 'item', label: 'Premium support', items: ['n', 'n', 'y'] },
    { type: 'item', label: 'Account manager', items: ['n', 'n', 'y'] },
    {
      type: 'item',
      label: 'Dedicated Slack channel',
      items: ['n', 'n', 'y'],
    },

    {
      type: 'item',
      label: 'Assisted updates',
      items: ['n', 'n', 'y'],
    },
    {
      type: 'item',
      label: 'Backup configuration',
      items: ['n', 'n', 'y'],
    },
    { type: 'item', label: 'Team training', items: ['n', 'n', 'y'] },
  ] as FeaturesTableItem[],
};

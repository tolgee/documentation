import { possibleExtensions } from '../../../../apiSpecGeneration/scripts/getSpecData';
import React, { FC } from 'react';
import clsx from 'clsx';
import { Tooltip } from '@mui/material';

type Badge = (typeof possibleExtensions)[number];

interface BadgesProps {
  badges: Badge[];
}

const tooltips = {
  ee:
    'This endpoint is only available on Self-hosted instances with EE plan ' +
    'or on Tolgee Cloud.',
  cloud: 'This endpoint is only available on Tolgee Cloud',
  'self-hosted':
    'This endpoint is only available on Tolgee self-hosted instances.',
};

export const Badges: FC<BadgesProps> = (props) => {
  return (
    <>
      {props.badges.map((badge) => (
        <Badge key={badge} badge={badge} />
      ))}
    </>
  );
};

const Badge: FC<{ badge: (typeof possibleExtensions)[number] }> = (props) => {
  return (
    <Tooltip title={tooltips[props.badge]}>
      <span
        className={clsx('api-docs-badge', 'api-docs-badge--' + props.badge)}
      >
        {props.badge}
      </span>
    </Tooltip>
  );
};

import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import { integrations } from '../integrations';

type Props = {
  integration: typeof integrations[number];
  className?: string;
};

export const IntegrationTile: React.FC<Props> = ({
  integration,
  className,
}) => {
  // We need to decorate the main link only when there no other link is hovered
  const [hoveredOtherLink, setHoveredOtherLink] = useState(false);
  const mainLink =
    integration.links['Landing Page'] ||
    integration.links['Docs'] ||
    Object.values(integration.links)[0];
  return (
    <a
      href={mainLink}
      key={integration.label}
      className={clsx(
        'group grid grid-rows-[auto_1fr_auto] bg-surface min-h-[200px] rounded-2xl p-4 hover:no-underline text-home-text',
        className
      )}
    >
      <div className="text-2xl">
        {integration.label}
        {integration.experimental && (
          <div className="text-sm">(experimental)</div>
        )}
      </div>
      <div className="flex justify-end pr-4 flex-grow">
        {integration.logo && (
          <div className="h-[60px] w-[60px] dark:text-white">
            {typeof integration.logo === 'object' ? (
              integration.logo
            ) : (
              <img src={integration.logo} alt={integration.label} />
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        {Object.entries(integration.links).map(([label, link]) => (
          <div key={link} className="grid justify-start">
            <Link
              to={link}
              onMouseOver={() => {
                if (link !== mainLink) {
                  setHoveredOtherLink(true);
                }
              }}
              onMouseOut={() => {
                if (link !== mainLink) {
                  setHoveredOtherLink(false);
                }
              }}
              className={clsx(
                `relative hover:no-underline
                        before:content-[''] before:absolute before:w-0 before:h-full
                        before:border-0 before:border-b-2 before:border-b-primary before:border-solid
                        before:top-[1px] [&.main]:group-hover:before:w-full hover:before:w-full before:transition-all before:duration-200
                        leading-none pt-[8px]
                        `,
                link == mainLink && !hoveredOtherLink && 'main'
              )}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </a>
  );
};

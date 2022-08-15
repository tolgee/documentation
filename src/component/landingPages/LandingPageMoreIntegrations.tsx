import Link from '@docusaurus/Link';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { integrations } from '../../integrations';
import { IntegrationTile } from '../IntegrationTile';

export const MoreIntegrations: FC = () => {
  const route = useRouteMatch();
  return (
    <section className="flex flex-col items-center bg-surface pb-8">
      <h2 className="mt-10 mb-8 text-center">More integrations</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mx-5 gap-5 max-w-full w-[1100px] p-4 sm:p-6">
        {integrations
          .filter((i) => {
            return Object.values(i.links)[0] !== route.path;
          })
          .slice(0, 6)
          .map((integration, idx) => (
            <IntegrationTile
              key={idx}
              integration={integration}
              className="dark:bg-black/20 bg-white/30"
            />
          ))}
      </div>
      <Link
        to="/integrations/all"
        className="md:mb-10 underline font-[400] text-[18px]"
      >
        Show all
      </Link>
    </section>
  );
};

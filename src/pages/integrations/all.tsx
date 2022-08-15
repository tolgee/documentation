import React, { FC, useState } from 'react';
import Head from '@docusaurus/Head';
import baseSchema from '../../info/organization';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { GradientText } from '../../component/GradientText';
import { PageHeader } from '../../component/pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { integrations } from '../../integrations';
import { TolgeeIsRealTexts } from '../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature';
import { SingleColumnSection } from '../../component/pageComponents/twoColumnSection/SingleColumnSection';

export default function Integrations() {
  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <PageHeader className="mb-[180px]">
          <PageHeaderSubtitle>
            <GradientText>Integrations</GradientText>
          </PageHeaderSubtitle>
          <PageHeaderTitle>Setup in seconds.</PageHeaderTitle>
        </PageHeader>
        <div className="md:max-w-[1000px] mx-auto sm:max-w-[650px] max-w-[400px]">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 mx-5 gap-5">
            {integrations.map((integration) => (
              <IntegrationTile
                key={integration.label}
                integration={integration}
              ></IntegrationTile>
            ))}
          </div>
        </div>
        <div className="mt-36 mb-36">
          <SingleColumnSection>
            <TolgeeIsRealTexts />
          </SingleColumnSection>
        </div>
      </DecoratedLayout>
    </div>
  );
}

const IntegrationTile: FC<{ integration: typeof integrations[number] }> = ({
  integration,
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
      className="group
                            grid grid-rows-[auto_1fr_auto] bg-surface min-h-[200px] rounded-2xl p-4 hover:no-underline text-home-text
                          "
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

import React from 'react';
import Head from '@docusaurus/Head';
import baseSchema from '../../info/organization';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../../component/pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import { integrations } from '../../integrations';
import { TolgeeIsRealTexts } from '../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature';
import { SingleColumnSection } from '../../component/pageComponents/twoColumnSection/SingleColumnSection';
import { IntegrationTile } from '../../component/IntegrationTile';

export default function Integrations() {
  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
        <meta name="description" content="Learn how to install Tolgee integration libraries. With Tolgee i18n libraries you can enjoy all Tolgee i18n features." />
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <PageHeader className="mb-[180px]">
          <PageHeaderSubtitle h1>Integrations</PageHeaderSubtitle>
          <PageHeaderTitle active>Setup in seconds.</PageHeaderTitle>
        </PageHeader>
        <div className="md:max-w-[1000px] mx-auto sm:max-w-[650px] max-w-[400px]">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 mx-5 gap-5">
            {integrations.map((integration) => (
              <IntegrationTile
                key={integration.label}
                integration={integration}
              />
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

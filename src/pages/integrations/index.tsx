import React, {FC, useState} from "react";
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {GradientText} from "../../component/GradientText";
import {PageHeader} from "../../component/pageComponents/header/PageHeader";
import {PageHeaderTitle} from "../../component/pageComponents/header/PageHeaderTitle";
import {PageHeaderSubtitle} from "../../component/pageComponents/header/PageHeaderSubtitle";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import NextLogo from "../../../static/img/technologies/logo-next.svg";
import {SpeedDialIcon} from "@mui/material";

const integrations = [{
  label: 'React',
  logo: '/img/technologies/logo-react.svg',
  links: {
    'Landing Page': '/integrations/react',
    'Docs': '/docs/web/using_with_react/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/react',
    'Example App': 'https://github.com/tolgee/react-example',
  }
}, {
  label: "Angular",
  logo: '/img/technologies/logo-angular.svg',
  links: {
    'Landing Page': '/integrations/angular',
    'Docs': '/docs/web/using_with_angular/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/ngx',
    'Example App': 'https://github.com/tolgee/ngx-example',
  }
}, {
  label: 'Vue',
  logo: '/img/technologies/logo-vue.svg',
  links: {
    'Landing Page': '/integrations/vue',
    'Docs': '/docs/web/using_with_vue/installation',
    'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/vue',
    'Example App': 'https://github.com/tolgee/vue-example',
  }
},
  {
    label: 'Svelte',
    logo: '/img/technologies/logo-svelte.svg',
    links: {
      'Landing Page': '/integrations/svelte',
      'Docs': '/docs/web/using_with_svelte/installation',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/svelte',
      'Example App': 'https://github.com/tolgee/svelte-example',
    }
  },
  {
    label: 'Next.js',
    logo: <NextLogo/>,
    links: {
      'Landing Page': '/integrations/next',
      'Docs': '/docs/web/using_with_react/ssr/using_with_next',
      'Example App': 'https://github.com/tolgee/next-example',
    }
  },
  {
    label: 'Gatsby',
    logo: '/img/technologies/logo-gatsby.svg',
    links: {
      'Landing Page': '/integrations/gatsby',
      'Docs': '/docs/web/using_with_react/ssr/using_with_gatsby',
      'Example App': 'https://github.com/tolgee/gatsby-example',
    }
  },
  {
    label: 'i18next',
    logo: '/img/technologies/logo-i18next.svg',
    links: {
      'Docs': '/docs/web/using_with_i18next/installation',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/i18next',
      'Example React App': 'https://github.com/tolgee/react-i18next-example',
      'Example Vue App': 'https://github.com/tolgee/vue-i18next-example',
    }
  },
  {
    label: 'Vanilla JS',
    logo: '/img/technologies/logo-js.svg',
    links: {
      'Docs': '/docs/web/get_started/hello_world',
      'GitHub Repository': 'https://github.com/tolgee/tolgee-js/tree/main/packages/core',
      'Example App': 'https://github.com/tolgee/window-example',
    }
  },
  {
    label: 'REST API',
    logo: '/img/technologies/logo-swagger.svg',
    links: {
      'API Docs': '/api',
    }
  },
  {
    label: 'PHP',
    experimental: true,
    logo: '/img/technologies/logo-php.svg',
    links: {
      "Docs": "/docs/web/using_with_php",
      "GitHub Repository": "https://github.com/tolgee/php",
      "Example App": "https://github.com/tolgee/php-example",
    }
  },
  {
    label: 'Dart',
    experimental: true,
    logo: '/img/technologies/logo-dart.svg',
    links: {
      "Docs": "/docs/web/using_with_dart",
      "GitHub Repository": "https://github.com/tolgee/dart",
      "Example App": "https://github.com/tolgee/dart-example"
    }
  },
]

export default () => {
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
          <PageHeaderSubtitle><GradientText>Integrations</GradientText></PageHeaderSubtitle>
          <PageHeaderTitle>Setup in seconds.</PageHeaderTitle>
        </PageHeader>
        <div className="md:max-w-[1000px] mx-auto mb-36 sm:max-w-[650px] max-w-[400px]">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 mx-5 gap-5">
            {integrations.map(integration => <IntegrationTile key={integration.label} integration={integration}></IntegrationTile>
            )}
          </div>
        </div>
      </DecoratedLayout>
    </div>
  );
};

const IntegrationTile: FC<{ integration: typeof integrations[number] }> = ({integration}) => {
  // We need to decorate the main link only when there no other link is hovered
  const [hoveredOtherLink, setHoveredOtherLink] = useState(false);
  const mainLink = integration.links['Landing Page'] || integration.links['Docs'] || Object.values(integration.links)[0]
  return <a href={mainLink}
            key={integration.label}
            className="group
                            grid grid-rows-[auto_1fr_auto] bg-surface min-h-[200px] rounded-2xl p-4 hover:no-underline text-home-text
                          ">
    <div className="text-2xl">{integration.label}{integration.experimental && <div className="text-sm">(experimental)</div>}</div>
    <div className="flex justify-end pr-4 flex-grow">
      {integration.logo &&
        <div className="h-[60px] w-[60px] dark:text-white">
          {typeof integration.logo === 'object' ? integration.logo :
            <img src={integration.logo} alt={integration.label}/>}
        </div>}
    </div>
    <div className="flex flex-col">
      {Object.entries(integration.links).map(([label, link]) =>
        <Link className="hover:no-underline" to={link}
              onMouseOver={() => {
                if (link !== mainLink) {
                  setHoveredOtherLink(true)
                }
              }}
              onMouseOut={() => {
                if (link !== mainLink) {
                  setHoveredOtherLink(false)
                }
              }}
        ><span
          className={clsx(`relative
                        before:content-[''] before:absolute before:w-0 before:h-full
                        before:border-0 before:border-b-2 before:border-b-primary before:border-solid
                        before:top-[1px] [&.main]:group-hover:before:w-full hover:before:w-full before:transition-all before:duration-200
                        `, (link == mainLink && !hoveredOtherLink) && 'main')}>
                      {label}
                    </span>
        </Link>)}
    </div>
  </a>
}

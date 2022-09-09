import React, { ReactNode } from 'react';
import ThemedImage from '@theme/ThemedImage';

import { RoboMouse } from '../../images/RoboMouse';
import { PageHeader } from './PageHeader';
import { PageHeaderTitle } from './PageHeaderTitle';
import { IWantItButton } from './IWantItButton';
import Link from '@docusaurus/Link';
import GitHubIcon from '../../../../static/img/github.svg';
import { Sections } from '../featurePage/sections/Sections';
import { useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';

export const EmphasisPageHeader = (props: {
  title: ReactNode;
  title2?: string;
  title3?: string;
}) => {
  const theme = useTheme();
  const isLarge = !useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageHeader
      className={clsx(
        'pt-[120px] sm:mb-[0px] sm:pb-[60px]',
        isLarge && 'min-h-[100vh]'
      )}
      noPadding
    >
      <div className="flex md:ml-[-300px] ml-[-120px]">
        <RoboMouse className="w-[100px] md:w-[151px]" />
        <ThemedImage
          alt="Swing arrow"
          className="w-28 md:w-48 ml-3"
          sources={{
            light: '/img/swingArrow.svg',
            dark: '/img/swingArrowDark.svg',
          }}
        />
      </div>
      <PageHeaderTitle className="mt-3">{props.title}</PageHeaderTitle>
      <PageHeaderTitle>{props.title2}</PageHeaderTitle>
      <PageHeaderTitle active className="mb-6">
        {props.title3}
      </PageHeaderTitle>
      <Sections withImg={true} />
      <div className="flex mt-16 mb-[80px] gap-4">
        <IWantItButton className="flex justify-center items-center">
          Sign up for free
        </IWantItButton>
        <Link
          href="https://github.com/tolgee"
          className="button--outlined flex justify-center border-2"
        >
          Explore GitHub
          <GitHubIcon className="ml-2" />
        </Link>
      </div>
      <a
        href="https://www.producthunt.com/posts/tolgee-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tolgee&#0045;2"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=358866&theme=light"
          alt="Tolgee - Localization&#0032;platform&#0032;web&#0032;app&#0032;developers&#0032;enjoy&#0032;to&#0032;work&#0032;with | Product Hunt"
          width="250"
          height="54"
        />
      </a>
    </PageHeader>
  );
};

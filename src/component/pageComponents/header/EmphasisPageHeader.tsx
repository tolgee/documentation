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
    </PageHeader>
  );
};

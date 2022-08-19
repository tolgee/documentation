import React, { ReactNode } from 'react';
import ThemedImage from '@theme/ThemedImage';

import { RoboMouse } from '../../images/RoboMouse';
import { PageHeader } from './PageHeader';
import { PageHeaderTitle } from './PageHeaderTitle';
import { IWantItButton } from './IWantItButton';
import Link from '@docusaurus/Link';
import GitHubIcon from '../../../../static/img/github.svg';
import { Sections } from '../featurePage/sections/Sections';

export const EmphasisPageHeader = (props: {
  title: ReactNode;
  title2?: string;
  title3?: string;
}) => {
  return (
    <PageHeader className="sm:min-h-[100vh] pt-[120px] sm:pb-[60px]" noPadding>
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
      <PageHeaderTitle className="mb-6" active>
        {props.title3}
      </PageHeaderTitle>
      <Sections withImg={true} />
      <div className="flex mt-16 mb-[80px] gap-4">
        <IWantItButton className="flex justify-center items-center">
          Get started
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

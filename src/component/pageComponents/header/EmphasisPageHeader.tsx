import React, { ReactNode } from 'react';
import ThemedImage from '@theme/ThemedImage';

import { RoboMouse } from '../../images/RoboMouse';
import { PageHeader } from './PageHeader';
import { PageHeaderTitle } from './PageHeaderTitle';
import { IWantItButton } from './IWantItButton';
import { OpenSourceTransparentText } from './OpenSourceTransparentText';
import Link from '@docusaurus/Link';
import GitHubIcon from '../../../../static/img/github.svg';

export const EmphasisPageHeader = (props: {
  title: ReactNode;
  title2?: string;
  title3?: string;
}) => {
  return (
    <PageHeader className="min-h-[100vh]">
      <div className="flex md:ml-[-300px] ml-[-120px]">
        <RoboMouse className="w-[151px]" />
        <ThemedImage
          alt="Swing arrow"
          className="w-48 ml-3"
          sources={{
            light: '/img/swingArrow.svg',
            dark: '/img/swingArrowDark.svg',
          }}
        />
      </div>
      <PageHeaderTitle className="mt-3">{props.title}</PageHeaderTitle>
      <PageHeaderTitle className="mt-2">{props.title2}</PageHeaderTitle>
      <PageHeaderTitle className="mt-3" active>
        {props.title3}
      </PageHeaderTitle>
      <div className="flex mt-[80px] mb-[80px] gap-4">
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
      <OpenSourceTransparentText />
    </PageHeader>
  );
};

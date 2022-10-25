import React, { FC } from 'react';
import { CSSProperties } from 'styled-components';
import './LandingPageHeadline.css';
import { PageHeader } from '../pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../pageComponents/header/PageHeaderTitle';

export const LandingPageHeadline: FC<{
  loveImage: {
    name: string;
    img: React.ReactNode;
  };
  title: string;
  style?: CSSProperties;
}> = ({ loveImage, children, title, style }) => (
  <div>
    <PageHeader className="mb-[180px]">
      {loveImage.img}
      <PageHeaderTitle h1 active className="mb-2">
        {title}
      </PageHeaderTitle>
      <div className="flex flex-wrap justify-center gap-4 m-2 mt-10">
        {children}
      </div>
    </PageHeader>
  </div>
);

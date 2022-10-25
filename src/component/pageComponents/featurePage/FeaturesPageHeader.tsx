import React from 'react';

import { Sections } from './sections/Sections';
import { PageHeaderTitle } from '../header/PageHeaderTitle';
import { PageHeader } from '../header/PageHeader';
import { PageHeaderSubtitle } from '../header/PageHeaderSubtitle';

export const FeaturesPageHeader = (props: {
  title: string;
  title2: string;
}) => {
  return (
    <PageHeader>
      <PageHeaderSubtitle h1 className="mt-3">
        {props.title}
      </PageHeaderSubtitle>
      {props.title2 && (
        <PageHeaderTitle className="mt-0" active>
          {props.title2}
        </PageHeaderTitle>
      )}
      <div className="mt-12 mb-[-30px]">
        <Sections />
      </div>
    </PageHeader>
  );
};

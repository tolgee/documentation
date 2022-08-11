import React from 'react';

import { Sections } from './sections/Sections';
import { PageHeaderTitle } from '../header/PageHeaderTitle';
import { PageHeader } from '../header/PageHeader';

export const FeaturesPageHeader = (props: {
  title: string;
  title2: string;
}) => {
  return (
    <PageHeader>
      <PageHeaderTitle className="mt-3 text-2xl">{props.title}</PageHeaderTitle>
      {props.title2 && (
        <PageHeaderTitle className="mt-2" active>
          {props.title2}
        </PageHeaderTitle>
      )}
      <div className="mt-12 mb-[-30px]">
        <Sections />
      </div>
    </PageHeader>
  );
};

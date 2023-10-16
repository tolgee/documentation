import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { FC } from 'react';

import { SectionData } from './Sections';

type Props = {
  isActive: boolean;
  section: SectionData;
  withImg: boolean;
};

export const Section: FC<Props> = ({ isActive, section, withImg }) => {
  return (
    <Link
      className={clsx(
        `text-home-text hover:no-underline group flex flex-col items-center p-1 sm:p-2 md:p-4`,
        isActive && 'text-primary'
      )}
      key={section.slug}
      to={`/features/${section.slug}`}
    >
      {withImg && (
        <div className="flex items-center mt-auto basis-[94px] w-[110px] sm:w-[150px] md:w-[200px] p-1 sm:p-2">
          {section.image}
        </div>
      )}
      <span
        className={clsx(
          'text-sm',
          'xs:text-lg',
          'sm:text-xl',
          'lg:text-lg',
          'xl:text-xl',
          'border-0',
          'border-b',
          'border-solid',
          !isActive && 'border-transparent'
        )}
      >
        {section.name}
      </span>
    </Link>
  );
};

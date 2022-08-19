import React, { ReactNode } from 'react';

import DevTools from './DevTools.svg';
import TranslationAssistance from './TranslationAssistance.svg';
import Collaboration from './Collaboration.svg';
import { useRouteMatch } from 'react-router-dom';
import { Section } from './Section';

export type SectionData = {
  name: string;
  image: ReactNode;
  slug: string;
};

export const sections = [
  { name: 'Dev tools', slug: 'dev-tools', image: <DevTools /> },
  {
    name: 'Translation Assistance',
    slug: 'translation-assistance',
    image: <TranslationAssistance />,
  },
  {
    name: 'Collaboration',
    slug: 'collaboration',
    image: <Collaboration />,
  },
] as SectionData[];

type Props = {
  withImg: boolean;
};

export const Sections: React.FC<Props> = ({ withImg }) => {
  const path = useRouteMatch();

  return (
    <div className="flex gap-2 sm:gap-8 sm:text-xl flex-wrap justify-center">
      {sections.map((section) => {
        const link = `/features/${section.slug}`;
        const isActive = path.path == link;
        return (
          <Section
            key={section.slug}
            section={section}
            isActive={isActive}
            withImg={withImg}
          />
        );
      })}
    </div>
  );
};

import React, { FC } from 'react';
import { Sections } from './sections/Sections';

export const MoreSections: FC = () => (
  <section
    className="bg-background-surface-color
      flex
      flex-col
      items-center
      pb-12
    "
  >
    <h2 className="mt-12 mb-0">Read more</h2>
    <Sections withImg={true} />
  </section>
);

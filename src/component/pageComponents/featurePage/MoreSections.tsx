import React, { FC } from 'react';
import { Sections } from './sections/Sections';

export const MoreSections: FC = () => (
  <section
    className="bg-gradient-to-b
    from-[var(--home-features-gradient-1)]
    via-[var(--home-features-gradient-2)]
    to-[var(--home-features-gradient-1)]
    flex
    flex-col
    items-center
    pb-12
  "
  >
    <h2 className="mt-12 mb-0">Read more ...</h2>
    <Sections />
  </section>
);

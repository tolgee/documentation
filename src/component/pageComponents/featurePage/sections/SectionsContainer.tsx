import React, { FC } from 'react';

export const SectionsContainer: FC = ({ children }) => (
  <section className="bg-gradient-to-b from-[var(--home-features-gradient-1)] via-[var(--home-features-gradient-2)] to-[var(--home-features-gradient-3)] flex flex-col items-center">
    <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 md:gap-12 md:m-12 mb-12 mt-12">
      {children}
    </div>
  </section>
);

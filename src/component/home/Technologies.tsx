import React from 'react';
import { TechnologyIcons } from '../TechnologyIcons';

export const Technologies = () => (
  <section className="flex justify-center">
    <div className="max-w-[700px] mx-6 sm:mx-12 my-32">
      <h2 className="text-gradient text-3xl md:text-[40px] mb-8 leading-[44px]">
        We support your favourite framework.
      </h2>
      <p className="text-[20px]">
        Tolgee has integrations for all{' '}
        <span className="text-gradient">major JS frameworks</span>. It’s super
        easy to integrate and you don’t have to look for any other tool to
        translate your app.
      </p>
      <TechnologyIcons />
    </div>
  </section>
);

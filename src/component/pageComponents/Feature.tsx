import React, { FC } from 'react';
import { FeatureData } from '../home/Features';
import { sections } from './featurePage/FeaturesPageHeader';

export const Feature: FC<{ feature: FeatureData }> = (props) => {
  const section = sections.find(
    (section) => section.slug === props.feature.section
  ).name;

  return (
    <a
      href={`/features/${props.feature.section}#${props.feature.id}`}
      className="group flex flex-col rounded-[10px] dark:bg-black/20 bg-white/30 p-8 text-home-text hover:text-home-text hover:no-underline hover:bg-white/60 dark:hover:bg-black/30 transition-all duration-200"
    >
      <>
        <h3 className="font-[600] mb-0 text-primary">{props.feature.title}</h3>
        <div className="text-xs mb-4">{section}</div>
        <p>{props.feature.text}</p>
        <div className="flex flex-col items-center mt-auto text-primary">
          {props.feature.image}
        </div>
        <div className="mt-2">
          <span
            className="relative hover:no-underline
                        before:content-[''] before:absolute before:w-0 before:h-full
                        before:border-0 before:border-b-2 before:border-b-primary before:border-solid
                        before:top-[1px] group-hover:before:w-full hover:before:w-full before:transition-all before:duration-200
      "
          >
            Read more
          </span>
        </div>
      </>
    </a>
  );
};

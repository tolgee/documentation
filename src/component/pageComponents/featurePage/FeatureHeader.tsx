import React from 'react';

export const FeatureHeader = (props: {
  title: string;
  id: string;
  gridRow?: string;
}) => {
  return (
    <header
      className="header mt-[50px] sm:mt-[120px] flex flex-col items-center justify-center mx-4"
      style={{
        gridRow: props.gridRow,
        gridColumn: 1,
      }}
    >
      <h2
        className="header__title--active mt-3 text-[18px] sm:text-[22px] font-bold"
        id={props.id}
      >
        {props.title}
      </h2>
    </header>
  );
};

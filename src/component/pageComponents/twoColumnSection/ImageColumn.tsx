import React, { FC } from 'react';

export const ImageColumn: FC = (props) => (
  <div className="flex items-center justify-center xl:w-[100%] flex-grow">
    {props.children}
  </div>
);

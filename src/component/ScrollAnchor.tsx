import React from 'react';

type Props = {
  id: string;
};

export const ScrollAnchor = ({ id }: Props) => {
  return <div style={{ top: -60, position: 'relative' }} id={id} />;
};

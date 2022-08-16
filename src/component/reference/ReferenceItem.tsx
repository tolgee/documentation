import { styled } from '@mui/material';
import React from 'react';

const StyledImg = styled('img')`
  max-width: 150px;
  max-height: 60px;
  object-fit: scale-down;
  cursor: pointer;
  filter: grayscale(1);
  opacity: 0.3;
  transition: opacity 0.5s ease-in-out;
  user-drag: none;
  user-select: none;
`;

type Props = {
  logo: string;
  onClick: () => void;
  selected: boolean;
};

export const ReferenceItem: React.FC<Props> = ({ logo, onClick, selected }) => {
  return (
    <StyledImg
      src={logo}
      onClick={onClick}
      style={{ opacity: selected ? 1 : undefined }}
      draggable="false"
    />
  );
};

import React from 'react';
import { styled } from '@mui/material';
import ThemedImage from '@theme/ThemedImage';

const StyledImg = styled(ThemedImage)`
  max-width: 150px;
  max-height: 60px;
  object-fit: scale-down;
  cursor: pointer;
  filter: grayscale(1);
  opacity: 0.4;
  transition: opacity 0.5s ease-in-out;
  user-drag: none;
  user-select: none;
`;

type Props = {
  logoLight: string;
  logoDark: string;
  onClick: () => void;
  selected: boolean;
};

export const ReferenceItem: React.FC<Props> = ({
  logoLight,
  logoDark,
  onClick,
  selected,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center">
      <StyledImg
        sources={{ light: logoLight, dark: logoDark }}
        style={{ opacity: selected ? 1 : undefined }}
        draggable="false"
      />
    </div>
  );
};

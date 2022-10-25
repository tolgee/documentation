import React from 'react';
import { styled } from '@mui/material';
import { OptimizedImage } from '../OptimizedImage';

const StyledImg = styled(OptimizedImage)`
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
  webp: boolean;
};

export const ReferenceItem: React.FC<Props> = ({
  logoLight,
  logoDark,
  onClick,
  selected,
  webp,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center">
      <StyledImg
        sources={{ light: logoLight, dark: logoDark }}
        style={{ opacity: selected ? 1 : undefined }}
        draggable="false"
        webp={webp}
      />
    </div>
  );
};

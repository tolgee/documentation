import React from 'react';
import { styled } from '@mui/material';
import { OptimizedImage } from '../OptimizedImage';

const StyledImg = styled(OptimizedImage)`
  max-width: 150px;
  max-height: 60px;
  object-fit: scale-down;
  filter: grayscale(1);
  opacity: 0.4;
  transition: opacity 0.5s ease-in-out;
  user-drag: none;
  user-select: none;
`;

type Props = {
  logoLight: string;
  logoDark: string;
};

export const PlainLogo: React.FC<Props> = ({ logoLight, logoDark }) => {
  return (
    <div className="flex items-center">
      <StyledImg
        sources={{ light: logoLight, dark: logoDark }}
        draggable="false"
      />
    </div>
  );
};

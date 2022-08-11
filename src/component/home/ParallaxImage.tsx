import React from 'react';

import HeroLight from './HeroLight.svg';
import HeroDark from './HeroDark.svg';
import HeroDarkSmall from './HeroDarkSmall.svg';
import HeroLightSmall from './HeroLightSmall.svg';
import { useDarkMode } from '../../utils';
import { useMediaQuery, useTheme } from '@mui/material';

export const ParallaxImage = () => {
  const isDark = useDarkMode();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="z-10 grid flex-grow pointer-events-none">
      {isDark ? (
        isSmall ? (
          <HeroDarkSmall className="hero-svg" />
        ) : (
          <HeroDark className="hero-svg" />
        )
      ) : isSmall ? (
        <HeroLightSmall className="hero-svg" />
      ) : (
        <HeroLight className="hero-svg" />
      )}
    </div>
  );
};

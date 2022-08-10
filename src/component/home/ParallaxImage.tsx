import React from 'react';

import HeroLight from './HeroLight.svg';
import HeroDark from './HeroDark.svg';
import { useDarkMode } from '../../utils';

export const ParallaxImage = () => {
  const isDark = useDarkMode();

  return (
    <div className="z-10 grid flex-grow pointer-events-none">
      {isDark ? (
        <HeroDark className="hero-svg" />
      ) : (
        <HeroLight className="hero-svg" />
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';

import HeroLight from './HeroLight.svg';
import HeroDark from './HeroDark.svg';
import { useDarkMode } from '../../utils';

export const ParallaxImage = () => {
  const isDark = useDarkMode();

  // docosaurus somehow messes up svg on first render in production mode
  // when dark mode is on
  const [_display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <React.Fragment key={Number(_display)}>
      {isDark ? (
        <HeroDark className="hero-svg" />
      ) : (
        <HeroLight className="hero-svg" />
      )}
    </React.Fragment>
  );
};

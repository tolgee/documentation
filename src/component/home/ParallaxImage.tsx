import React, { useEffect, useRef, useState } from 'react';

import HeroLight from './HeroLight.svg';
import HeroDark from './HeroDark.svg';
import { useDarkMode } from '../../utils';

const SHIFT_CONVERSION = 0.1;
const GLOBAL_ELEVATION = 0.1;

const sinStep = (activeSection: number, x: number, height: number) => {
  return x > -activeSection / 2
    ? x < activeSection / 2
      ? (Math.sin((x / activeSection) * Math.PI) + 1) * (height / 2)
      : height
    : 0;
};

export const ParallaxImage = () => {
  const elRef = useRef<any>(null);
  const isDark = useDarkMode();

  // docosaurus somehow messes up svg on first render in production mode
  // when dark mode is on
  const [_display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);

  useEffect(() => {
    const viewPortSize = window.innerHeight;

    const activeSection = viewPortSize * 0.1;

    const element = document;

    element.addEventListener('scroll', parallax, { passive: true });

    const svgParts = Array.from(
      document.querySelectorAll('.hero-parallax')
    ) as SVGGElement[];

    svgParts.forEach((layer) => {
      layer.style.transformOrigin = 'center center';
    });

    function parallax() {
      const initialPageY = elRef.current.offsetTop;

      const topOffset = document.documentElement.scrollTop;
      svgParts.forEach((layer: SVGPathElement) => {
        const elevation = Number(layer.getAttribute('data-parallax-y'));
        const time = Number(layer.getAttribute('data-parallax-timing'));

        const moveY = topOffset - initialPageY;
        const shift = moveY * elevation * SHIFT_CONVERSION;
        const shiftGlobal = moveY * GLOBAL_ELEVATION * SHIFT_CONVERSION;

        const timeShift = viewPortSize * (0.5 - time * 0.5);

        const scale = sinStep(
          activeSection,
          moveY + timeShift + activeSection,
          1
        );
        const opacity = sinStep(
          activeSection / 2,
          moveY + timeShift + activeSection - activeSection / 3,
          1
        );

        layer.style.transform = `translateY(${-shift - shiftGlobal}px) scale(${
          1 / scale
        })`;
        layer.style.opacity = `${opacity}`;
      });
    }
    parallax();

    return () => element.removeEventListener('scroll', parallax);
  });

  return (
    <div ref={elRef} key={Number(_display)} className="z-10">
      {isDark ? (
        <HeroDark className="hero-svg" />
      ) : (
        <HeroLight className="hero-svg" />
      )}
    </div>
  );
};

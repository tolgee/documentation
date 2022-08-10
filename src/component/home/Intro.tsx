import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { GradientText } from '../GradientText';
import { ImageColumn } from '../pageComponents/twoColumnSection/ImageColumn';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../pageComponents/twoColumnSection/TextColumn';
import { ParallaxImage } from './ParallaxImage';

const DELAY = 0.1;
const OPACITY_AHEAD = 0.13;

const sinStep = (x: number) => {
  return x > 0 ? (x < 1 ? (Math.sin((x - 0.5) * Math.PI) + 1) / 2 : 1) : 0;
};

const AheadParallax = ({ progress }) => {
  useEffect(() => {
    const element = document;

    element.addEventListener('scroll', parallax, { passive: true });

    const svgParts = Array.from(
      document.querySelectorAll('.hero-parallax')
    ) as SVGGElement[];

    svgParts.forEach((layer) => {
      layer.style.transformOrigin = 'center center';
    });

    function parallax() {
      svgParts.forEach((layer: SVGPathElement) => {
        const time = Number(layer.getAttribute('data-parallax-timing'));

        const scale = sinStep((progress - DELAY - time) * 5);
        const opacity = sinStep((progress - DELAY - OPACITY_AHEAD - time) * 30);

        layer.style.transform = `scale(${1 / scale})`;
        layer.style.opacity = `${opacity}`;
      });
    }
    parallax();

    return () => element.removeEventListener('scroll', parallax);
  });
  return null;
};

const DURATION = 500;

export const Intro = () => {
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    const handler = () => setViewPortHeight(window.innerHeight);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const enabled = !isSmall;

  return (
    <div
      style={{
        marginTop: enabled ? '10vh' : '5rem',
        marginBottom: enabled ? '10vh' : -DURATION,
      }}
    >
      <Controller>
        <Scene
          duration={viewPortHeight + DURATION}
          enabled={enabled}
          offset={-viewPortHeight * 0.5}
        >
          {(progress) => (
            <div>
              <AheadParallax progress={enabled ? progress : 1} />
            </div>
          )}
        </Scene>
        <Scene
          pin
          duration={DURATION}
          offset={viewPortHeight / 8 + 150}
          enabled={enabled}
        >
          <section className="flex justify-center w-[100vw] ">
            {Boolean(viewPortHeight) && (
              <div className="flex gap-12 sm:m-12 m-8 flex-col lg:flex-row md:max-w-[1500px] flex-grow">
                <ImageColumn>
                  <ParallaxImage />
                </ImageColumn>
                <TextColumn
                  className="md:min-w-[300px] lg:items-end md:items-center
                             md:text-center lg:text-left lg:mt-[60px]"
                >
                  <TextColumnTitle>Revolution is here</TextColumnTitle>
                  <TextColumnText>
                    Speed up your translation process by{' '}
                    <span>
                      <GradientText>90%</GradientText>
                    </span>{' '}
                    using Tolgee. It has{' '}
                    <GradientText>revolutionary</GradientText> integrations.
                    Setup Tolgee in seconds. Let{' '}
                    <GradientText>anyone</GradientText> translate your App with
                    in-context localization feature.
                  </TextColumnText>
                </TextColumn>
              </div>
            )}
          </section>
        </Scene>
      </Controller>
    </div>
  );
};

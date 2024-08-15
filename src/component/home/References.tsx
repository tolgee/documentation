import React, { useState } from 'react';

import { ReferenceItem } from '../reference/ReferenceItem';
import { OptimizedImage } from '../OptimizedImage';
import { PlainLogo } from '../reference/PlainLogo';

type Reference = {
  name: string;
  logoLight: string;
  logoDark: string;
  quote: string;
  link: string | undefined;
  caseStudy?: string;
};

const references: Reference[] = [
  {
    name: 'Fluent Search',
    logoLight: '/logos/fluentsearchLight.webp',
    logoDark: '/logos/fluentsearchDark.webp',
    link: 'https://fluentsearch.net/',
    quote:
      'Localizing Fluent Search using Tolgee couldn’t have been smoother, with over 1800 keys that update every week I needed something easy to use and modern from both the developer and translator standpoints.',
    caseStudy: '/blog/case-study-fluent-search',
  },
  {
    name: 'Whatspot',
    logoLight: '/logos/whatspotLight.svg',
    logoDark: '/logos/whatspotDark.svg',
    link: 'https://www.whatspot.app',
    quote:
      'Very intuitive and user-friendly interface that makes it easy to navigate and use, even for those who are new. Collaboration with others is great. I invited a colleague, and she was able to understand so quickly what to do. Fast and easy integration process. Great support! Just love it.',
    caseStudy: '/blog/case-study-whatspot',
  },
  {
    name: 'Phonexia',
    logoLight: '/logos/phonexiaLight.webp',
    logoDark: '/logos/phonexiaDark.webp',
    link: 'https://www.phonexia.com/product/orbis/',
    quote:
      'We enjoy the ease of translating and correcting text from the front-end of the solution, as well as the automatic translation. We also appreciate the self-hosting option. Great job Tolgee!',
  },
  {
    name: 'Flowerchecker',
    logoLight: '/logos/flowerchecker.webp',
    logoDark: '/logos/flowerchecker.webp',
    link: 'https://web.plant.id/',
    quote:
      'In FlowerChecker, we use Tolgee not only to translate our website but also to provide information in our plant identification API in multiple languages. We especially like the tags feature, which helps us link related content.',
  },
  {
    name: 'Ictiobiometria',
    logoLight: '/logos/ictioLight.svg',
    logoDark: '/logos/ictioDark.svg',
    link: 'https://ictio.org',
    quote:
      'Tolgee fit perfectly for us, any change can be made in a moment, from anywhere and then we just request our new JSONs directly from their API. No more needless searching, no more wasted time.',
  },
  {
    name: 'ElevenClock',
    logoLight: '/logos/elevenclockLight.webp',
    logoDark: '/logos/elevenclockDark.webp',
    link: 'https://github.com/martinet101/ElevenClock/',
    quote:
      'I have been now using Tolgee for some time and it’s been great. I am now able to collaborate with people around the world to be able to translate ElevenClock to more than 30 languages. Also, Tolgee’s API integrations allowed us to automate retrieving new translations from the platform.',
  },
];

const plainLogos = [
  {
    name: 'Celeste',
    logoLight: '/logos/plain/celesteLight.png',
    logoDark: '/logos/plain/celesteDark.png',
  },
  {
    name: 'Obi',
    logoLight: '/logos/plain/obiLight.png',
    logoDark: '/logos/plain/obiDark.png',
  },
  {
    name: 'AbInBev',
    logoLight: '/logos/plain/abinbevLight.png',
    logoDark: '/logos/plain/abinbevDark.png',
  },
  {
    name: 'Waterplan',
    logoLight: '/logos/plain/waterplanLight.png',
    logoDark: '/logos/plain/waterplanDark.png',
  },
  {
    name: 'Whalebone',
    logoLight: '/logos/plain/whaleboneLight.png',
    logoDark: '/logos/plain/whaleboneDark.png',
  },
];

export const References = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const step = 100 / references.length;
  const steps = references.reduce(
    (acc, _) => [...acc, acc[acc.length - 1] - step],
    [0]
  );

  const left = steps[currentItemIndex];

  const onNext = () => {
    setCurrentItemIndex((current) => {
      return (current + 1) % references.length;
    });
  };

  const onPrevious = () => {
    setCurrentItemIndex((current) => {
      return current > 0 ? current - 1 : references.length - 1;
    });
  };

  return (
    <section className="bg-background-surface-color flex overflow-hidden relative items-center references-section">
      <button
        className="references__nav references__nav--left"
        aria-label="previous"
        onClick={onPrevious}
      />
      <div className="py-20 md:mx-12 references flex flex-col flex-grow items-center relative z-10 overflow-hidden">
        <h2 className="mb-12 text-gradient text-3xl text-center relative z-30">
          Used by 8500+ users worldwide.
        </h2>
        <div className="w-full">
          <div
            className="relative"
            style={{ width: `${references.length * 100}%` }}
          >
            <div
              className={`relative flex transition-all duration-[1s]`}
              style={{ left: `${left}%` }}
            >
              {references.map((reference, idx) => (
                <div
                  key={idx}
                  className="flex justify-center"
                  style={{ width: `${100 / references.length}%` }}
                >
                  <div className="max-w-[800px]">
                    <div className="grid">
                      <div className="references__avatar-wrapper">
                        <OptimizedImage
                          sources={{
                            light: reference.logoLight,
                            dark: reference.logoDark,
                          }}
                          className="references__avatar--image"
                          alt={reference.name}
                        />
                      </div>

                      <div className="text-[16px] sm:text-[20px] flex items-center text-center md:text-left z-30">
                        {reference.quote}
                      </div>

                      <div className="flex justify-center mt-6 gap-10">
                        {reference.caseStudy && (
                          <a
                            href={reference.caseStudy}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-lg"
                          >
                            Read case study
                          </a>
                        )}
                        {reference.link && (
                          <a
                            href={reference.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-lg"
                          >
                            Visit web
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="decoration" />
        <div className="hidden xl:flex gap-6 mt-10 items-stretch">
          {references.map((reference, i) => (
            <ReferenceItem
              key={i}
              logoLight={reference.logoLight}
              logoDark={reference.logoDark}
              onClick={() => setCurrentItemIndex(i)}
              selected={i === currentItemIndex}
            />
          ))}
        </div>

        <div className="flex gap-6 mt-10 items-stretch flex-wrap justify-center">
          {plainLogos.map(({ name, logoDark, logoLight }) => (
            <PlainLogo key={name} logoDark={logoDark} logoLight={logoLight} />
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://www.capterra.com/p/10002120/Tolgee/reviews/?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://assets.capterra.com/badge/7da1869535ec85f42df2a7cc09e8d270.svg?v=2225987&p=278005"
              className="h-[49px]"
            />
          </a>
        </div>
      </div>
      <button
        className="references__nav references__nav--right"
        aria-label="next"
        onClick={onNext}
      />
    </section>
  );
};

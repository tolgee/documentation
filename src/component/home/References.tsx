import React, { useState } from 'react';
import { ReferenceItem } from '../reference/ReferenceItem';

type Reference = {
  logo: string;
  quote: string;
  link: string | undefined;
};

const references: Reference[] = [
  {
    logo: '/logos/phonexia.png',
    link: 'https://www.phonexia.com/product/orbis/',
    quote:
      'We enjoy the ease of translating and correcting text from the front-end of the solution, as well as the automatic translation. We also appreciate the self-hosting option. Great job Tolgee!',
  },
  {
    logo: '/logos/flowerchecker.png',
    link: 'https://web.plant.id/',
    quote:
      'In FlowerChecker, we use Tolgee not only to translate our website but also to provide information in our plant identification API in multiple languages. We especially like the tags feature, which helps us link related content.',
  },
  {
    logo: '/logos/ictio.svg',
    link: 'https://ictio.org',
    quote:
      'Tolgee fit perfectly for us, any change can be made in a moment, from anywhere and then we just request our new JSONs directly from their API. No more needless searching, no more wasted time.',
  },
  {
    logo: '/logos/elevenclock.png',
    link: 'https://github.com/martinet101/ElevenClock/',
    quote:
      'I have been now using Tolgee for some time and it’s been great. I am now able to collaborate with people around the world to be able to translate ElevenClock to more than 30 languages. Also, Tolgee’s API integrations allowed us to automate retrieving new translations from the platform.',
  },
  {
    logo: '/logos/fluentsearch.png',
    link: 'https://fluentsearch.net/',
    quote:
      'Localizing Fluent Search using Tolgee couldn’t have been smoother, with over 1800 keys that update every week I needed something easy to use and modern from both the developer and translator standpoints.',
  },
  {
    logo: '/logos/aviyel.png',
    link: 'https://aviyel.com/',
    quote:
      'Tolgee is a very powerful tool for localization of your project. What I like about it is the ability to change the translation text seamlessly without changing a single file manually.',
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
    <section className="bg-[color:var(--references-bg)] flex overflow-hidden relative items-center references-section">
      <button
        className="references__nav references__nav--left"
        aria-label="previous"
        onClick={onPrevious}
      />
      <div className="py-20 md:mx-12 references flex flex-col flex-grow items-center relative z-10 overflow-hidden">
        <h2 className="mb-12 text-gradient text-3xl text-center relative z-30">
          Satisfied users all around the world.
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
                        <img
                          src={reference.logo}
                          className="references__avatar--image"
                        />
                      </div>

                      <div className="text-[16px] sm:text-[20px] flex items-center text-center md:text-left z-30">
                        {reference.quote}
                      </div>

                      <div className="flex justify-center mt-6">
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
        <div className="hidden xl:flex gap-6 mt-10 items-center">
          {references.map((reference, i) => (
            <ReferenceItem
              key={i}
              logo={reference.logo}
              onClick={() => setCurrentItemIndex(i)}
              selected={i === currentItemIndex}
            />
          ))}
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

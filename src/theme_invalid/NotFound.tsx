import React, { useEffect, useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

const variants = [
  {
    image: '/img/mouseBroken.svg',
    caption:
      'It looks like this page went on an unexpected adventure and it got a little out of hand.',
  },
  {
    image: '/img/mouseCheese.svg',
    caption:
      "We've looked everywhere, but it seems this page has gone on an extended vacation. We hope it sends a postcard soon!",
  },
  {
    image: '/img/mouseSleeping.svg',
    caption:
      "Looks like the page you're looking for is taking a siesta. We'll wake it up and get it back to work soon!",
  },
] as const;

export default function NotFound() {
  const [variant, setVariant] = useState<(typeof variants)[number]>();

  useEffect(() => {
    setVariant(variants[Math.floor(Math.random() * variants.length)]);
  }, []);

  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: '404: Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page"
                >
                  404: Page Not Found
                </Translate>
              </h1>
              {variant && (
                <>
                  <div className="flex justify-center mb-4">
                    <img style={{ height: 300 }} src={variant.image} />
                  </div>
                  <p className="italic">{variant.caption}</p>
                </>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

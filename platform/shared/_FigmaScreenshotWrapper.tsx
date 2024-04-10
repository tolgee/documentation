import clsx from 'clsx';
import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import './_FigmaScreenshotWrapper.css';

type Props = Partial<React.ComponentProps<typeof ThemedImage>> & {
  src?: string;
};

export const FigmaScreenshotWrapper = ({ ...props }: Props) => {
  const sources = props.sources ?? { dark: props.src, light: props.src };

  const imageProps = { ...props, sources };

  return (
    <div
      className={clsx('figma-screenshot-wrapper--container', {
        'figma-screenshot-wrapper--themed': Boolean(props.sources),
      })}
    >
      <div className="figma-screenshot-wrapper--header">
        <div className="figma-screenshot-wrapper--label">
          <div className="figma-screenshot-wrapper--square" />
          <div>Tolgee</div>
        </div>
        <div className="figma-screenshot-wrapper--close" />
      </div>
      <ThemedImage {...imageProps} className={props.className} />
    </div>
  );
};

import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import { useDarkMode } from '../utils';

type Props = {
  webp?: boolean;
} & React.ComponentProps<typeof ThemedImage>;

export const OptimizedImage: React.FC<Props> = ({ sources, webp, ...rest }) => {
  const isDark = useDarkMode();
  const url =
    (isDark ? sources.dark : sources.light) || sources.light || sources.dark;

  return (
    <picture style={{ display: 'contents' }}>
      {webp && (
        <source srcSet={url.replace(/\..*$/g, '.webp')} type="image/webp" />
      )}
      <img src={url} {...rest} />
    </picture>
  );
};

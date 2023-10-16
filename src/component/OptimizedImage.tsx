import React from 'react';
import ThemedImage from '@theme/ThemedImage';

type Props = React.ComponentProps<typeof ThemedImage>;

export const OptimizedImage: React.FC<Props> = ({ sources, ...rest }) => {
  return (
    <ThemedImage
      sources={{
        light: sources.light,
        dark: sources.dark,
      }}
      {...rest}
    />
  );
};

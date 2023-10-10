import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import './ScrollDownArrow.css';

export const ScrollDownArrow = () => {
  return (
    <div className="absolute bottom-10 right-10 left-10 flex justify-end">
      <ThemedImage
        alt="Swing arrow"
        className="ScrollDownArrow--image"
        sources={{
          light: '/img/swingArrow.svg',
          dark: '/img/swingArrowDark.svg',
        }}
      />
    </div>
  );
};

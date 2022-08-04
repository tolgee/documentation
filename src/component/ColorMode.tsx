import React from 'react';
import { useDarkMode } from '../utils';

type Props = {
  light: React.ReactNode;
  dark: React.ReactNode;
};

export const ColorMode: React.FC<Props> = ({ light, dark }) => {
  const isDark = useDarkMode();
  return <>{isDark ? dark : light}</>;
};

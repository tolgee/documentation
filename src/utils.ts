import { useColorMode } from '@docusaurus/theme-common';
export const useDarkMode = () => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark';
};

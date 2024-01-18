import { CustomThemeColors } from './theme/colors';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: CustomThemeColors;
  }

  interface PaletteOptions {
    custom: CustomThemeColors;
  }
}

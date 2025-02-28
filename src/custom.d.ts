import { CustomThemeColors } from './theme_internal/colors';

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

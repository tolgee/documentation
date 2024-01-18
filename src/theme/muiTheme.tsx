import { darkThemeColors, lightThemeColors } from './colors';
import { createTheme as muiCreateTheme } from '@mui/material/styles';

export const createTheme = (isDarkTheme: boolean) => {
  return muiCreateTheme({
    palette: {
      primary: {
        main: isDarkTheme ? 'rgb(255, 105, 149)' : '#EC407A',
      },
      custom: isDarkTheme ? darkThemeColors : lightThemeColors,
    },
  });
};

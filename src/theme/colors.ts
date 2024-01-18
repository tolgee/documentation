export type CustomThemeColors = typeof lightThemeColors;
export const lightThemeColors = {
  tableHeadBackground: 'var(--table-head-background)',
  tableBorder: 'var(--table-border-color)',
  tableRowBackground: 'var(--ifm-background-color)',
};

export const darkThemeColors = {
  ...lightThemeColors,
} as CustomThemeColors;

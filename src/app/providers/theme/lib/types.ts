export enum Theme {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

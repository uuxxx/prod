export enum Theme {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
  ORANGE = 'orange-theme',
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}
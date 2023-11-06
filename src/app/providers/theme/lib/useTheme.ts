import { useContext } from 'react';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/constants/localstorage';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';

interface UseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseTheme {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme() {
      let newTheme: Theme;
      switch (theme) {
        case Theme.DARK:
          newTheme = Theme.LIGHT;
          break;
        case Theme.LIGHT:
          newTheme = Theme.ORANGE;
          break;
        case Theme.ORANGE:
          newTheme = Theme.DARK;
          break;
      }
      localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
      toggleTheme(newTheme);
    },
  };
}

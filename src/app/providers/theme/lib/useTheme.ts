import { useContext } from 'react';
import { LOCALSTORAGE_THEME_KEY } from './localStorage_theme_key';
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
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
      toggleTheme(newTheme);
    },
  };
}

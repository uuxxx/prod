import { createContext } from 'react';
import { Theme, ThemeContextValue } from './types';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: Theme.DARK,
  toggleTheme: () => {},
});

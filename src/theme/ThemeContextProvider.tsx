import { useState, useCallback, FC, PropsWithChildren } from "react";
import { LOCALSTORAGE_THEME_KEY } from "./localStorage_theme_key";
import { ThemeContext } from "./ThemeContext"
import { Theme } from "./types";

export const ThemeContextProvider: FC<PropsWithChildren> = ({children}) => {
  const defaultTheme = (localStorage.getItem(LOCALSTORAGE_THEME_KEY) || Theme.LIGHT) as Theme

  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = useCallback((theme: Theme) => {
    setTheme(theme)
  }, [])

  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
    {children}
  </ThemeContext.Provider>
}  
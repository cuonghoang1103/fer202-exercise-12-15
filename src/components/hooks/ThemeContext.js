// Ex14 - Context chua theme + ham doi theme
import { createContext, useState } from 'react';
import { themes } from '../../data/hooks';

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

// Provider boc cac component con, cung cap theme cho tat ca
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const value = {
    theme: dark ? themes.dark : themes.light,
    toggleTheme: () => setDark((d) => !d),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

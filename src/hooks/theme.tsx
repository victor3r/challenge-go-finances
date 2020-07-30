import React, { useState, createContext, useCallback, useContext } from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeState {
  title: string;

  colors: {
    primary: string;
    secundary: string;

    background: string;
    text: string;
  };
}

interface ThemeContextData {
  theme: ThemeState;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<ThemeState>(() => {
    const theme = localStorage.getItem('@GoFinances:theme');

    if (theme) {
      return JSON.parse(theme);
    }

    return light;
  });

  const toggleTheme = useCallback(() => {
    localStorage.setItem(
      '@GoFinances:theme',
      JSON.stringify(state.title === 'light' ? dark : light),
    );

    setState(oldState => (oldState.title === 'light' ? dark : light));
  }, [state]);

  return (
    <ThemeContext.Provider value={{ theme: state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

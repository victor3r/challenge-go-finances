import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './hooks/theme';
import AppProvider from './hooks';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Routes />
        </Router>

        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;

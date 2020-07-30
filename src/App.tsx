import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <AppProvider>
    <Router>
      <Routes />
    </Router>

    <GlobalStyle />
  </AppProvider>
);

export default App;

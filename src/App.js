import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Routes from './components/Routes';

require('dotenv').config();

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

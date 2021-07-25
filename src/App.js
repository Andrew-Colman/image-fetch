import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Routes from './components/Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

require('dotenv').config();

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </Provider>
    </>
  );
}

export default App;

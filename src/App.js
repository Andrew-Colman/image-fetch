import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { GalleryProvider } from './components/GalleryContext';

const Home = lazy(() => import('./pages/home'));
const GalleryPage = lazy(() => import('./pages/gallery'));

require('dotenv').config();

const theme = {
  global: {},
};

function App() {
  return (
    <div className="App container-fluid bg-dark">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Grommet theme={theme}>
              <GalleryProvider>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/gallery">
                  <GalleryPage />
                </Route>
              </GalleryProvider>
            </Grommet>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

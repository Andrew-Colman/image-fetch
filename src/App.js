import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GalleryProvider } from './components/GalleryContext';
import GlobalStyle from './components/globalStyles';
import Navbar from './components/NavBar';

const Home = lazy(() => import('./pages/home'));
const GalleryPage = lazy(() => import('./pages/gallery'));
const FeaturedPage = lazy(() => import('./pages/featured'));
require('dotenv').config();

function App() {
  return (
    <div className="App container-fluid bg-dark">
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <GalleryProvider>
              <Navbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/gallery">
                <GalleryPage />
              </Route>
              <Route exact path="/featured">
                <FeaturedPage />
              </Route>
            </GalleryProvider>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

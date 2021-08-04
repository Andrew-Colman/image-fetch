import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './Loading';
import Navbar from './layout/NavBar';

const Home = lazy(() => import('../pages/index'));
const GalleryPage = lazy(() => import('../pages/gallery'));
const FeaturedPage = lazy(() => import('../pages/featured'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

export default function Routes() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <GalleryPage />
            </Route>
            <Route exact path="/featured">
              <FeaturedPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

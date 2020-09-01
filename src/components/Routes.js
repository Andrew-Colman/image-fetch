import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
import Navbar from '../layout/NavBar';
import { GalleryProvider } from './GalleryContext';

const Home = lazy(() => import('../pages/home'));
const GalleryPage = lazy(() => import('../pages/gallery'));
const FeaturedPage = lazy(() => import('../pages/featured'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

export default function Routes() {
  return (
    <>
      <Router>
        <GalleryProvider>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <ToastContainer />
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
        </GalleryProvider>
      </Router>
    </>
  );
}

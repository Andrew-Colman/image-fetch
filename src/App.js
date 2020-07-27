import React, { useRef } from 'react';
import Gallery from './components/Gallery';
import Forms from './components/Forms';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Search from './layout/Search';
import { GalleryProvider } from './components/GalleryContext';
import { Grommet } from 'grommet';

require('dotenv').config();

const theme = {
  global: {},
};

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
function App(props) {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div className="App container-fluid bg-dark">
      <Grommet theme={theme}>
        <Header />
        <GalleryProvider>
          <Search>
            <Forms scroll={executeScroll} />
          </Search>

          <div className="row">
            <div ref={myRef} id="gallery" className="col bg-dark">
              <Gallery />
            </div>
          </div>
        </GalleryProvider>
        <Footer />
      </Grommet>
    </div>
  );
}

export default App;

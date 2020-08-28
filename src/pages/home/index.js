import React, { useRef } from 'react';
import GalleryGrid from './components/GalleryGrid';
import Footer from '../../layout/Footer';
import Header from './components/Header';
import Forms from './components/Forms';
import Search from './components/Search';

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: 'smooth',
  });

export default function Index() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Search>
          <Forms scroll={executeScroll} />
        </Search>
        <div className="row">
          <div ref={myRef} id="gallery" className="col bg-dark">
            <GalleryGrid />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

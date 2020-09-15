import React, { useRef } from 'react';
import GalleryGrid from './components/GalleryGrid';
import Footer from '../../layout/Footer';
import Header from './components/Header';
import Forms from './components/Forms';
import Search from './components/Search';
import useScroll from '../../components/useScroll';
import useParams from '../../components/useParams';

export default function Index() {
  const { scrollToRef, scrollTop } = useScroll();
  const queryParams = useParams('to');

  const searchRef = useRef(null);
  const galleryRef = useRef(null);

  React.useEffect(() => {
    if (queryParams === 'search') {
      scrollToRef(searchRef, -88);
    } else if (queryParams === 'top') {
      scrollTop();
    }
  });
  const executeScroll = () => scrollToRef(galleryRef, 0);

  return (
    <>
      <Header />
      <div ref={searchRef} className="container-fluid">
        <Search>
          <Forms scroll={executeScroll} />
        </Search>
        <div className="row">
          <div ref={galleryRef} id="gallery" className="col bg-dark">
            <GalleryGrid />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

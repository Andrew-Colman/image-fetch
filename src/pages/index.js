import React, { useRef } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Footer from '../components/layout/Footer';
import Header from '../components/Header';
import Forms from '../components/Forms';
import SearchContainer from '../components/SearchContainer';
import useScroll from '../hooks/useScroll';
import useParams from '../hooks/useParams';

export default function HomePage() {
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

  const executeScroll = () => {
    setTimeout(() => {
      scrollToRef(galleryRef, 0);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div ref={searchRef} className="container-fluid">
        <SearchContainer>
          <Forms scroll={executeScroll} />
        </SearchContainer>
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

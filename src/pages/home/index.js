import React, { useRef } from 'react';
import Gallery from '../../components/Gallery';
import Forms from '../../components/Forms';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import Search from '../../layout/Search';

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
      <Search>
        <Forms scroll={executeScroll} />
      </Search>
      <div className="row">
        <div ref={myRef} id="gallery" className="col bg-dark">
          <Gallery />
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, {useRef, useContext} from 'react';
import PixImage from './components/PixImage';
import Forms from './components/Forms';
import Footer from './layout/Footer'
import Header from './layout/Header'
import Search from './layout/Search';
import { GalleryContext } from './components/GalleryContext';
 

require('dotenv').config()

const scrollToRef = (ref) => window.scrollTo({
  top:ref.current.offsetTop, 
  left: 0,
  behavior: 'smooth'})
function App(props) {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

 


  return (
    <div className="App container-fluid bg-dark">
      
        <Header />
        <GalleryContext.Provider value="query">
        <Search>
          <Forms scroll={executeScroll}  />
        </Search>
          
          <div className="row">
            <div ref={myRef} id="gallery" className="col bg-dark">
             
              <PixImage />
             
            </div>
          </div>
        <Footer />
        </GalleryContext.Provider>
    </div>
  );
}

export default App;

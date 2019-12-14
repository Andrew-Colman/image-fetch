import React,{useRef} from 'react';
import PixImage from './components/PixImage';
import Forms from './components/Forms';



const scrollToRef = (ref) => window.scrollTo({
  top:ref.current.offsetTop, 
  left: 0,
  behavior: 'smooth'})
function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <div className="App container-fluid bg-dark">
        <div className="row">
        <div className="col bg-dark text-center text-white">
          <div class="jumbotron bg-dark">
            <h1 class="display-4">Welcome</h1>
            <p class="lead">to Spectral apps fetch project</p>
            
            <p>Content</p>

          </div>
          <hr />
        </div>
        </div>

        <div className="row mt-2">
        <div id="search" className="col bg-dark text-center text-white">
        
    <Forms scroll={executeScroll} value="yellow" />
    <hr />
        </div>
        </div>
        <div className="row">
        <div ref={myRef} id="gallery" className="col bg-dark">
          <PixImage />
          </div>
        </div>
       
        
    </div>
  );
}

export default App;

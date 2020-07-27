import React,{ useState} from 'react'
import { Collapse, Button} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
    
        <div className="row"> 
          <div className="col-12 bg-dark text-center text-white">
            <div className="jumbotron bg-dark">
              <h1 className="display-4">Welcome</h1>
              <p className="lead">Spectral Apps fetch project</p>
              
              <Button color="link" onClick={toggle} style={{ marginBottom: '1rem' }}><i className="fas fa-question-circle"></i></Button>
      <Collapse className="collapse row mt-2 px-3 text-center" isOpen={isOpen}>
              <p>Description: Search Photos, Vectors and Illustrations from Pixabay 
              <br/>then the App displays the results (Images, Authors, number of downloads) (Download any Image)</p>
              </Collapse>
             
            </div>
            <hr/>
          </div>
          
        </div>
        
    )
}

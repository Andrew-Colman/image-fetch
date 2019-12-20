import React, {useState, useContext, createContext} from 'react'
import { GalleryContext } from './GalleryContext';



export default function Forms(props) {

const context = useContext(GalleryContext);

const [values, setValues] = useState(
  {"query": "girl",
  "quantity": 12,
  "image_type": "photo",
  "colors": null
});


  const handleSubmit = e => {
    e.preventDefault();
   
   props.scroll();
}




  

function handleChange(e) {
  const {name,value,type,checked} = e.target
   if(type === "checkbox"){
    setValues({
      ...values,
       [name]: checked} )
   }else{setValues( {...values, [name]: value  })}



}


return (
        
        <div>
       
        <form onSubmit={handleSubmit}>
         <input name="query" value={props.query} type="text" placeholder="search..." onChange={handleChange} /> <br/><br/> 
            
           
                        <input
                    type="text"
                    name="quantity"
                    pattern="[0-9]*"
                    placeholder="results"
                    min="1" max="20"
                    onKeyDown={e => /[+-.,]$/.test(e.key) && e.preventDefault()} onChange={handleChange} /> <br/><br/>

            <label>Color:  <select name="colors" value={values.colors} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select> </label> <br />

          <br /> <label> <input name="image_type" value="Photo" type="radio" checked={values.image_type === "Photo" } onChange={handleChange} /> Photo </label>
          <br /> <label> <input name="image_type" value="Illustration" type="radio" checked={values.image_type === "Illustration" } onChange={handleChange} /> Illustration </label>
          <br /> <label> <input name="image_type" value="Vector" type="radio" checked={values.image_type === "Vector" } onChange={handleChange} /> Vector </label>
          <br />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
         
        </div>
        
    )
}

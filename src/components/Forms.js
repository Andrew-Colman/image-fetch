import React, {useContext} from 'react'
import { GalleryContext } from './GalleryContext';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Forms(props) {

const [values, setValues] = useContext(GalleryContext);




  const handleSubmit = e => {
    e.preventDefault();
   props.scroll();
   const func = () => setValues({...values, uri: "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(values.query)+"&image_type="+values.imageType+"&colors="+values.colors});
   func();
  
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
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select> </label> <br />

          <br /> <label> <input name="imageType" value="photo" type="radio" checked={values.imageType === "photo" } onChange={handleChange} /> Photo </label>
          <br /> <label> <input name="imageType" value="illustration" type="radio" checked={values.imageType === "illustration" } onChange={handleChange} /> Illustration </label>
          <br /> <label> <input name="imageType" value="vector" type="radio" checked={values.imageType === "vector" } onChange={handleChange} /> Vector </label>
          <br />
            <button className="btn btn-primary" type="submit" onClick={values.func}>Search</button>
          </form>
         
        </div>
        
    )
}

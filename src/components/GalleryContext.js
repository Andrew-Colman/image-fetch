import React, {useState, createContext} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;

export const GalleryContext = createContext();


export const GalleryProvider = props => {
    const [values, setValues] = useState(
        {"query": "query",
        "quantity": 12,
        "imageType": "photo",
        "colors": "",
        "uri": "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent("query")
      });



            
      

      return(
        <GalleryContext.Provider value={[values, setValues]}>
        {props.children}
    </GalleryContext.Provider>
      );

}
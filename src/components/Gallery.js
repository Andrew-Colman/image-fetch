import React, {useState,useEffect,useContext} from 'react'

import "./PixImage.css"
import Image from "./Image"
import { GalleryContext } from './GalleryContext';
const axios = require('axios');

export default function Gallery(props) {
    //Api data
    const [data, setData] = useState({ hits: [] });
    //Context values
    const [values] = useContext(GalleryContext);
     // Loading / error states
     const [isLoading, setIsLoading] = useState(false);
     const [isError, setIsError] = useState(false);
    

    
    const URL = values.uri;
    //const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(props.query)+"&image_type"+props.quantity+"editors_choice=true&colors="+props.colors;

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
          const result = await axios(
            URL,
          );
          setData(result.data);
        }catch(error){
            setIsError(true);
        }
          setIsLoading(false);
        };
        fetchData();
      }, [URL]);
     
     //console.log(data.hits)
    return (
        <div className="row">
            
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (<div>Loading ...</div>) : ( <>
      {data.hits.slice(0,values.quantity).map(img => (
        
       <Image Large={img.largeImageURL} Author={img.user} Downloads={img.downloads}/>
       
      ))}
      </>
    )}  
    
        </div>
        
    )
}

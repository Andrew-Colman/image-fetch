import React, {useState,useEffect, useContext} from 'react'

import "./PixImage.css"
import { GalleryContext } from './GalleryContext';

const axios = require('axios');

export default function PixImage(props) {
    //Api data
    const [data, setData] = useState({ hits: [] });

    const context = useContext(GalleryContext);
     // Loading / error states
     const [isLoading, setIsLoading] = useState(false);
     const [isError, setIsError] = useState(false);
    //Uri
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(context.query)+"&image_type"+context.quantity+"editors_choice=true&colors="+context;

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
            <h1>{context}</h1>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (<div>Loading ...</div>) : ( <>
      {data.hits.slice(0,context.quantity).map(img => (
        
        <div className="col-6 col-sm-3 p-3 text-center">
        <div className="card">
        <img className="m-3 img-fluid align-self-center PixImage" src={img.largeImageURL} alt="" /> 
        <div className="card-footer">
        <small>Author: <strong>{img.user}</strong></small>
        <p className="fa-sm">Downloads: {img.downloads} </p>
        <button className="btn btn-success align-self-end m-2" href={img.largeImageURL} onClick={() =>window.open(img.largeImageURL,'_blank')}><i className="fas fa-file-download" /></button>
        </div>
        </div>
        </div>
       
      ))}
      </>
    )}  
    
        </div>
        
    )
}

import React, {useState,useEffect} from 'react'

import "./PixImage.css"

const axios = require('axios');

export default function PixImage(props) {
    
    const [data, setData] = useState({ hits: [] });

     const [colors,setColors] = useState(null);
     const [image_type,setImage_type] = useState("photo");
     const [query,setQuery] = useState("query");
     const [quantity, setQuantity] = useState(12);
     const [isLoading, setIsLoading] = useState(false);
     const [isError, setIsError] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query)+"&image_type"+image_type+"editors_choice=true"+"&colors="+colors;

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
     
     console.log(data.hits)
    return (
        <div className="row">

            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (<div>Loading ...</div>) : ( <>
      {data.hits.slice(0,quantity).map(img => (
        
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

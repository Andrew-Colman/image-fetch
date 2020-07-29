import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from 'reactstrap';
import Image from './Image';
import { GalleryContext } from './GalleryContext';

const axios = require('axios');

export default function GalleryGrid() {
  // Api data
  const [data, setData] = useState({ hits: [] });
  // Context values
  const [values] = useContext(GalleryContext);
  // Loading / error states
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const URL = values.uri;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(URL);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [URL, values.quantity]);

  console.log(data.totalHits);
  console.log(URL);
  return (
    <div className="row p-2">
      {data.totalHits === 0 && (
        <div className="col text-white text-center lead"> no results...</div>
      )}
      {isError && <div className="col text-white text-center lead">Something went wrong ...</div>}
      {isLoading ? (
        <div className="m-auto fa-5x fa-pulse">
          <Spinner type="grow" color="success" />
        </div>
      ) : (
        <>
          {data.hits.slice(0, values.quantity).map((img) => (
            <Image
              key={img.largeImageURL}
              Large={img.largeImageURL}
              Author={img.user}
              Downloads={img.downloads}
            />
          ))}
        </>
      )}
    </div>
  );
}

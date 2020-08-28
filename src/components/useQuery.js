import { useState, useEffect, useContext } from 'react';
import { GalleryContext } from './GalleryContext';

const axios = require('axios');

export const useQuery = () => {
  const [values] = useContext(GalleryContext);
  const URL = values.uri;

  const [data, setData] = useState({ hits: [] });
  // Loading / error states
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
  return { values, data, isLoading, isError };
};
function Query() {
  return null;
}
export default Query;

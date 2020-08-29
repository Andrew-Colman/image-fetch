import React, { useState, createContext } from 'react';

const API_KEY =
  process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_KEY : process.env.API_KEY;

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [values, setValues] = useState({
    query: 'query',
    quantity: 12,
    imageType: 'photo',
    colors: '',
    per_page: 20,
    params: `&q=${encodeURIComponent('query')}&image_type=${'imageType'}&colors=$'{colors'}`,
    uri: `https://pixabay.com/api/?key=${API_KEY}${'params'}`,
  });

  function updateUrl(params, x) {
    setValues({
      ...values,
      uri: `https://pixabay.com/api/?key=${API_KEY}${params}`,
      quantity: x,
    });
  }

  return (
    <GalleryContext.Provider value={[values, setValues, updateUrl]}>
      {children}
    </GalleryContext.Provider>
  );
};

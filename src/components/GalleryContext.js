import React, { useState, createContext } from 'react';

const API_KEY = process.env.PIXABAY_API_KEY || process.env.REACT_APP_API_KEY;

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [values, setValues] = useState({
    query: '',
    quantity: 12,
    imageType: 'photo',
    colors: '',
    per_page: 20,
    params: '',
    uri: `https://pixabay.com/api/?key=${API_KEY}&safesearch=true`,
    storage: Object.entries({ ...localStorage }),
  });

  function updateUrl(params, quantity) {
    setValues({
      ...values,
      uri: `https://pixabay.com/api/?key=${API_KEY}${params}&safesearch=true`,
      quantity,
    });
  }

  return (
    <GalleryContext.Provider value={[values, setValues, updateUrl]}>
      {children}
    </GalleryContext.Provider>
  );
};

import React, { useState, createContext } from 'react';
import { db } from '../server';

const API_KEY = process.env.REACT_APP_API_KEY;

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [values, setValues] = useState({
    query: 'query',
    quantity: 12,
    imageType: 'photo',
    colors: '',
    per_page: 20,
    uri: `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent('query')}`,
    database: db.posts,
  });

  return <GalleryContext.Provider value={[values, setValues]}>{children}</GalleryContext.Provider>;
};

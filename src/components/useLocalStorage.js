import React, { useEffect, useState } from 'react';
import uploadImage from './utils/uploadImage';
import { GalleryContext } from './GalleryContext';

const PREFIX = 'image-fetch-';

export default function useLocalStorage(key, initialValue) {
  const [values, setValues] = React.useContext(GalleryContext);
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });

  const setTheValue = async (fromValue) => {
    try {
      const savedURL = await uploadImage(fromValue);
      console.log(`saved: ${savedURL}`);
      localStorage.setItem(prefixedKey, JSON.stringify(savedURL));
      setValues({ ...values, storage: Object.entries({ ...localStorage }) });
    } catch (error) {
      console.log(error);
    }
  };

  const getKey = (fromKey) => {
    // console.log(localStorage.key(PREFIX + fromKey));
    return localStorage.key(PREFIX + fromKey);
  };

  const removeValue = (fromKey) => {
    try {
      window.localStorage.removeItem(PREFIX + fromKey);
      setValues({ ...values, storage: Object.entries({ ...localStorage }) });
    } catch (err) {
      console.error(err);
    }
  };

  return [value, setTheValue, getKey, removeValue];
}

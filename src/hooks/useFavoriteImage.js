import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  saveFavorites,
  selectFavorites,
} from '../store/favoritesSlice';

import useToasts from './useToasts';

export default function useFavoriteImage(_Id, Large, Location) {
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(favorites.some((e) => e.id === _Id));

  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const [notify] = useToasts();

  const toggleIsFavorite = async () => {
    if (!isDisabled) {
      setIsFavorite(!isFavorite);
      setIsDisabled(true);
      if (isFavorite === false) {
        try {
          notify('Saved to your gallery', { delay: 2000 });
          const { data } = await axios.post('/api/favorite', { url: Large });

          dispatch(addFavorite(parseData(_Id, data)));
          dispatch(saveFavorites());
        } catch (error) {
          notify("Error, Can't save to your gallery", { delay: 2000 });
          setIsFavorite(false);
        }
      } else {
        dispatch(removeFavorite(_Id));
        dispatch(saveFavorites());
        notify(`Removed from your gallery`, { transition: 'flip', delay: 2000 });
      }
    }
    setIsDisabled(false);
  };

  useEffect(() => {
    if (Location === 'gallery') {
      setIsFavorite(true);
    }
  }, [Location]);

  return { isFavorite, toggleIsFavorite, isDisabled };
}

function parseData(_id, data) {
  const { image } = data.data;
  return {
    id: _id,
    image,
  };
}

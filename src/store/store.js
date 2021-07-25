import { configureStore } from '@reduxjs/toolkit';

import galleryReducer from './gallerySlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    favorites: favoritesReducer,
  },
});

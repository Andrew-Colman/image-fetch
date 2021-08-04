import { createSlice } from '@reduxjs/toolkit';

const PREFIX = 'image-fetch-favorites';
// dont want to save the entire state, just the favorites slice,

const getFavorites = () => {
  const jsonValue = localStorage.getItem(PREFIX);
  if (jsonValue !== null) return JSON.parse(jsonValue).value;
};

const initialState = {
  value: getFavorites() || [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.unshift(action.payload);
    },
    removeFavorite: (state, action) => {
      const newFavorites = state.value.filter((favorite) => favorite.id !== action.payload);
      state.value = newFavorites;
    },
    setFavorites: (state, action) => {
      return action.payload;
    },
    saveFavorites: (state) => {
      localStorage.setItem(PREFIX, JSON.stringify(state));
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites, saveFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.value;

export default favoritesSlice.reducer;

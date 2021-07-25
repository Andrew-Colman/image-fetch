import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { store } from './store';

// First, create the thunk
export const getImages = createAsyncThunk('gallery/getImages', async (query) => {
  const { data } = await axios.post('/api/query', {
    query: query.query,
    imageType: query.imageType,
    colors: query.colors,
  });

  return data;
});

//get initial images
const fetchData = async () => {
  try {
    const { data } = await axios.post('/api/query', {});

    store.dispatch(set({ images: data, number: 1, status: 'success' }));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  images: fetchData() || [],
  status: 'pending',
  currentRequestId: undefined,
  number: 0,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    add: (state, action) => {
      state.images.push({ name: action.payload });
    },
    remove: (state, action) => {
      state.images.splice(action.payload.id, 1);
    },
    set: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getImages.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(getImages.fulfilled, (state, { meta, payload }) => {
      const { requestId } = meta;

      state.status = 'success';
      state.images = payload;
      state.number++;
    });
    builder.addCase(getImages.rejected, (state, { payload }) => {
      state.status = 'error';
    });
  },
});

export const { add, remove, set } = gallerySlice.actions;

export const selectGallery = (state) => state.gallery;

export default gallerySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

/**
 * @todo  Featured page (editor's choice)
 * todo : [wip]
 */

export const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push({ name: action.payload });
    },
    remove: (state, action) => {
      state.value.splice(action.payload.id, 1);
    },
    set: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, remove, set } = featuredSlice.actions;

export const selectFeatured = (state) => state.featured.value;

export default featuredSlice.reducer;

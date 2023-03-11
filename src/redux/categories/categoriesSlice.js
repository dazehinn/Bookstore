import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArray: [],
};

export const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categoriesArray.push('Under Construction');
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

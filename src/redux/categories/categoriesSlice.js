import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArray: [],
};

export const categorieSlice = createSlice({
  name: 'Categorie',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categoriesArray.push('Under Construction');
    },
  },
});

export const { checkStatus } = categorieSlice.actions;

export default categorieSlice.reducer;

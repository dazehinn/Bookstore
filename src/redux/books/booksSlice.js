import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArray: [],
};

export const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      const aux = state.booksArray.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        booksArray: aux,
      };
    },
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;

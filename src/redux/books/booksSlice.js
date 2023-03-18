import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../bookList';

const initialState = {
  booksArray: bookList,
};

export const bookSlice = createSlice({
  name: 'Book',
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
} = bookSlice.actions;

export default bookSlice.reducer;

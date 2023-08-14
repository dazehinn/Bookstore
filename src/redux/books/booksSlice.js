import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  bookArray: null,
  isLoading: false,
  error: null,
  message: '',
};

export const fetchGetBooks = createAsyncThunk('get/Books', async () => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gaCDn1oGS1nyqaeyogKu/books';
  const response = await fetch(url);
  return response.json();
});

export const fetchPostBook = createAsyncThunk('post/Books', async (obj) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gaCDn1oGS1nyqaeyogKu/books';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:
      JSON.stringify(
        obj,
      ),
  });
  return JSON.stringify(response);
});

export const fetchDeleteBooks = createAsyncThunk('get/Delete_Books', async (id) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gaCDn1oGS1nyqaeyogKu/books/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return JSON.stringify(response);
});

export const bookSlice = createSlice({
  name: 'Book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetBooks.pending, (state) => (
      {
        ...state,
        isLoading: true,
      }
    ));

    builder.addCase(fetchGetBooks.fulfilled, (state, action) => (
      {
        ...state,
        isLoading: false,
        bookArray: action.payload,
      }
    ));

    builder.addCase(fetchGetBooks.rejected, (state, action) => (
      {
        ...state,
        error: action.error.message,
        isLoading: false,
      }
    ));

    builder.addCase(fetchPostBook.pending, (state) => (
      {
        ...state,
        isLoading: true,
      }
    ));

    builder.addCase(fetchPostBook.fulfilled, (state) => (
      {
        ...state,
        isLoading: false,
        message: 'created',
      }
    ));

    builder.addCase(fetchPostBook.rejected, (state, action) => (
      {
        ...state,
        error: action.error.message,
        isLoading: false,
      }
    ));

    builder.addCase(fetchDeleteBooks.pending, (state) => (
      {
        ...state,
        isLoading: true,
      }
    ));

    builder.addCase(fetchDeleteBooks.fulfilled, (state) => (
      {
        ...state,
        isLoading: false,
      }
    ));

    builder.addCase(fetchDeleteBooks.rejected, (state, action) => (
      {
        ...state,
        error: action.error.message,
        isLoading: false,
      }
    ));
  },
});

export default bookSlice.reducer;
export const { update } = bookSlice.actions;

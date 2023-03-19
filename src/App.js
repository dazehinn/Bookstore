import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetBooks } from './redux/books/booksSlice';
import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.book);

  useEffect(() => {
    if (!state.bookArray) {
      dispatch(fetchGetBooks());
    }
  }, [state.bookArray, dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Books />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

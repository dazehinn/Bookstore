import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
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

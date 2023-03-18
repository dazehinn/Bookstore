import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const bookArray = useSelector((state) => state.book.booksArray);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const obj = {
      id: (bookArray.length + 1).toString(),
      title,
      author,
    };
    dispatch(addBook(obj));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;

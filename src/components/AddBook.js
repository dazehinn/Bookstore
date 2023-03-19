import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchGetBooks, fetchPostBook } from '../redux/books/booksSlice';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const obj = {
      item_id: (`item${uuidv4()}`),
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      category: 'fiction',
    };
    dispatch(fetchPostBook(obj)).then(() => dispatch(fetchGetBooks()));

    e.target.elements.title.value = '';
    e.target.elements.author.value = '';
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleAddBook} className={style.form}>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBook;

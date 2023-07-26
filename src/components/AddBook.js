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
    <div className={style.formContainer}>
      <h2 className={style.addBookTitle}>ADD NEW BOOK</h2>
      <form onSubmit={handleAddBook} className={style.form}>
        <input className={style.inputText1} type="text" name="title" placeholder="Book Title" />
        <input className={style.inputText2} type="text" name="author" placeholder="Author" />
        <input className={style.btn} type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBook;

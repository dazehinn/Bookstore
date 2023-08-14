import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import Book from './Book';
import { fetchGetBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetBooks());
  }, [dispatch]);

  const state = useSelector((state) => state.book);

  if (!state.bookArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={style.sectionBooks}>
      <ul className={style.ul}>
        {Object.entries(state.bookArray).map(([key]) => (
          <Book
            key={uuidv4()}
            id={key}
            title={state.bookArray[key][0].title}
            author={state.bookArray[key][0].author}
            category={state.bookArray[key][0].category}
          />
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default BookList;

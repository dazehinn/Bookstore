import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import Book from './Book';
import style from './Books.module.css';

const BookList = () => {
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

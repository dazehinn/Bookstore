import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const BookList = () => {
  const bookArray = useSelector((state) => state.book.booksArray);

  return (
    <section className="bookList">
      <ul>
        {bookArray.map((elem) => (
          <li key={elem.title}>
            <Book id={elem.id} title={elem.title} author={elem.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default BookList;

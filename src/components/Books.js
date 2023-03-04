import { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  // eslint-disable-next-line no-unused-vars
  const [bookArray, setBookArray] = useState(
    [
      {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
      },
      {
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
      },
    ],
  );

  return (
    <section className="bookList">
      <ul>
        {bookArray.map((elem) => (
          <li key={elem.title}>
            <Book title={elem.title} author={elem.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default BookList;

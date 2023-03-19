import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBooks, fetchGetBooks } from '../redux/books/booksSlice';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(fetchDeleteBooks(id)).then(() => dispatch(fetchGetBooks()));
  };

  return (
    <li>
      <div>
        <p>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
        <p>
          {title}
        </p>
        <p>
          {author}
        </p>
        <button onClick={() => handleDeleteBook(id)} type="button">Remove</button>
      </div>
    </li>
  );
};

Book.defaultProps = {
  id: '', author: '', title: '', category: '',
};
Book.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Book;

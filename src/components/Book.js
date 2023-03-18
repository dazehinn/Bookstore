import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const { id, author, title } = props;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={() => handleRemove(id)} type="button">Remove</button>
    </div>
  );
};

Book.defaultProps = { id: '', author: '', title: '' };
Book.propTypes = { id: PropTypes.string, author: PropTypes.string, title: PropTypes.string };

export default Book;

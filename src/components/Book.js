import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBooks, fetchGetBooks } from '../redux/books/booksSlice';
import style from './Book.module.css';
import loading from '../assets/images/loading.png';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(fetchDeleteBooks(id)).then(() => dispatch(fetchGetBooks()));
  };

  return (
    <li className={style.li}>
      <div className={style.bookContainer}>
        <p className={style.category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
        <p className={style.title}>
          {title}
        </p>
        <p className={style.author}>
          {author}
        </p>
        <button className={style.button} type="button">Comments</button>
        <button onClick={() => handleDeleteBook(id)} className={`${style.button} ${style.buttonmiddle}`} type="button">Remove</button>
        <button className={style.button} type="button">Edit</button>
      </div>
      <div className={style.PercentageContainer}>
        <img className={style.imgPercentage} src={loading} alt="" />
        <div className={style.PercentageContainer2}>
          <p className={style.percentageNumber}>65%</p>
          <p className={style.percentageText}>Completed</p>
        </div>
      </div>
      <div className={style.chapterContainer}>
        <p className={style.currentChapter}>CURRENT CHAPTER</p>
        <p className={style.chapter}>Chapter 17</p>
        <button className={style.btnChapter} type="button"><span className={style.btnChapterText}>UPDATE PROGRESS</span></button>
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

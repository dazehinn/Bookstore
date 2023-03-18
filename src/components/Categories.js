import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categoriesArray = useSelector((state) => state.categorie.categoriesArray);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories">
      <button onClick={handleCheckStatus} type="button">Check status</button>
      {categoriesArray.length > 0 ? <p>{categoriesArray[0]}</p> : <p> </p>}
    </section>
  );
};

export default Categories;

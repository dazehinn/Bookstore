import { Link } from 'react-router-dom';
import style from './Header.module.css';
import user from '../assets/images/user.png';

const Header = () => (

  <div className={style.header}>
    <nav className={style.nav}>
      <ul className={style.ul}>
        <div>
          <li><Link to="/"><span className={style.bookstoreCMS}>Bookstore CMS</span></Link></li>
        </div>
        <li className={style.link}><Link to="/books">BOOKS</Link></li>
        <li className={style.link}><Link to="/categories">CATEGORIES</Link></li>
        <li className={style.liUser}><img className={style.img} src={user} alt="" /></li>

      </ul>
    </nav>
  </div>
);

export default Header;

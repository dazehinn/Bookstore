import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <ul>
        <div>
          <li><Link to="/"><span>Bookstore CMS</span></Link></li>
        </div>
        <li><Link to="/books">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;

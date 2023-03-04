import { Link } from 'react-router-dom';

const Header = () => (

  <div className="header">
    <nav>
      <ul>
        <li><Link to="/"><span className="logo">Bookstore CMS</span></Link></li>
        <li><Link to="/books">books</Link></li>
        <li><Link to="/categories">Categories</Link></li>

      </ul>
    </nav>
  </div>
);

export default Header;

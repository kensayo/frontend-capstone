import '../App.css';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="cont">
      <div className="navigation">
        <input type="checkbox" className="toggle-menu" />
        <div className="hamburger" />
        <div className="logo">
          <div>
            <p>
              dofjafkhasfjkdgfjkasfgakjasgfkashfgak
            </p>
          </div>
        </div>
        <ul className="menu">
          <li><Link to="/fav" className="navLink">Favorites</Link></li>
          <li><Link to="/login" className="navLink">Login</Link></li>
          <li><Link to="/signup" className="navLink">Signup</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;

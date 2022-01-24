import '../App.css';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="cont mt-2 mb-2">
      <div className="navigation">
        <input type="checkbox" className="toggle-menu" />
        <div className="hamburger" />
        <ul className="menu">
          <li>
            <div className="logo">
              <div>
                <p>
                  dofjafkhasfjkdgfjkasfgakjasgfkashfgak
                </p>
              </div>
            </div>
          </li>
          <li><Link to="/fav" className="navLink">Favorites</Link></li>
          <li><Link to="/login" className="navLink">Login</Link></li>
          <li><Link to="/signup" className="navLink">Signup</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;

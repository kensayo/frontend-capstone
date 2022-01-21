import '../App.css';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <button className="hamburger is-active" type="button" onClick={handleClick()}>
        <div className="bar" />
      </button>
      <nav className="is-active">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/fav" className="navLink">Favorites</Link>
        <Link to="/login" className="navLink">Login</Link>
        <Link to="/signup" className="navLink">Signup</Link>
      </nav>
    </div>
  );
};

export default Navbar;

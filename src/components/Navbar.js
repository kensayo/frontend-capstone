import React, { useState } from 'react';
import '../App.css';
import './assets/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="cont">
        <div className="navigation">
          <input
            type="checkbox"
            className="toggle-menu"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div className="hamburger" />
          <ul className="menu">
            <li>
              <div className="logo">
                <div>
                  <p />
                </div>
              </div>
            </li>
            <li><Link to="/" className="navLink" onClick={() => setChecked((c) => !c)}>Home</Link></li>
            <li><Link to="/fav" className="navLink" onClick={() => setChecked((c) => !c)}>Favorites</Link></li>
            <li><Link to="/login" className="navLink" onClick={() => setChecked((c) => !c)}>Login</Link></li>
            <li><Link to="/signup" className="navLink" onClick={() => setChecked((c) => !c)}>Signup</Link></li>
            <li><Link to="/new" className="navLink" onClick={() => setChecked((c) => !c)}>New</Link></li>
            <li><Link to="/delete" className="navLink" onClick={() => setChecked((c) => !c)}>Delete</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

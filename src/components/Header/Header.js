import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Directory</NavLink>
        <NavLink to="/" className="nav-link">Restaurants</NavLink>
        <NavLink to="/search" className="nav-link">Search</NavLink>
        <NavLink to="/new" className="nav-link">New</NavLink>
      </div>
    </nav>
  );
};

export default Header;
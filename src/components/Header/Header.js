import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/" className="nav-link">Restaurantes</NavLink>
        <NavLink to="/search" className="nav-link">Buscar</NavLink>
        <NavLink to="/new" className="nav-link">Nuevo</NavLink>
      </div>
    </nav>
  );
};

export default Header;
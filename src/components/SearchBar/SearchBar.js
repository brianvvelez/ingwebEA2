import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Escribe aqyin tu búsqueda"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
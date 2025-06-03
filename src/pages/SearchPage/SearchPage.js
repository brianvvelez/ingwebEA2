import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import './SearchPage.css';

const SearchPage = ({ restaurants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setResults(filteredRestaurants);
    setSearched(true);
  };

  return (
    <div className="search-page">
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        onSearch={handleSearch} 
      />
      
      <div className="search-results">
        {searched && results.length === 0 ? (
          <p className="no-results">No se encontraron restaurantes con ese nombre.</p>
        ) : (
          results.map(restaurant => (
            <div key={restaurant.id} className="search-result-item">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
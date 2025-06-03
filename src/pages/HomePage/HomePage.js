import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import './HomePage.css';

const HomePage = ({ restaurants }) => {
  return (
    <div className="home-page">
      <div className="restaurant-grid">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-grid-item">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
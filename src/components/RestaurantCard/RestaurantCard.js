import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p className="restaurant-address">{restaurant.address}</p>
        <p className="restaurant-description">{restaurant.description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
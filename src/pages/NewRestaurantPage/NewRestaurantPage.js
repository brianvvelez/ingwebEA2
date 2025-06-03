import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import './NewRestaurantPage.css';

const NewRestaurantPage = ({ onAddRestaurant }) => {
  const navigate = useNavigate();

  const handleSave = (newRestaurant) => {
    onAddRestaurant(newRestaurant);
    navigate('/'); 
  };

  return (
    <div className="new-restaurant-page">
      <h2>Nuevo Restaurante</h2>
      <RestaurantForm onSave={handleSave} />
    </div>
  );
};

export default NewRestaurantPage;
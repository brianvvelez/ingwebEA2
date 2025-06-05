import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import './NewRestaurantPage.css';

const NewRestaurantPage = ({ onAddRestaurant }) => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async (newRestaurant) => {
    try {
      setSaving(true);
      setError(null);
      
      // Llamar a la función que maneja Firebase
      await onAddRestaurant(newRestaurant);
      
      // Navegar de vuelta al inicio
      navigate('/'); 
      
    } catch (err) {
      console.error('Error guardando restaurante:', err);
      setError('Error al guardar el restaurante. Por favor intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="new-restaurant-page">
      <h2>Nuevo Restaurante</h2>
      
      {/* Mostrar errores si los hay */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {/* Mostrar estado de guardado */}
      {saving && (
        <div className="alert alert-info" role="alert">
          <div className="d-flex align-items-center">
            <div className="spinner-border spinner-border-sm me-2" role="status">
              <span className="visually-hidden">Guardando...</span>
            </div>
            Guardando restaurante...
          </div>
        </div>
      )}
      
      <RestaurantForm 
        onSave={handleSave} 
        disabled={saving}
      />
    </div>
  );
};

export default NewRestaurantPage;
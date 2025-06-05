import React, { useState } from 'react';
import './RestaurantForm.css';

const RestaurantForm = ({ onSave, disabled = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await onSave({
        ...formData,
        id: Date.now() // Firebase crea el id
      });
      
      // Reset form solo si el guardado fue exitoso
      setFormData({
        name: '',
        description: '',
        address: '',
        image: ''
      });
    } catch (error) {
      // No reseteamos el form si hubo error
      console.error('Error en el formulario:', error);
    }
  };

  return (
    <form className="restaurant-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={disabled}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={disabled}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={disabled}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="image">Imagen URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          disabled={disabled}
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="save-button"
        disabled={disabled}
      >
        {disabled ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  );
};

export default RestaurantForm;
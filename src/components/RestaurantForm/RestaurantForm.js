import React, { useState } from 'react';
import './RestaurantForm.css';

const RestaurantForm = ({ onSave }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: Date.now()
    });
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      address: '',
      image: ''
    });
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
          required
        />
      </div>
      
      <button type="submit" className="save-button">Guardar</button>
    </form>
  );
};

export default RestaurantForm;
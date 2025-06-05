import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import NewRestaurantPage from './pages/NewRestaurantPage/NewRestaurantPage';
import { getAllRestaurants, addRestaurant } from './firebaseService';
import initialRestaurants from './data/restaurants';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar restaurantes desde Firebase
  const loadRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const restaurantsFromFirebase = await getAllRestaurants();
      
      // Si no hay restaurantes en Firebase, migrar los datos iniciales
      if (restaurantsFromFirebase.length === 0) {
        console.log('No hay restaurantes en Firebase. Migrando datos iniciales...');
        
        // Migrar datos iniciales a Firebase
        for (const restaurant of initialRestaurants) {
          await addRestaurant({
            name: restaurant.name,
            description: restaurant.description,
            address: restaurant.address,
            image: restaurant.image
          });
        }
        
        // Volver a cargar después de la migración
        const migratedRestaurants = await getAllRestaurants();
        setRestaurants(migratedRestaurants);
        console.log('Migración completada!');
      } else {
        setRestaurants(restaurantsFromFirebase);
      }
      
    } catch (err) {
      console.error('Error cargando restaurantes:', err);
      setError('Error al cargar los restaurantes');
      // En caso de error, usar datos locales como respaldo
      setRestaurants(initialRestaurants);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar un nuevo restaurante
  const handleAddRestaurant = async (newRestaurant) => {
    try {
      setError(null);
      
      // Agregar a Firebase
      const addedRestaurant = await addRestaurant(newRestaurant);
      
      // Actualizar el estado local
      setRestaurants(prevRestaurants => [...prevRestaurants, addedRestaurant]);
      
      return addedRestaurant;
    } catch (err) {
      console.error('Error agregando restaurante:', err);
      setError('Error al agregar el restaurante');
      throw err;
    }
  };

  // Cargar restaurantes al iniciar la aplicación
  useEffect(() => {
    loadRestaurants();
  }, []);

  // Componente de loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando restaurantes...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Header />
        
        {/* Mostrar errores si los hay */}
        {error && (
          <div className="alert alert-warning alert-dismissible fade show m-3" role="alert">
            {error}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setError(null)}
            ></button>
          </div>
        )}
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage restaurants={restaurants} />} 
            />
            <Route 
              path="/search" 
              element={<SearchPage restaurants={restaurants} />} 
            />
            <Route 
              path="/new" 
              element={
                <NewRestaurantPage 
                  onAddRestaurant={handleAddRestaurant} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
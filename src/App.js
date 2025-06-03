import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import NewRestaurantPage from './pages/NewRestaurantPage/NewRestaurantPage';
import initialRestaurants from './data/restaurants';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage restaurants={restaurants} />} />
            <Route path="/search" element={<SearchPage restaurants={restaurants} />} />
            <Route path="/new" element={<NewRestaurantPage onAddRestaurant={handleAddRestaurant} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
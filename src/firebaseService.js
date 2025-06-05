import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'restaurants';

// Obtener todos los restaurantes
export const getAllRestaurants = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, COLLECTION_NAME), orderBy('name'))
    );
    
    const restaurants = [];
    querySnapshot.forEach((doc) => {
      restaurants.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return restaurants;
  } catch (error) {
    console.error('Error obteniendo restaurantes:', error);
    throw error;
  }
};

// Agregar un nuevo restaurante
export const addRestaurant = async (restaurantData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      name: restaurantData.name,
      description: restaurantData.description,
      address: restaurantData.address,
      image: restaurantData.image,
      createdAt: new Date()
    });
    
    return {
      id: docRef.id,
      ...restaurantData
    };
  } catch (error) {
    console.error('Error agregando restaurante:', error);
    throw error;
  }
};

// Buscar restaurantes por nombre
export const searchRestaurantsByName = async (searchTerm) => {
  try {

    const allRestaurants = await getAllRestaurants();
    
    return allRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error('Error buscando restaurantes:', error);
    throw error;
  }
};
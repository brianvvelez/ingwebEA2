import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDamgs0jOMNkouHmee2Ak8OOfYJGS2_XSI",
  authDomain: "directorio-restaurantes-4b768.firebaseapp.com",
  projectId: "directorio-restaurantes-4b768",
  storageBucket: "directorio-restaurantes-4b768.firebasestorage.app",
  messagingSenderId: "1057689006612",
  appId: "1:1057689006612:web:232521491e9f84fd096d01"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

export default app;

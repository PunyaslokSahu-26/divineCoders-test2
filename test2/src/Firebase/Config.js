import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";         

const firebaseConfig = {
  apiKey: "AIzaSyDVTU-iiSr4ouYWC705_07atg4XR-YhGAg",
  authDomain: "divine-coders.firebaseapp.com",
  projectId: "divine-coders",
  storageBucket: "divine-coders.firebasestorage.app",
  messagingSenderId: "130501908136",
  appId: "1:130501908136:web:607c9c3490fe0fc154549d",
  measurementId: "G-41YQ7S36LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
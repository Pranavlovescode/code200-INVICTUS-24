import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzgJ-DfJq8-n5clWqQzBnOfUMRM2nSjr8",
    authDomain: "e-commerce-ec21e.firebaseapp.com",
    projectId: "e-commerce-ec21e",
    storageBucket: "e-commerce-ec21e.appspot.com",
    messagingSenderId: "885367687761",
    appId: "1:885367687761:web:e1896d5ca8e8e98b718670"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
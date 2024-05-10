// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5cGg8SC8slS96bjMaTUW-ho4tVA1lJoM",
  authDomain: "react-cursos-71ca0.firebaseapp.com",
  projectId: "react-cursos-71ca0",
  storageBucket: "react-cursos-71ca0.appspot.com",
  messagingSenderId: "60370378559",
  appId: "1:60370378559:web:bb8f9bd5f400f25a7efd8a",
  measurementId: "G-D2KM2D0Z88",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore();
//const analytics = getAnalytics(app);

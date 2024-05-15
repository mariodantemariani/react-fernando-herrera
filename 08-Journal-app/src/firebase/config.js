// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// console.log(process.env);
// console.log( import.meta.env );

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
// apiKey: "AIzaSyC9qM8LKYti4TZus0g00ISzMjudet-H2vg",
// authDomain: "react-cursos-4368a.firebaseapp.com",
// projectId: "react-cursos-4368a",
// storageBucket: "react-cursos-4368a.appspot.com",
// messagingSenderId: "35683178704",
// appId: "1:35683178704:web:2cab2003319bbac2eba6d5"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDyLJugXH7YFgmHb-rMLYlxT1YwtkgYR7E",
//   authDomain: "tracker-8f49f.firebaseapp.com",
//   databaseURL: "https://tracker-8f49f.firebaseio.com",
//   projectId: "tracker-8f49f",
//   storageBucket: "tracker-8f49f.appspot.com",
//   messagingSenderId: "145943821416",
//   appId: "1:145943821416:web:12e973eaa8b630a444cfdd"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

//mio
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import * as firebase from "firebase/firestore/lite";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5cGg8SC8slS96bjMaTUW-ho4tVA1lJoM",
//   authDomain: "react-cursos-71ca0.firebaseapp.com",
//   projectId: "react-cursos-71ca0",
//   storageBucket: "react-cursos-71ca0.appspot.com",
//   messagingSenderId: "60370378559",
//   appId: "1:60370378559:web:bb8f9bd5f400f25a7efd8a",
//   measurementId: "G-D2KM2D0Z88",
// };

// // Initialize Firebase
// export const FirebaseApp = initializeApp(firebaseConfig);
// export const FirebaseAuth = getAuth(FirebaseApp);
// export const FirebaseDB = getFirestore();
// //const analytics = getAnalytics(app);

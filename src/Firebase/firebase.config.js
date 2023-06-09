// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChAb4zWvO9fxCsVvJBGxxEFXRLM9yIOO4",
  authDomain: "hotel-baratie.firebaseapp.com",
  projectId: "hotel-baratie",
  storageBucket: "hotel-baratie.appspot.com",
  messagingSenderId: "466298595445",
  appId: "1:466298595445:web:eb18b2e920cf03bc01303c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
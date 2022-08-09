// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEg_3izbenURfCgnlFNTxl9Bv5gsvFjFM",
  authDomain: "doubleespresso2022.firebaseapp.com",
  projectId: "doubleespresso2022",
  storageBucket: "doubleespresso2022.appspot.com",
  messagingSenderId: "685340358724",
  appId: "1:685340358724:web:1ac33a0d98c1c680aee411",
  measurementId: "G-QW27WE1RB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
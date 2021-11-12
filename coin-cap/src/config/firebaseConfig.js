// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0OHoi9qz52t0PneLPQLgIeLH3cdJjjuw",
  authDomain: "coincap-37179.firebaseapp.com",
  projectId: "coincap-37179",
  storageBucket: "coincap-37179.appspot.com",
  messagingSenderId: "17318861434",
  appId: "1:17318861434:web:22d764d360b3ec67aff9c3",
  measurementId: "G-XBX1H7KCLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


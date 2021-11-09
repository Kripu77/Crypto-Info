//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYLR7tdpcGjWCQ8RPFOE6uFzHmr0fboXA",
  authDomain: "searchauth-175a0.firebaseapp.com",
  projectId: "searchauth-175a0",
  storageBucket: "searchauth-175a0.appspot.com",
  messagingSenderId: "815448352466",
  appId: "1:815448352466:web:ea5f84ca013a2e086f2f0b",
  measurementId: "G-GSFB16D31K",
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app

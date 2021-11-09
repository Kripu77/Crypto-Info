//firebase
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

//our webapp's configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtkNgfq2Odl8TkcUlTMUmAKDMCIKpMaCw",
  authDomain: "newauth-d0bab.firebaseapp.com",
  projectId: "newauth-d0bab",
  storageBucket: "newauth-d0bab.appspot.com",
  messagingSenderId: "333989288075",
  appId: "1:333989288075:web:6f75c07c9baecf700c9c8e",
  measurementId: "G-6YV0LQDFMW",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app

import React, {useContext} from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
const logInContextProvider = React.createContext();
//from firebase



const LoginInContext = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const[error, setError] = React.useState(false);
    const [loading, setLoading] =React.useState(true);


    //fn createuser
   function signUp(email, password){
       return createUserWithEmailAndPassword(auth, email, password)
   }

   //fn login

 function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password);
 }
//sign out function

function logOut(){
    return signOut(auth)
}


//sign in with google
function google(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}
function github(){
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider)
}

//to monitor only once
React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

//error toggler
function errorFnT(){
    return setError(true)
}
function errorFnF(){
    return setError(false)
}
    return (
        <div>
            <logInContextProvider.Provider value={{currentUser, google, github, logOut, login, signUp, signOut,error, errorFnF, errorFnT}}> 
                {children}
            </logInContextProvider.Provider>
        </div>
    )
}


//setup custom hook

export const useLoginContext = ()=>{
    return useContext(logInContextProvider)
}
export default LoginInContext

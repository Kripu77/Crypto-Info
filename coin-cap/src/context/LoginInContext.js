import React, {useContext} from 'react'
import axios from 'axios'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendSignInLinkToEmail,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
const url = "https://api.coingecko.com/api/v3/coins/";
const logInContextProvider = React.createContext();
//from firebase



const LoginInContext = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const[error, setError] = React.useState(false);
    const [loading, setLoading] =React.useState(true);
    const[ data, setData] = React.useState([1,2,3,4]);
    const [search, setSearch] = React.useState([]);

//fetch data from coincap api

const fetchData= ()=>{
    axios.get(`${url}/${search}`)
    .then((res)=>{setData(res.data)
    setLoading(false)})
}

//useEffect
React.useEffect(()=>{
    fetchData()
},[search])






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
//sign in verfication email

//to monitor only once when user is there or not //sign in sign out function
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
        <logInContextProvider.Provider
          value={{
            currentUser,
            google,
            github,
            logOut,
            login,
            signUp,
            signOut,
            error,
            errorFnF,
            errorFnT,
            sendEmailVerification,
            search, setSearch,
            data, loading
          }}
        >
          {children}
        </logInContextProvider.Provider>
      </div>
    );
}


//setup custom hook

export const useLoginContext = ()=>{
    return useContext(logInContextProvider)
}
export default LoginInContext

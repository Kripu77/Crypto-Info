import React, {useContext,useState, useEffect} from 'react';

//import auth module
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../Config/firebaseConfig';
import useFetch from './useFetch';

//createcontext
const userContext = React.createContext();
const url = "https://api.github.com/users";

//export context

export const Logincontext = ({ Children }) => {
  const [user, setUser] = useState(null); //has to  be null to check if the user is authenticated
const [search, setSearch] = useState("");
  //fn for signup

  //custom fetch hook

const {error, loading, apiData}= useFetch(`${url}/${search}`)
 console.log(apiData);


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //function for login


  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //fn for signout
  function logOut() {
    return signOut(auth);
  }

  //fn google signin

  function signInWithGoogle(){
const provider = new GoogleAuthProvider()
return signInWithPopup(auth, provider)
  }
  
  //facebook auth
  function signInWithFaceBoook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }

  //fn for github auth

  function signInWithGit(){
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  // useEffect to monitor to only runs once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <userContext.Provider
        value={{ user, setUser, signup, login, user, logOut, signInWithGoogle, signInWithFaceBoook, signInWithGit, search, setSearch, apiData }}
      >
        {Children}
      </userContext.Provider>
    </div>
  );
};


//cutsom hook 

export const useLoginContext = ()=>{
    return useContext(userContext);
}


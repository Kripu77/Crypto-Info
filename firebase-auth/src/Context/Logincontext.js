import React, {useContext,useState, useEffect} from 'react';

//import auth module
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../Config/firebaseConfig';

//createcontext
const userContext = React.createContext();


//export context

export const Logincontext = ({ Children }) => {
  const [user, setUser] = useState(null); //has to  be null to check if the user is authenticated

  //fn for signup

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
        value={{ user, setUser, signup, login, user, logOut, signInWithGoogle, signInWithFaceBoook }}
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


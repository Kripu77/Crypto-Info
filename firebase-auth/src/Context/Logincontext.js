import React, {useContext,useState, useEffect} from 'react';

//import auth module
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebaseConfig';

//createcontext
const userContext = React.createContext();


//export context

export const Logincontext = ({ Children }) => {
  const [user, setUser] = useState(null); //has to  be null to check if the user is authenticated

//fn for signup

function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}


//function for login 

function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}
//useEffect to monitor to only runs once

// useEffect(() => {
//   const unsubscribe= auth.onAuthStateChanged((user) => {
//      setUser(user);
//    });

//    return unsubscribe;
// }, [])

  return (
    <div>
      <userContext.Provider value={{user, setUser, signup, login}}>{Children}</userContext.Provider>
    </div>
  );
};


//cutsom hook 

export const useLoginContext = ()=>{
    return useContext(userContext);
}


import React, {useContext,useState} from 'react';
import { Children } from 'react/cjs/react.production.min';


const userContext = React.createContext();
export const Logincontext = ({ Children }) => {
  const [user, setUser] = useState(null); //has to  be null to check if the user is authenticated
  return (
    <div>
      <userContext.Provider value={{user, setUser}}>{Children}</userContext.Provider>
    </div>
  );
};


//cutsom hook 

export const useLoginContext = ()=>{
    return useContext(userContext);
}


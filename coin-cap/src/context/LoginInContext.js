import React, {useContext} from 'react'

const logInContextProvider = React.createContext();

const LoginInContext = ({children}) => {
    return (
        <div>
            <logInContextProvider.Provider value={"test"}> 
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

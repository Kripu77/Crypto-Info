import React from 'react'
import { useLoginContext } from '../Context/Logincontext'
const SignUp = () => {
    console.log(useLoginContext())
    return (
        <div>
         <h1> Sign Up Page</h1>   
        </div>
    )
}

export default SignUp

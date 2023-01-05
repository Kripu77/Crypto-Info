import React from 'react'
import { useLoginContext } from '../Context/Logincontext'
import Form from './Form'

const SignIn = () => {
    const{signInWithGoogle} = useLoginContext();
    return (
        <div>
           <Form/>
          
        </div>
    )
}

export default SignIn

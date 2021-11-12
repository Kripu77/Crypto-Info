import React from 'react'
import { useLoginContext } from '../context/LoginInContext'

const Home = () => {
    const {currentUser} = useLoginContext();
    console.log(currentUser)
  

    return (
        <div>
            <h1> Hello  </h1>
        </div>
    )
}

export default Home

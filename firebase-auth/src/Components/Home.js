import React from 'react'
import { useLoginContext } from '../Context/Logincontext'

const Home = () => {
    const {user} = useLoginContext();
    return (
        <section>
            <h1> I am a homepage </h1>
            <p>{JSON.stringify(user)}</p>
        </section>
    )
}

export default Home

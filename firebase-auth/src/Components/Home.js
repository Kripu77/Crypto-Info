import React from 'react'
import { useLoginContext } from '../Context/Logincontext'

const Home = () => {
    const {user} = useLoginContext();
    return (
      <section style={{ color: "white" }}>
        <h1> I am a homepage </h1>
        <p>{JSON.stringify(user)}</p>
        <h2>
          {" "}
          App created using firebase to handle user auth for the backend work.
        </h2>
      </section>
    );
}

export default Home

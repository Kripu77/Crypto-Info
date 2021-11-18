import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
      <section>
      <Link to="/home" > <h1 className="text-center "> 
    
          Crypto<span className="text-yellow-300">Info</span>
        </h1> </Link>
      </section>
    );
}

export default Logo

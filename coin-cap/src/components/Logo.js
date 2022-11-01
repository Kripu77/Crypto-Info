import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
      <section>
      <Link to="/home" > <h1 className="text-center text-2xl "> 
    
          Digi-<span className="text-yellow-300">Marpha</span>
        </h1> </Link>
      </section>
    );
}

export default Logo

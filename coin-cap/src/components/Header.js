import React from 'react'
import Logo from './Logo';
import Nav from './Nav';
import { motion } from 'framer-motion';
//framer component
const Header = () => {
 
    return (
      <main className="bg-purple-600 text-white p-3 text-lg sticky top-0 z-10 ">
       <Logo/>
        <Nav />
      </main>
    );
}

export default Header

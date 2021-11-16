import React from 'react'
import Logo from './Logo';
import Nav from './Nav'

const Header = () => {
    return (
      <main className="bg-purple-600 text-white p-2 text-2xl">
       <Logo/>
        <Nav />
      </main>
    );
}

export default Header

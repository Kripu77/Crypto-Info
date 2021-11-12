import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
      <main className="bg-purple-600 text-white p-2 text-2xl">
        <h1 className="text-center "> Crytpo<span className="text-yellow-300">Info</span></h1>
        <Nav />
      </main>
    );
}

export default Header

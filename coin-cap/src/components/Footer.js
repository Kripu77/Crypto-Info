import React from 'react'
import Links from './Links';

const Footer = () => {
    return (
      <footer className="bg-purple-600 text-white p-2 text-xl ">
        <h1 className="text-center text-2xl">
          {" "}
          Crypto<span className="text-yellow-200">Info</span>
        </h1>
        <section className="flex justify-around mt-3  ml-auto mr-auto max-w-screen-2xl">
          <section>
            <h1> Tech Stack Used</h1>
            <ol>
              <li> HTML5</li>
              <li> TaiwindCSS with JIT</li>
              <li> React JS with Hooks</li>
              <li> Firebase For Authentication</li>
              <li> CoinCap API</li>
            </ol>
          </section>

          <section>
            <h1> Connect with me Around the Web</h1>
            <section className="flex">
              <Links />
            </section>
          </section>

          <section>
            <h1> Designed and Developed By Kripu Khadka @ 2021.</h1>
            <h1> Feel free to copy anything that you find useful.</h1>
            <h2> If you require any additional help please ping me!!!!</h2>
          </section>
        </section>
      </footer>
    );
}

export default Footer

import React from 'react'
import Header from './Header';

const Error = () => {
    return (
      <main>
         
        <main className="flex justify-around mt-20 mb-40">
          <h1 className="text-red-600 max-w-xl">
            {" "}
            Unfortunately the page that you are looking for does not exist or,
            may be broken at the moment.
          </h1>
          <img src="https://tse2.mm.bing.net/th?id=OIP.vQJlL9ExOkJAf93yrm79JwHaHa&pid=Api&P=0&w=300&h=300" />
        </main>
      </main>
    );
}

export default Error

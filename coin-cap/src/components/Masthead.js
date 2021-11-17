import React from 'react'
import Global from './Global';
import Carousel from './Slider';
const Masthead = () => {
    return (
      <div
        className="bg-fixed text-white min-h-full bg-cover bg-no-repeat w-max-content p-6"
        style={{
          backgroundImage: `url(
        https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80)`,
        }}
      >
        <h2 className="text-4xl p-3 "> Global Crypto Stats </h2>

        <Global />
        <Carousel />
      </div>
    );
}

export default Masthead

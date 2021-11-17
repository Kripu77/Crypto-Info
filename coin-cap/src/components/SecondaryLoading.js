import React from 'react'

const SecondaryLoading = () => {
    return (
      <div className="flex items-center justify-center space-x-2 animate-bounce mt-14">
        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    );
}

export default SecondaryLoading

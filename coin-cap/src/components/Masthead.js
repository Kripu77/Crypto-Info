import React from 'react'
import Global from './Global';
import Carousel from './Slider';
import { motion } from 'framer-motion';
const Masthead = () => {
  const animationStyle = {
    hidden:{opacity:0, y:-500},
    show:{opacity:1, y:0, transition:{
      default:{duration:3}, delay:0.3, type:"spring", stiffness:10
    }}
    
  }
    return (
      <motion.div variants={animationStyle}
      initial="hidden" animate="show"
        className="bg-fixed text-white min-h-full bg-cover bg-no-repeat w-max-content p-6 object-fill"
        style={{
          backgroundImage: `url(
        https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80)`,
        }}
      >
        <h2 className="text-4xl p-3 "> Global Crypto Stats </h2>

        <Global />
        <Carousel />
      </motion.div>
    );
}

export default Masthead

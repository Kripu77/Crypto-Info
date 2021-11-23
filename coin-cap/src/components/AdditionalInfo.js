import React from 'react'
import ReactHtmlParser from "react-html-parser";
import { motion } from 'framer-motion';
const AdditionalInfo = ({singleData}) => {

  //framer setup
  const animationStyle = {
    hidden: { y: -600, opacity: 0 },
    show: {
      y: 0,
      opacity: 10,
      transition: {
        default: { duration: 2 },
       delay:1,
        type: "spring",
        stiffness: 20,
      },
    },
  };

    const{ developer_data, developer_score, genesis_date, hashing_algorithm, market_data,   } = singleData;

  
    const{high_24h, low_24h, price_change_24h_in_currency, price_change_percentage_24h_in_currency, 
} = market_data
    return (
      <motion.section variants={animationStyle} initial="hidden" animate="show" className="text-center text-3xl mt-10 mb-10 ">
        <h1> Other Stats</h1>

        <section className="flex justify-around text-xl p-10">
          <div >
            <h1 className="text-2xl"> Change in 24 hours</h1>
            <div className="text-gray">
              <h1> High: ${high_24h.aud} </h1>
              <h1> Low: ${low_24h.aud}</h1>
              <h1>
                {" "}
                Price Change: ${price_change_24h_in_currency.aud}
                {"       "}
                <span
                  className={
                    price_change_percentage_24h_in_currency.aud > 1
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                 ( {price_change_percentage_24h_in_currency.aud > 1
                    ? `+${price_change_percentage_24h_in_currency.aud}`
                    : `-${price_change_percentage_24h_in_currency.aud}`}
                  %)
                </span>
              </h1>
            </div>
          </div>
          <div>
            <h1 className='text-2xl'> Additional information</h1>
            <h1> Developer Score: {developer_score}</h1>
            <h1> Date Founded: {genesis_date}</h1>
            <h1> Hashing Algorith : {hashing_algorithm}</h1>
          </div>
        </section>
      </motion.section>
    );
}

export default AdditionalInfo

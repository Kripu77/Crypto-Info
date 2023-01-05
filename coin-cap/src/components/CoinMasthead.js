import React from "react";
import { numberWithCommas } from "./numberWithCommas";
import ReactHtmlParser from "react-html-parser";
import { motion } from "framer-motion";
const CoinMasthead = ({ singleData }) => {
  const animationStyle = {
    hidden: { y: -500, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        default: { duration: 3 },
        delay: 6,
        type: "spring",
        stiffness: 10,
      },
    },
  };
  return (
    <motion.section
      variants={animationStyle}
      initial="hidden"
      animate="show"
      className="mt-10 text-center max-w-5xl ml-auto mr-auto mb-10 text-3xl"
    >
      <motion.img
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, rotate: 360, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 2.5,
          type: "spring",
          stiffness: 40,
        }}
        src={singleData.image.large}
        className="mr-auto ml-auto"
      />
      <h1 className="text-4xl text-center"> {singleData.name}</h1>
      <h1 className="text-xl">
        {ReactHtmlParser(singleData.description.en.split(". ")[0])}.
      </h1>
      <br />
      <h1>Rank : {singleData.market_cap_rank}</h1>
      <br />
      <h1 className="text-3xl">
        {" "}
        Current Price: $
        {numberWithCommas(singleData.market_data.current_price.aud)}
      </h1>
      <br />
      <h1>
        {" "}
        Market Cap: ${numberWithCommas(singleData.market_data.market_cap.aud)}
      </h1>
      <br />
      <h1>
        {" "}
        Market Cap Change in 24 hours:{" "}
        <span
          className={
            singleData.market_data.market_cap_change_percentage_24h > 1
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {singleData.market_data.market_cap_change_percentage_24h > 1
            ? `+${singleData.market_data.market_cap_change_percentage_24h.toFixed(
                2
              )}`
            : singleData.market_data.market_cap_change_percentage_24h.toFixed(
                2
              )}
          %
        </span>
      </h1>
    </motion.section>
  );
};

export default CoinMasthead;

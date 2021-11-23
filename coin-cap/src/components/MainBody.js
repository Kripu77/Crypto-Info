import React from "react";
import Noresults from "./Noresults";
import Table from "./Table";
import Footer from "./Footer";
import { useLoginContext } from "../context/LoginInContext";
import { motion } from "framer-motion";
const MainBody = () => {
  const { error } = useLoginContext();
  const animationStyle ={
    hidden:{opacity:0, x:-500},
    show:{opacity:1, x:0, transition:{default:{duration:6}, delay:0.3, type:"spring", stifness:20}}
  }
  return (
    <>
      <section className="bg-gray-300 p-9 ">
        <motion.h1 variants={animationStyle} initial="hidden" animate="show" className="text-3xl"> Live Status of Crypto Currency</motion.h1>
        <section className=" ml-auto mr-auto max-w-screen-2xl overflow-x-scroll sm:overflow-x-hidden">
          {error ? <Noresults /> : <Table />}
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default MainBody;

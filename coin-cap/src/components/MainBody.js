import React from "react";
import Noresults from "./Noresults";
import Table from "./Table";
import Footer from "./Footer";
import { useLoginContext } from "../context/LoginInContext";
const MainBody = () => {
  const { error } = useLoginContext();
  return (
    <>
      <section className="bg-gray-300 p-9 ">
        <h1 className="text-3xl"> Live Status of Crypto Currency</h1>
        <section className="w-10 ml-auto mr-auto overflow-x-scroll max-w-screen-lg sm:overflow-auto">
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

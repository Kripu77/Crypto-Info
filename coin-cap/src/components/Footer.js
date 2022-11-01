import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white p-10 text-sm ">
      <section className="block md:flex  ml-auto mr-auto max-w-screen-2xl text-center">
        <section className=" ml-auto mr-auto  ">
          <h1 className="text-2xl "> Find Us Around The Web</h1>
          <Links />
        </section>
        <section className="text-center ">
          <h1 className="text-2xl">
            {" "}
            Digi<span className="text-yellow-200">-Marpha</span>
          </h1>
          <p className="text-sm p-3 max-w-md mx-auto">
            {" "}
            Digi-<span className="text-yellow-200 ">Marpha</span> is a Digital
            wallet with a mission to revlountise the way of buying and selling
            digital currency.
            <br />

          </p>
        </section>
        <section className="mr-auto ml-auto">
          <h1 className="text-2xl"> Location</h1>
          <h1> Level 6, Fittz William St, Parramatta, NSW</h1>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

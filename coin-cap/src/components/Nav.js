import React from 'react'
import { FaCross } from 'react-icons/fa';
import { FiAlignCenter } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginInContext';
const Nav = () => {

  const{currentUser, logOut, navShow, show} = useLoginContext();
 

    const navigate = useNavigate();
    return (
      <nav>
        <section className="flex justify-between">
          <section className=" flex flex-row justify-between p-2">
            <Link to="/home">
              {" "}
              <h1 className="text-center ">
                Crypto<span className="text-yellow-300">Info</span>
              </h1>{" "}
            </Link>
          </section>
          {/* hidden sm:flex space-x-7 text-lg  */}
          <section
            className={show ? "show-util" : "hidden sm:flex space-x-7 text-lg "}
          >
            {!currentUser && (
              <button className="hover:text-gray-200" onClick={() => navShow()}>
                <Link to="/"> Sign In</Link>
              </button>
            )}
            {!currentUser && (
              <button className="hover:text-gray-200" onClick={() => navShow()}>
                <Link to="/signup"> Sign up</Link>
              </button>
            )}
            {currentUser && (
              <button className="hover:text-gray-200" onClick={()=>navShow()}>
                <Link to="/home"> Home</Link>
              </button>
            )}

            {currentUser && (
              <button
                className="hover:text-gray-200"
                onClick={() => {
                  logOut().then(() => {
                    sessionStorage.clear();
                    navigate("/");
                  });
                }}
              >
                Sign Out
              </button>
            )}
            <button className="hidden" onClick={() => navShow()}>
              <FaCross />
            </button>
          </section>
          <button className="hidden nav-hidden" onClick={() => navShow()}>
            {" "}
            <FiAlignCenter />{" "}
          </button>
        </section>
      </nav>
    );
}

export default Nav

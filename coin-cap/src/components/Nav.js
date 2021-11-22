import React from 'react'
import { ImCross } from "react-icons/im";
import { FiAlignCenter } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginInContext';
import Logo from './Logo';
const Nav = () => {

  const{currentUser, logOut, navShow, show} = useLoginContext();
 

    const navigate = useNavigate();
    return (
      <nav>
        <section className="flex justify-between p-1">
          <section>
            <Link to="/home">
              {" "}
             <Logo/>
            </Link>
          </section>
          {/* hidden sm:flex space-x-7 text-lg  */}
          <section
            className={
              show
                ? "fixed bg-purple-600 z-10 top-0 left-0 right-0 h-screen flex justify-around transition sm:static sm:h-0  "
                : "hidden top-0 -ml-96 transition-all  sm:flex sm:static sm:h-0"
            }
          >
            <section className="text-center sm:p-0 ">
              {show && (
                <h1 className="sm:hidden text-3xl">
                  {" "}
                  Crypto<span className="text-yellow-300">Info</span>
                </h1>
              )}
              <section className=" replace sm:space-x-2 ">
                {!currentUser && (
                  <button
                    className="hover:text-gray-200"
                    onClick={() => navShow()}
                  >
                    <Link to="/"> Sign In</Link>
                  </button>
                )}
                {!currentUser && (
                  <button
                    className="hover:text-gray-200"
                    onClick={() => navShow()}
                  >
                    <Link to="/signup"> Sign up</Link>
                  </button>
                )}
                {currentUser && (
                  <button
                    className="hover:text-gray-200"
                    onClick={() => navShow()}
                  >
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
                <button
                  className={
                    show ? "fixed right-10 top-10 sm:hidden" : "hidden"
                  }
                  onClick={() => navShow()}
                >
                  <ImCross />
                </button>
              </section>
            </section>
          </section>
          <button className="block sm:hidden" onClick={() => navShow()}>
            {" "}
            <FiAlignCenter />{" "}
          </button>
        </section>
      </nav>
    );
}

export default Nav

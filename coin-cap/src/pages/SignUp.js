import React from 'react'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
      <section className="text-lg mt-20  mt-20 ml-auto mr-auto max-w-md">
        <h1 className="text-2xl text-center"> Sign Up</h1>
        <form className="mt-5 text-lg ">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border outline-none focus:ring rounded"
            ></input>
            <br />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-3 border outline-none focus:ring rounded"
            ></input>
          </div>
          <div className="text-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white uppercase text-md mx-auto p-2 m-8 rounded text-center w-32">
              {" "}
              Sign Up
            </button>
            <div className="flex justify-between mb-40">
              <h1> Already a user?</h1>
              <button className="text-black hover:text-gray-600">
                <Link to="/"> Click here to SignIn</Link>
              </button>
            </div>
          </div>
        </form>
      </section>
    );
}

export default SignUp

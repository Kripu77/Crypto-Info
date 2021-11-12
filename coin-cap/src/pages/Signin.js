import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
      <section className="mt-20 ml-auto mr-auto max-w-md  ">
        <h1 className="text-2xl text-center"> Sign In</h1>
        <form className="mt-5 text-lg">
          <div className="flex flex-col ">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 rounded focus:outline-none focus:ring border"
            ></input>
          </div>
          <br />
          <div className="flex flex-col">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-3 rounded  focus:outline-none focus:ring border"
            ></input>
          </div>
          <div className="flex flex-col ">
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white uppercase text-md mx-auto p-2 m-8 rounded text-center w-32"
              type="submit"
            >
              Sign In
            </button>
            <div className="flex justify-between mb-40">
              <h1> Not registered yet?</h1>
              <button className="text-black hover:text-gray-600">
                <Link to="/signup"> Click here to register</Link>
              </button>
            </div>
          </div>
        </form>
      </section>
    );
}

export default Signin

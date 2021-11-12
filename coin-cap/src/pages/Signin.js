import React from 'react'
import { Link } from 'react-router-dom';
import LoginInContext, { useLoginContext } from '../context/LoginInContext';

const Signin = () => {

    //manage state

    const [inputData, setInputData] = React.useState({email:"", password: ""})


    //to handle change in input
    const handleChange= (e)=>{

        let name = e.target.name;
        let value =e.target.value;

        setInputData({...inputData, [name]:value})

    }

    //to handle submit

    const handleSubmit = (e)=>{

        e.preventDefault();
    }


    return (
      <section className="mt-20 ml-auto mr-auto max-w-md mb-40 ">
        <h1 className="text-2xl text-center"> Sign In</h1>
        <form className="mt-5 text-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 rounded focus:outline-none focus:ring border"
              value={inputData.email}
              onChange={handleChange}
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
              value={inputData.password} onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col ">
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white uppercase text-md mx-auto p-2 m-8 rounded text-center w-32"
              type="submit"
            >
              Sign In
            </button>
            <div className="flex justify-between ">
              <h1> Not registered yet?</h1>
              <button className="text-black hover:text-gray-600">
                <Link to="/signup"> Click here to register</Link>
              </button>
            </div>
          </div>
          <div className=" mt-8 text-center">
            <h1> Or</h1>
            <div className="flex flex-col p-2  ">
              <button className="bg-yellow-600 hover:bg-yellow-500 w-60 ml-auto mr-auto text-white rounded p-2">
                {" "}
                Continue with Google
              </button>
              <button className="bg-gray-600 hover:bg-gray-500 w-60 ml-auto mr-auto mt-4 text-white p-2 rounded">
                {" "}
                Continue with GitHub
              </button>
            </div>
          </div>
        </form>
      </section>
    );
}

export default Signin

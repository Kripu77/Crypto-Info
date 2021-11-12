import React from 'react'
import { Link } from 'react-router-dom';



const SignUp = () => {

    //manage state

    const [signUpData, setSignUpData] = React.useState({email:"", password:"", confirmpassword:""})


    //handle submit function
    const handleSubmit =(e)=>{
        e.preventDefault();

    }
    //to handle change in input feilds
    const handleChange = (e)=>{

        let name= e.target.name;
        let value = e.target.value;

        setSignUpData({...signUpData, [name]:value})

    }
    return (
      <section className="text-lg mt-20  mt-20 ml-auto mr-auto max-w-md mb-40">
        <h1 className="text-2xl text-center"> Sign Up</h1>
        <form className="mt-5 text-lg " onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border outline-none focus:ring rounded"
              value={signUpData.email}
              onChange={handleChange}
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
              value={signUpData.password}
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">Confrim Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="p-3 border outline-none focus:ring rounded"
              value={signUpData.confirmpassword}
              onChange={handleChange}
            ></input>
          </div>
          <div className="text-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white uppercase text-md mx-auto p-2 m-8 rounded text-center w-32">
              {" "}
              Sign Up
            </button>

            <div className="flex justify-between ">
              <h1> Already a user?</h1>
              <button className="text-black hover:text-gray-600">
                <Link to="/"> Click here to SignIn</Link>
              </button>
            </div>
            <div className=" mt-8">
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
          </div>
        </form>
      </section>
    );
}

export default SignUp

import React from 'react'
import { Link } from 'react-router-dom';
import { useLoginContext } from '../context/LoginInContext';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const SignUp = () => {

    //manage state

    const [signUpData, setSignUpData] = React.useState({email:"", password:"", confirmpassword:""})
    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(false);
   


    //from context provider
    const {google, github, signUp} = useLoginContext();

    //handle submit function
    const handleSubmit =(e)=>{
        e.preventDefault();

        //check if user has entered data
        if (
          !signUpData.email &&
          !signUpData.password &&
          !signUpData.confirmpassword
        ){
           toast.error("Please enter your details to proceed")
        }
        //once data is added
          if (
            signUpData.email &&
            signUpData.password &&
            signUpData.confirmpassword
          ) {
            //check if password is six characters long
            if (signUpData.password.length < 6) {
              toast.error("Password should to be at least six characters.");
            }

            //check if passwords match
            if (signUpData.password !== signUpData.confirmpassword) {
              console.log("pasword doesnot match");
              toast.error("Password doesnot match.");
            }

            //once all validation pass insert the data
            else {
              setLoading(true);
              signUp(signUpData.email, signUpData.password)
                .then((resp) => {
                  console.log(resp);
                  toast.success("Thank you, Account Created");
                })
                .catch((err) => {
                  console.log(err)
                  toast.error(`${err}`);
                });

              // setSignUpData({email:"", password:"", confirmpassword:"" })
            }
          } } 
    //to handle change in input feilds
    const handleChange = (e)=>{

        let name= e.target.name;
        let value = e.target.value;

        setSignUpData({...signUpData, [name]:value})

    }

    //useEffect to close loading state

    React.useEffect(()=>{
        const loadingInterval = setTimeout(()=>{
            setLoading(false)
         
        }, 3000)
        return ()=>{clearInterval(loadingInterval)}
    }, [loading])



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
            <ToastContainer />
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
            <button className="bg-purple-500 hover:bg-purple-600 text-white uppercase text-md mx-auto p-2 m-8 rounded text-center w-60 transition ease-in duration-700 ...">
              {loading ? (
                <svg
                  className=" animate-spin
      rounded-full
      h-7
      w-7
      ml-auto
      mr-auto
      border-t-2 border-b-2 border-purple-500..."
                  viewBox="0 0 24 24"
                >
                  {" "}
                </svg>
              ) : (
                "Sign Up"
              )}
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
                <button
                  className="bg-yellow-600 hover:bg-yellow-500 w-60 ml-auto mr-auto text-white rounded p-2"
                  onClick={() => google()}
                >
                  {" "}
                  Continue with Google
                </button>
                <button
                  className="bg-gray-600 hover:bg-gray-500 w-60 ml-auto mr-auto mt-4 text-white p-2 rounded"
                  onClick={() => github()}
                >
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginInContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet"

const SignUp = () => {
  //manage state

  const [signUpData, setSignUpData] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = React.useState(false);

  //navigate from react-router
  const navigate = useNavigate();

  //from context provider
  const { google, github, signUp, logOut } = useLoginContext();

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    //check if user has entered data
    if (
      !signUpData.email &&
      !signUpData.password &&
      !signUpData.confirmpassword
    ) {
      toast.error("Please enter your details to proceed");
    }
    //once data is added
    if (signUpData.email && signUpData.password && signUpData.confirmpassword) {
    

      //check if passwords match
      if (signUpData.password !== signUpData.confirmpassword) {
        toast.error("Password doesnot match.");
      }

      //once all validation pass insert the data
      else {
        setLoading(true);
        signUp(signUpData.email, signUpData.password)
          .then((resp) => {
            console.log(resp);
            toast.success(
              "Thank you, Account Created, Hang In you will be headed towards Log In page"
            );
            logOut();
            setTimeout(() => {
              navigate("/");
            }, 4000);

            resp.user.sendEmailVerification();
          })
          .catch((err) => {
            //error from weak password
            if (err.code === "auth/weak-password") {
              toast.error(`Password has to be atleast 6 characters`);
            }
            //error for email already in use
            if (err.code === "auth/email-already-in-use") {
              toast.error(
                "Email already-in-use, please choose a different email address!!"
              );
              setSignUpData({
                email: "",
                password: "",
                confirmpassword: "",
              });
            }
            console.log(err);
          });

        // setSignUpData({email:"", password:"", confirmpassword:"" })
      }
    }
  };
  //to handle change in input feilds
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSignUpData({ ...signUpData, [name]: value });
  };

  //useEffect to close loading state

  React.useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearInterval(loadingInterval);
    };
  }, [loading]);

React.useEffect(() => {
  const authToken = sessionStorage.getItem("Auth Token");
  if (authToken) {
    navigate("/home");
  }
  if (!authToken) {
    navigate("/signup");
  }
}, []);
  return (
    <section className="text-lg mt-20 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Sign Up</title>
        <link rel="canonical" href="https://cryptoinfor.netlify.app/" />
      </Helmet>
      <section className="ml-auto mr-auto max-w-md mb-40">
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
            </div>
          </div>
          <div className="flex flex-col p-2  ">
            <button
              type="click"
              className="bg-yellow-600 hover:bg-yellow-500 w-60 ml-auto mr-auto text-white rounded p-2"
              onClick={() => {
                google()
                  .then((resp) => {
                    sessionStorage.setItem(
                      "Auth Token",
                      resp._tokenResponse.refreshToken
                    );
                    navigate("/home");
                  })
                  .catch((err) => {
                    if (err.code === "auth/popup-closed-by-user") {
                      toast.error(
                        "You closed the sigin method your preferred, please choose your prefer signin method to continue."
                      );
                    }
                    if (
                      err.code ===
                      "auth/account-exists-with-different-credential"
                    ) {
                      toast.error(
                        "You already have a different account registered with this email."
                      );
                    }
                  });
              }}
            >
              {" "}
              Continue with Google
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-500 w-60 ml-auto mr-auto mt-4 text-white p-2 rounded"
              onClick={() =>
                github()
                  .then((resp) => {
                    toast.success(
                      "Please wait you will be directed towards login page"
                    );
                    sessionStorage.setItem(
                      "Auth Token",
                      resp._tokenResponse.refreshToken
                    );
                    setTimeout(() => {
                      navigate("/home");
                    }, 4000);
                  })
                  .catch((err) => {
                    if (err.code === "auth/popup-closed-by-user") {
                      toast.error(
                        "You closed the sigin method your preferred, please choose your prefer signin method to continue."
                      );
                    }

                    if (
                      err.code ===
                      "auth/account-exists-with-different-credential"
                    ) {
                      toast.error(
                        "You already have a different account registered with this email."
                      );
                    }
                    console.error(err);
                  })
              }
            >
              {" "}
              Continue with GitHub
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default SignUp;

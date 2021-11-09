import React,{useState} from 'react'
import { useLoginContext } from '../Context/Logincontext'





const SignUp = () => {
    console.log(useLoginContext())
    const { details, setDetails } = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
    return (
      <section className="form-section">
        <form>
          <label htmlFor="Email"> Email </label>
          <input type="text"></input>
          <br />
          <br />
          <label htmlFor="password"> Password </label>
          <input type="text"></input>
          <br />
          <br />
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input type="text"></input>
          <br />
          <br />
          <button> Sign Up</button>
        </form>
      </section>
    );
}

export default SignUp

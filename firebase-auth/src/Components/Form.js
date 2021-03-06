import React, {useState} from 'react'
import { useLoginContext } from '../Context/Logincontext'
import {useNavigate, Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Form = () => {
  const {login, signInWithGoogle, signInWithGit} = useLoginContext();
const [email, setEmail] = useState('')

const [ password, setPassword] = useState('')
const [userData, setUserData] = useState([])

//usehistory hook from react router dom has been replaced with useNaviagte in version 6

const navigate = useNavigate();

//handle submit fn
const handleSubmit = (e)=>{

    e.preventDefault();  
    if(!email && !password){
      console.log('enter a value')
    }  

    if(email && password){
const data= {id: new Date().getTime().toString(), email, password};
setUserData([...userData,  data])

login(email, password)
.then((resp)=>{
  console.log(resp)
  navigate('/')
})
.catch((err)=>console.log(err))


//set feild value empty once user enters credentials
setEmail('')
setPassword('')
    }
}
    return (
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <h1> Namaste </h1>
          <h1> Sign In Here!</h1>
          <label htmlFor="userEmail"> Email</label>
          <br></br>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="Password"> Password</label>
          <br></br>
          <input
            type="password"
            id="Password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit"> Log In</button>
        </form>
        <div className="form-util">
          <p> Don't have an account?</p>
          <Link to="/signup"> Register Here!!</Link>
          <br /> 
        </div>
        <div className="link-container">
          <button className="google" onClick={() => signInWithGoogle()
          .then((resp)=>console.log(resp))
          .catch((err)=>console.log(err))}>
            {" "}
            <FcGoogle />
          </button>
          <button onClick= {()=>signInWithGit()} className="facebook">
            <BsGithub/>
          </button>
        </div>
      </section>
    );
}

export default Form

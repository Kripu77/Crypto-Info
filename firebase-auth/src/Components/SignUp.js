import React,{useState} from 'react'
import { useLoginContext } from '../Context/Logincontext'
import { createUserWithEmailAndPassword } from 'firebase/auth'






const SignUp = () => {
    console.log(useLoginContext())
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

//will be equal to our auth present in firebase confid file
const {signup} = useLoginContext();
    //prevent default behaviour

  async function handleSubmit(e){
        e.preventDefault();
//check if password in both the same feild are same
if(email && password && confirmPassword){
console.log(email, password, confirmPassword)

if(password !== confirmPassword){
        console.log("Please enter same value");
   return setError(true);

}

signup(email, password)
.then((resp)=>console.log(resp))
.catch((err)=>console.log(err))
.finally(()=>setError(false))
   
}


    }
    return (
      <section className="form-section" onSubmit={handleSubmit}>
        <form>
          <label htmlFor="Email"> Email </label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          ></input>
          <br />
          <br />
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          ></input>
          <br />
          <br />
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          ></input>
          <br />
          <br />
          <button type="submit"> Sign Up</button>
        </form>
      </section>
    );
}

export default SignUp

import React,{useState} from 'react'
import { useLoginContext } from '../Context/Logincontext'






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

if(password!== confirmPassword){

    return setError('password does not match')

}
try{
    setError('')
    console.log(error)
    setLoading(true)
 await    signup(email, password);
}
catch{
setError('failed to create account')
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
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          ></input>
          <br />
          <br />
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          ></input>
          <br />
          <br />
          <button disabled={loading}> Sign Up</button>
        </form>
      </section>
    );
}

export default SignUp

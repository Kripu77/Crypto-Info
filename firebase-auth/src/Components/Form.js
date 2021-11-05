import React, {useState} from 'react'

const Form = () => {
const [email, setEmail] = useState('')

const [ password, setPassword] = useState('')

//handle submit fn
const handleSubmit = (e)=>{

    e.preventDefault();    
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
      </section>
    );
}

export default Form

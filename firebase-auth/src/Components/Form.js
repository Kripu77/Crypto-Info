import React, {useState} from 'react'

const Form = () => {

    const {userDetails, setUserDetails} = useState({userEmail:" empty", userPassword:" "})
    return (
        <section>
            <form>
                <label htmlFor="Email" > Email</label>
                <input type="email" id="Email" name="Email" value={} />
                <br/>
                <label htmlFor="Password"> Password</label>
                <input type="password"/>
                <br/>
                <button type="submit"> Log In</button>
            </form>
        </section>
    )
}

export default Form

import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
      <main>
        <nav>
          <section>
            <h1> GITHUB Search</h1>
          </section>
          <section>
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="signin">Sign in </Link>{" "}
              </li>
              <li> <Link to="signup"> Sign Up
              </Link>  </li>
              <li><Link to="/"> Log Out</Link></li>
            </ul>
          </section>
        </nav>
      </main>
    );
}

export default Header

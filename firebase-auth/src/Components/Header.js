import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../Context/Logincontext';
const Header = () => {

    const {logOut, user} = useLoginContext();
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
              {user === null ? (
                <li>
                  <Link to="signin">Sign in </Link>{" "}
                </li>
                
              ) : (
                " "
              )}
              {user === null ? (<li>
                <Link to="signup"> Sign Up</Link>{" "}
              </li>) : (" ")}
              

              {user === null ? (
                " "
              ) : (
                <li>
                  <Link
                    to="/"
                    onClick={async (e) => {
                      e.preventDefault();
                      logOut();
                    }}
                  >
                    {" "}
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
          </section>
        </nav>
      </main>
    );
}

export default Header

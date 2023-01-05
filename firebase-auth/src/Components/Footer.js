import React from 'react'

const Footer = () => {
    return (
      <footer>
        <section className="footer">
          <section>
            <h1> Tech Stack Used</h1>
            <ul>
              <li> HTML5</li>
              <li> SASS</li>
              <li> ReactJs</li>
              <li> FireBase Auth</li>
              <li>GitHub API</li>
            </ul>
          </section>
          <section>
            <h1> GitHub User Info Search</h1>
            <p>Facebook</p>
          </section>
          <section>
            <h1> Designed and Developed By Kripu Khadka @2021</h1>
            <p>
              {" "}
              No Copyright issues, feel free to ping me if you require any
              additional help
            </p>
          </section>
        </section>
      </footer>
    );
}

export default Footer

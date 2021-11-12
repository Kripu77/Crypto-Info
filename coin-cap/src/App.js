import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Error from './components/Error';
import Footer from './components/Footer';

const App = () => {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Signin/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
}

export default App

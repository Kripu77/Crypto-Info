import React, {useState} from "react";


//css
import "./CSS/style.css";

//react-router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Form from "./Components/Form";
import Header from "./Components/Header";
import Error from "./Components/Error";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Footer from "./Components/Footer";

//firebase 
import firebase from"firebase/app"
import "firebase/auth"

const App = () => {

   
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>}/>          
          <Route path="*" element={<Error/>}/>
        
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

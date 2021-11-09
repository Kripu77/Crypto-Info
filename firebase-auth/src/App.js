import React from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import "./CSS/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="*" element={<Error/>}/>
        
        </Routes>
      </Router>
    </div>
  );
};

export default App;

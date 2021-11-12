 import React from 'react';
 import ReactDOM from 'react-dom';
  import "./index.css";
import App from './App';
import LoginInContext from './context/LoginInContext';

 ReactDOM.render(

 <LoginInContext children={<App/>} />

 , document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Logincontext} from "../src/Context/Logincontext"
ReactDOM.render(
<Logincontext Children={<App/>}/>, document.getElementById('root'));
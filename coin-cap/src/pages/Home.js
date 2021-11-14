import React from "react";
import { useLoginContext } from "../context/LoginInContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser, sendVerification } = useLoginContext();

 //Private Route to check if the token is present 
const navigate = useNavigate();

//useEffect to monitor it only runs once
 React.useEffect(()=>{
let authToken = sessionStorage.getItem('Auth Token')
if(!authToken){
    navigate('/')
}
if(authToken){
    navigate('/home')
}
 },[])

  return (
    <div>
      <h1> Hello</h1>
    </div>
  );
};

export default Home;

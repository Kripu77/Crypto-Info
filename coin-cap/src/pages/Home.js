import React from "react";
import { useLoginContext } from "../context/LoginInContext";
import { useNavigate } from "react-router-dom";
import Masthead from "../components/Masthead";
import MainBody from "../components/MainBody";


const Home = () => {


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
    <main className="h-96  text-center mb-44 ">
     <Masthead/>
     <MainBody/>
    </main>
  );
};

export default Home;

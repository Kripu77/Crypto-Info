import React from "react";
import { useLoginContext } from "../context/LoginInContext";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Carousel from "../components/Slider";

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
    <main className="h-96  mb-20 text-center">
      <div
        className=" bg-fixed text-white min-h-full bg-cover w-max-content z-10"
        style={{
          backgroundImage: `url(
            "https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
        }}
      >
        <h2 className="text-5xl p-10 ">
          {" "}
          Crytpo<span className="text-yellow-300">Info</span>
        </h2>
        <p className="text-gray-50">
          {" "}
          Get all the necessary information regarding your favourite Crypto
          Currency
        </p>
        <Carousel />
      </div>
      <section></section>
    </main>
  );
};

export default Home;

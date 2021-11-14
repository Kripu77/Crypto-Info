import React from "react";
import { useLoginContext } from "../context/LoginInContext";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Carousel from "../components/Slider";
import Search from "../components/Search";
import Table from "../components/Table";
import Footer from "../components/Footer";


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
    <main className="h-96  text-center mb-44 ">
      <div
        className="bg-fixed text-white min-h-full bg-cover bg-no-repeat w-max-content"
        style={{
          backgroundImage: `url(
        https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80)`,
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
      <section className="bg-gray-300 p-9 ">
        <section className="max-w-screen-2xl ml-auto mr-auto">
          <h1 className="text-3xl"> Live Status of Crypto Currency</h1>
          <Search />
          <Table />
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;

import React from "react";
import { useLoginContext } from "../context/LoginInContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser, sendVerification } = useLoginContext();

 

  return (
    <div>
      <h1> Hello</h1>
    </div>
  );
};

export default Home;

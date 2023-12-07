import React from "react";
import HomeImage from "./images/homeimg.png";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${HomeImage})` }} className="h-screen w-screen bg-no-repeat bg-cover overflow-hidden " >
      <NavBar />
      <div >Home.</div>
    </div>
  );
};

export default Home;

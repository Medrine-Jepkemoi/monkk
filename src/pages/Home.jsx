import React from "react";
import HomeImage from "./images/homeimg.png";
import NavBar from "../components/NavBar";
import BuyYIcon from "./images/buyYIcon.svg"

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${HomeImage})`, height: "100vh", width: "100vw"}} className=" h-full w-full bg-no-repeat bg-cover overflow-scroll" >
      <NavBar/>
      <div className="pl-8  w-full h-full flex flex-col items-start justify-center ">
        <p className="text-white text-lg">At Monk we believe in <span className="text-yellow-400">Kindness</span> & <span className="text-yellow-400">Being Humble</span></p>
        <button className="flex items-center justify-center gap-2 h-14 w-fit bg-black rounded-md border-solid px-4 mt-6">
          <img src={BuyYIcon} alt="Buy Icon" className="h-8 w-8" />
          <p className="text-yellow-400 text-base">Get Exclusive Merch</p>
        </button>
      </div>
    </div>
  );
};

export default Home;

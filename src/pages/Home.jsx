import React from "react";
import HomeImage from "./images/homeimg.png";
import NavBar from "../components/NavBar";
import BuyYIcon from "./images/buyYIcon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const handleGetMerch = () => {
    console.log("Merch");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${HomeImage})`,
        height: "100vh",
        width: "100vw",
        // background: "linear-gradient(to bottom right, rgb(128,128,128), rgb(169, 169, 169), rgb(211, 211, 211) )"
        
      }}
      className=" h-full w-full bg-no-repeat bg-cover overflow-scroll "

      // bg-gradient-to-r from-gray-400 to-gray-200
    >
      <NavBar />
      <div className="pl-8  w-full h-full flex flex-col items-start justify-center  ">
        <p className="text-white text-lg">
          At Monk we believe in{" "}
          <span className="text-yellow-400">Kindness</span> &{" "}
          <span className="text-yellow-400">Being Humble</span>
        </p>
        <Link to="/products">
          <button
            onClick={handleGetMerch}
            className="flex items-center justify-center gap-2 h-14 w-fit bg-black rounded-md border-solid px-4 mt-6"
          >
            <img src={BuyYIcon} alt="Buy Icon" className="h-8 w-8" />
            <p className="text-yellow-400 text-base">Get Exclusive Merch</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

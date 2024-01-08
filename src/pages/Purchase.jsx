import React from "react";
import NavBar from "../components/NavBar";
import PurchaseHoodie from "./images/purchasehoodie.png";
import PurchaseImg from "../components/PurchaseImg";

const Purchase = () => {
  return (
    <div className="flex flex-col h-screen pt-20 pb-24">
      <NavBar className="bg-slate-400" />
      <div className="h-full w-screen flex">
        {/* Images */}
        <div className="bg-red-300 w-1/2 flex">
          {/* Small Images */}
          <div className="bg-white w-1/3 flex flex-col items-center">
            <PurchaseImg alt="Hood 1" />
            <PurchaseImg alt="Hood 2" />
            <PurchaseImg alt="Hood 3" />
            <PurchaseImg alt="Hood 4" />
          </div>

          {/* Large Image */}
          <div className="relative w-2/3">
            <img className="h-full w-screen" src={PurchaseHoodie} />

            {/* Implementing gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <div
              style={{
                backgroundImage: `url(${PurchaseHoodie})`,
              }}
              className=" bg-no-repeat bg-cover h-full "
            >
              <div className="relative flex justify-center items-center h-full">
                <p className=" text-white">Hey</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* Purchase */}
        <div className="bg-emerald-200 w-1/2"></div>
      </div>
    </div>
  );
};

export default Purchase;

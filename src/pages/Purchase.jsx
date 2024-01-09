import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PurchaseHoodie from "../assets/images/purchasehoodie.png";
import PurchaseImg from "../components/PurchaseImg";
import SizeBtn from "../components/SizeBtn";
import ColorBtn from "../components/ColorBtn";
import PurchaseBtn from "../components/PurchaseBtn";
import BuyIcon from "../assets/images/buyIcon.svg"
import BuyYIcon from "../assets/images/buyYIcon.svg"
import IncrementDecrementQ from "../components/IncrementDecrementQ";

const Purchase = () => {
    
  // Size Btns Functionalities
  const selectSmall = (e) => {
    e.preventDefault();
    console.log("Small size hoodie");
  };

  const selectMedium = (e) => {
    e.preventDefault();
    console.log("Medium size hoodie");
  };

  const selectLarge = (e) => {
    e.preventDefault();
    console.log("Large size hoodie");
  };
  const selectXLarge = (e) => {
    e.preventDefault();
    console.log("X-Large size hoodie");
  };

  // Color Btns Functionalities
  const selectBlue = (e) => {
    e.preventDefault();
    console.log("Blue color hoodie");
  };
  const selectYellow = (e) => {
    e.preventDefault();
    console.log("Yellow color hoodie");
  };
  const selectWhite = (e) => {
    e.preventDefault();
    console.log("White color hoodie");
  };
  const selectBlack = (e) => {
    e.preventDefault();
    console.log("Black color hoodie");
  };

//   Purchase Buttons Functionalities
const placeOrder = (e) =>{
    e.preventDefault()
    console.log("Order Placed")
}

const addFavorite = (e) =>{
    e.preventDefault()
    console.log("Product added to favorites")
}

  return (
    <div className="flex flex-col h-screen pt-20 pb-24">
      <NavBar className="bg-slate-400" />
      <div className="h-full w-screen flex">
        {/* Images */}
        <div className="bg-red-300 w-1/2 flex">
          {/* Small Images */}
          <div className="bg-white w-1/3 flex flex-col items-center justify-center">
            <PurchaseImg alt="Hood 1" />
            <PurchaseImg alt="Hood 2" />
            <PurchaseImg alt="Hood 3" />
            <PurchaseImg alt="Hood 4" />
          </div>

          {/* Large Image */}
          <div className="relative w-2/3">
            <img className="h-full w-screen" src={PurchaseHoodie} alt="Big Hoodie"/>

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
        <div className="w-1/2 h-full px-5 py-10 flex flex-col items-center">

          <div className="bg-white h-full w-2/3 flex flex-col justify-between ">
            <div>
              <h2 className="text-xl font-semibold">Monk Cotton Hoodies</h2>
              <p className="text-base font-light text-slate-400">
                Unisex and can be work during any weather
              </p>
              <p className="text-xl font-light">ksh. 2200</p>
            </div>
            {/* Size Selection */}
            <div className="">
              <p className="text-base font-light text-slate-400">Select Size</p>
              <div className=" flex justify-between">
                <SizeBtn id={1} clickHandler={selectSmall} value="Small" />
                <SizeBtn id={2} clickHandler={selectMedium} value="Medium" />
                <SizeBtn id={3} clickHandler={selectLarge} value="Large" />
                <SizeBtn id={4} clickHandler={selectXLarge} value="XLarge" />
              </div>
            </div>
            {/* Color Selection */}
            <div>
              <p className="text-base font-light text-slate-400">
                Select Color
              </p>
              <div className=" flex justify-between">
                <ColorBtn id={1} clickColor={selectBlue} bgColor='bg-cyan-500'/>
                <ColorBtn id={2} clickColor={selectYellow} bgColor='bg-amber-300'/>
                <ColorBtn id={3} clickColor={selectWhite} bgColor='bg-white'/>
                <ColorBtn id={4} clickColor={selectBlack} bgColor='bg-gray-900'/>
              </div>
            </div>
            <div>
            <p className="text-base font-light text-slate-400">
                Select Quantity
            </p>
            <IncrementDecrementQ/>
            </div>

            {/*Buttons*/}
            <div className="flex flex-col gap-4">
                <PurchaseBtn id={1} handlePurchase={placeOrder} icon={BuyYIcon} label="Place Order" bgColor='bg-gray-900' textColor='text-amber-300'/>
                <PurchaseBtn id={2} handlePurchase={addFavorite} icon={BuyIcon} label="Add to Favorites" bgColor='bg-white' textColor='texttrueGray-900'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

import React from "react";
import BuyIcon from  "./images/buyIcon.svg"

const ProductCard = (props) => {
  return (
    <div className=" flex flex-col  h-full w-full">
      <img src={props.src} alt={props.alt} className="h-4/5 w-4/5"/>
      <div className="flex place-content-between w-4/5 my-2">
        <div>
          <h3 className="font-semibold text-2xl">{props.label}</h3>
          <p className="font-light text-base text-slate-700">{props.description}</p>
        </div>
        <button id={props.id} onClick={props.clickHandler} className="flex items-center justify-center gap-4 bg-white border-2 border-black w-24 rounded-lg ">
            <img src={BuyIcon} alt="Buy Icon" />
            <p className="text-base text-black font-medium">Buy</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

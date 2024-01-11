import React from "react";
import BuyIcon from "../assets/images/buyIcon.svg";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div key={props.id} className=" flex flex-col  h-full w-full">
      <img src={props.src} alt={props.alt} className="h-4/5 w-5/5" />
      <div className="flex place-content-between w-5/5 my-2">
        <div>
          <h3 className="font-semibold text-2xl">{props.label}</h3>
          <p className="font-light text-base text-slate-700">
            {props.description}
          </p>
        </div>

        <Link
          to={`/purchase/${props.id}`}
          id={props.id}
          // onClick={props.clickHandler}
          className="flex items-center justify-center gap-4 bg-white border-2 border-black w-24 rounded-lg h-10"
        >
          <img src={BuyIcon} alt="Buy Icon" />
          <p className="text-base text-black font-medium">Buy</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

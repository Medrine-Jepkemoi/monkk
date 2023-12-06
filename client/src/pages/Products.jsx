import React from "react";
import ProductCard from "../components/ProductCard";
import ShortImg from "./images/short.png";
import HoodImg from "./images/prodyhood.png";
import NavBar from "../components/NavBar";

const Products = () => {
  const buy = (e) => {
    e.preventDefault();
    console.log("Purchase Made");
  };
  return (
    <div className="h-screen ">
      <NavBar className="h-1/6 bg-slate-300" />
      <div className="h-1/6 bg-red-300 mx-4">
        <p>THE MONK’s COLLECTION</p>
      </div>
      <div className="flex h-4/6 mx-4 my-2">
        <ProductCard
          src={HoodImg}
          alt="Hood Image"
          label="Hoodies"
          description="Get the monk Extra Comfortable hoodies"
          id={1}
          clickHandler={buy}
        />

        <ProductCard
          src={ShortImg}
          alt="Short Image"
          label="Shorts"
          description="Get the monk Extra Comfortable shorts"
          id={2}
          clickHandler={buy}
        />

        

      </div>
    </div>
  );
};

export default Products;

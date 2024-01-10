import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ShortImg from "../assets/images/short.png";
import HoodImg from "../assets/images/prodyhood.png";
import NavBar from "../components/NavBar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const buy = (e) => {
    e.preventDefault();
    console.log("Purchase Made");
  };

  return (
    <div className="h-screen ">
      <NavBar className="h-1/6 bg-slate-300" />
      <div className="h-1/6 bg-gray-200 mx-4 pt-8">
        <p className="text-center text-4xl font-extrabold">
          THE MONK’s COLLECTION
        </p>
      </div>
      <div className="flex h-4/6 mx-4 my-2 gap-12">

        {products.map((product) => (
          <ProductCard
          key={product.id}
          src={product.image}
          alt={product.title}
          label={product.title}
          description={product.description}
          id={product.id}
          clickHandler={buy}
        />
        ))}
        {/* <ProductCard
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
        /> */}
      </div>
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    <div>Loading.....</div>;
  } else {
    return (
      <div className="h-screen w-screen  ">
        <NavBar />

        <div className="h-[90%] pt-20 p-8">
          <div className="h-1/5 bg-gray-200 flex items-center justify-center">
            <p className="text-center text-4xl font-extrabold ">
              THE MONK’s COLLECTION
            </p>
          </div>

          <div className="flex h-4/5 mx-4 my-2 gap-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                src={product.image}
                alt={product.title}
                label={product.title}
                description={product.description}
                id={product.id}
                // clickHandler={buy}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Products;

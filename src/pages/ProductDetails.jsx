import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductDetailsImg from "../components/ProductDetailsImg";
import PurchaseBtn from "../components/PurchaseBtn";
import BuyIcon from "../assets/images/buyIcon.svg";
import BuyYIcon from "../assets/images/buyYIcon.svg";
import IncrementDecrementQ from "../components/IncrementDecrementQ";
import { ShoppingCartContext } from "../context/CartContext";

const ProductDetails = () => {
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Context Variable
  const cart = useContext(ShoppingCartContext);

  // Dynamic parameters
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .then(() => setLoading(false));
  }, []);

  //   Add to Cart
  const addToCart = (e) => {
    e.preventDefault();
    console.log("Order Placed");
    const newCartItem = {
      productID: data.id,
      productTitle: data.title,
      productPrice: data.price,
      productSize: selectedSize,
      productColor: selectedColor,
      productImage: data.image,
      quantity: cart.count,
      itemTotal: cart.itemTotal,
    };
    console.log(newCartItem);
    cart.addProduct(newCartItem);
  };

  const addFavorite = (e) => {
    e.preventDefault();
    console.log("data added to favorites");
  };

  if (loading) {
    return <div>Loading......</div>;
  } else {
    return (
      <div className='flex flex-col h-screen pt-20 pb-24'>
        <NavBar />

        <div className='h-full w-screen flex'>
          {/* Images */}

          <div className='bg-red-300 w-1/2 flex'>
            {/* Small Images */}

            <div className='bg-white w-1/3 flex flex-col items-center justify-center'>
              <ProductDetailsImg src={data.image} alt={data.title} />
              <ProductDetailsImg src={data.image} alt={data.title} />
              <ProductDetailsImg src={data.image} alt={data.title} />
              <ProductDetailsImg src={data.image} alt={data.title} />
            </div>

            {/* Large Image */}
            <div className='relative w-2/3'>
              <img
                className='h-full w-screen'
                src={data.image}
                alt={data.title}
              />
            </div>
          </div>

          {/* More Product Details */}
          <div className='w-1/2 h-full px-5 py-10 flex flex-col items-center'>
            <div className='bg-white h-full w-2/3 flex flex-col justify-between '>
              <div>
                <h2 className='text-xl font-semibold'>{data.description}</h2>
                <p className='text-base font-light text-slate-400'>
                  {data.more}
                </p>
                <p className='text-xl font-light'>ksh. {data.price}</p>
              </div>
              {/* Size Selection */}
              <div className=''>
                <p className='text-base font-light text-slate-400'>
                  Select Size
                </p>
                <div className=' flex justify-between'>
                  {/* Mapping through the array of sizes */}
                  {data.size.map((size) => (
                    <div
                      // Conditional css based on which button has been clicked
                      className={
                        selectedSize === size
                          ? "bg-black text-white border-2 border-black rounded-md h-12 w-20 text-center py-2"
                          : "bg-white border-2 border-black rounded-md h-12 w-20 text-center py-2"
                      }
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              {/* Color Selection */}
              <div>
                <p className='text-base font-light text-slate-400'>
                  Select Color
                </p>
                <div className=' flex justify-between'>
                  {/* Mapping through the array of colors */}
                  {data.color.map((color) => (
                    <div
                      id={color}
                      className={`${
                        selectedColor === color
                          ? "border-2 border-black rounded-md h-16 w-20 shadow-lg shadow-black"
                          : "border-2 border-black rounded-md h-16 w-20"
                      } ${color === "Blue" ? "bg-cyan-500" : ""} ${
                        color === "Yellow" ? "bg-amber-300" : ""
                      } ${color === "White" ? "bg-white" : ""} ${
                        color === "Black" ? "bg-gray-900" : ""
                      }`}
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                    >
                      {/* {color} */}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className='text-base font-light text-slate-400'>
                  Select Quantity
                </p>
                <IncrementDecrementQ
                  count={cart.count}
                  addQuantity={cart.addQuantity}
                  reduceQuantity={cart.reduceQuantity}
                  width='w-1/4'
                />
              </div>

              {/*Buttons*/}
              <div className='flex flex-col gap-4'>
                <PurchaseBtn
                  id={1}
                  handlePurchase={addToCart}
                  icon={BuyYIcon}
                  label='Add to Cart'
                  bgColor='bg-gray-900'
                  textColor='text-amber-300'
                />
                {/* <PurchaseBtn
                  id={2}
                  handlePurchase={addFavorite}
                  icon={BuyIcon}
                  label='Add to Favorites'
                  bgColor='bg-white'
                  textColor='texttrueGray-900'
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;

import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import IncrementDecrementQ from "../components/IncrementDecrementQ";
import { ShoppingCartContext } from "../context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState();

  // Increase quantity of product
  const addQuantity = () => {
    if (quantity < 200) {
      setQuantity((prevState) => prevState + 1);
    }
  };
  // Decrease quantity of product
  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  return (
    <div className='h-screen w-screen pt-20'>
      <NavBar />
      <div className=' h-full w-screen flex px-20'>
        <div className=' w-2/3 h-full '>
          <p className='text-2xl font-semibold text-center py-5'>My Cart</p>
          <div className='flex flex-col gap-6 w-full '>
            {cart.cartItems.map((cartItem) => (
              <div key={cartItem.itemID} className='h-[10%] flex w-full'>
                <div className=' w-1/4 '>
                  <img src={cartItem.productImage} className='h-36 w-1/2' />
                </div>

                <div className=' w-2/4 text-base font-normal  flex flex-col justify-between'>
                  <p className='text-xl font-medium'>{cartItem.productTitle}</p>
                  <p className='flex gap-8'>{cartItem.productSize}</p>
                  <p>{cartItem.productColor}</p>
                  <div className='flex justify-between w-full'>
                    <IncrementDecrementQ
                      count={cartItem.quantity}
                      addQuantity={() =>
                        cart.addCartItemQuantity(cartItem.itemID)
                      }
                      reduceQuantity={() =>
                        cart.reduceCartItemQuantity(cartItem.itemID)
                      }
                      width='w-1/3'
                    />
                    <RiDeleteBinLine
                      onClick={() => cart.removeProduct(cartItem.itemID)}
                      className='w-1/3 h-10'
                    />
                  </div>
                </div>

                <div className=' w-1/4 '>
                  {/* <p>
                  Item Price:
                  <span>{cartItem.productPrice}</span>
                </p> */}
                  <p className='text-base font-medium text-center'>ksh 550</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-between w-1/3 h-[35%] '>
          <p className='text-2xl font-semibold text-center py-5'>
            Order Summary
          </p>

          <p className='flex justify-between text-base font-normal'>
            Total <span>ksh 30,000</span>
          </p>
          <div className='flex flex-col gap-5  w-full items-center '>
            <Link className='rounded-md border-2 border-black h-12 w-2/3 bg-gray-900 text-center text-amber-300 py-2'>
              Proceed to Checkout
            </Link>
            <Link
              to='/products'
              className='rounded-md border-2 border-black h-12 w-2/3 bg-gray-900 text-center text-amber-300 py-2'
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

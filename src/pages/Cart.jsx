import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import IncrementDecrementQ from "../components/IncrementDecrementQ";
import { ShoppingCartContext } from "../context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const cart = useContext(ShoppingCartContext);

  console.log(cart.cartItems);
  return (
    <div>
      <NavBar />
      <div className='h-[90%] w-screen pt-20 '>
        <p>My Cart</p>
        <div className='bg-red-200 flex justify-between p-5 w-3/5'>
          <div className='w-1/4  bg-orange-300 flex justify-center'>
            <img
              className='h-36 w-30'
              src='https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>

          <div className='bg-lime-300 w-1/4 flex flex-col justify-between'>
            <p className='text-xl font-semibold'> Short</p>
            <p className='text-base font-semibold flex justify-between'>
              Size: <span className='font-light'>Small</span>
            </p>
            <p className='text-base font-semibold flex justify-between'>
              Color: <span className='font-light'>Black</span>
            </p>
            <div className='flex justify-between'>
              <IncrementDecrementQ
                count={cart.count}
                addQuantity={cart.addQuantity}
                reduceQuantity={cart.reduceQuantity}
                width='w-1/2'
              />
              <RiDeleteBinLine className='h-10 w-8 ' />
            </div>
          </div>
          <div className='bg-teal-300 w-1/4 h-1/3 flex flex-col justify-between '>
            <p className='text-base font-semibold flex justify-between'>
              Item Price: <span className='font-light'>ksh 550</span>
            </p>
            <p className='text-base font-semibold flex justify-between'>
              Total: <span className='font-light'>ksh 550</span>
            </p>

            {/* <button className='text-base rounded-md border-black border-2 h-10 w-1/2 '>
              Remove
            </button> */}
          </div>
        </div>

        {/* {cart.cartItems.map((cartItem) => (
          <div>
            <img src={cartItem.productImage} />
            <p>{cartItem.productTitle}</p>
            <p>{cartItem.productSize}</p>
            <p>{cartItem.productColor}</p>
            <p>{cartItem.quantity}</p>
            <p>{cartItem.productPrice}</p>
            <IncrementDecrementQ
              count={cart.count}
              addQuantity={cart.addQuantity}
              reduceQuantity={cart.reduceQuantity}
            />
            <button> Remove</button>
          </div> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default Cart;

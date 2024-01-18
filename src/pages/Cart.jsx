import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import IncrementDecrementQ from "../components/IncrementDecrementQ";
import { ShoppingCartContext } from "../context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useContext(ShoppingCartContext);

  //   console.log(cart.cartItems);

  return (
    <div>
      <NavBar />
      <div className='h-[90%] w-screen pt-20 '>
        <div>
          <p>My Cart</p>

          {cart.cartItems.map((cartItem) => (
            <div
              key={cartItem.productID}
              className=' flex justify-between p-5 h-48 w-3/5'
            >
              <div className='w-1/4  flex justify-center items-center'>
                <img className='h-36 w-30' src={cartItem.productImage} />
              </div>

              <div className=' w-1/4 flex flex-col justify-between'>
                <p className='text-xl font-semibold'>
                  {" "}
                  {cartItem.productTitle}
                </p>
                <p className='text-base font-semibold flex justify-between'>
                  Size:{" "}
                  <span className='font-light'>{cartItem.productSize}</span>
                </p>
                <p className='text-base font-semibold flex justify-between'>
                  Color:{" "}
                  <span className='font-light'>{cartItem.productColor}</span>
                </p>
                <div className='flex justify-between'>
                  <IncrementDecrementQ
                    count={cart.count}
                    addQuantity={cart.addQuantity}
                    reduceQuantity={cart.reduceQuantity}
                    width='w-1/2'
                  />
                  <RiDeleteBinLine
                    className='h-10 w-8 '
                    onClick={() => cart.removeProduct(cartItem.productID)}
                  />
                </div>
              </div>
              <div className='w-1/4 h-1/3 flex flex-col justify-between '>
                <p className='text-base font-semibold flex justify-between'>
                  Item Price:{" "}
                  <span className='font-light'>{cartItem.productPrice}</span>
                </p>
                <p className='text-base font-semibold flex justify-between'>
                  Total: <span className='font-light'>ksh 550</span>
                </p>
              </div>
            </div>
          ))}
          <div className='w-3/5 p-5'>
            <p className='text-2xl font-semibold flex justify-between pb-4 '>
              Order Summary
            </p>
            <p className='text-base font-semibold flex justify-between pb-4'>
              Total: <span className='font-light'>ksh: 30,000</span>
            </p>
            <div className='w-3/5 flex justify-between gap-20'>
              <Link className='rounded-md border-2 border-black  bg-gray-900 text-amber-300 h-16 w-1/2 text-xl font-semibold py-3 px-2'>
                Proceed to Checkout
              </Link>
              <Link
                to='/products'
                className='rounded-md border-2 border-black bg-gray-900 text-amber-300 h-16 w-1/2 text-xl font-semibold py-3 px-2'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* {cart.cartItems.map((cartItem) => (
          <div key={cartItem.productID}>
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
            <button onClick={() => cart.removeProduct(cartItem.productID)}>
              {" "}
              Remove
            </button>
            <p>{cart.itemTotal}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cart;

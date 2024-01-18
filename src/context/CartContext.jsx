import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export const CartContext = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  // Add product to cart function
  const addProduct = (newCartProduct) => {
    setCartItems((prev) => [...prev, newCartProduct]);
  };

  // Increase quantity of product
  const addQuantity = () => {
    if (count < 200) {
      setCount((prevState) => prevState + 1);
    }
  };
  // Increase quantity of product
  const reduceQuantity = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  // Update product price based on quantity
  const updatePrice = () => {};

  // Remove item from cart
  const removeProduct = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productID !== productId));
    // console.log(prev);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addProduct,
        count,
        addQuantity,
        reduceQuantity,
        removeProduct,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItem") || []);

export const CartContext = (props) => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [count, setCount] = useState(0);
  const [itemId, setItemId] = useState(1);

  // Persistence
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

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

  // Remove item from cart
  const removeProduct = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.itemID !== itemId));
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

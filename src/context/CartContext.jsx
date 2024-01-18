import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItem") || []);

export const CartContext = (props) => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [count, setCount] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);

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

  // Update product price based on quantity
  // const updatePrice = () => {
  //   setItemTotal((prev) =>
  //     prev.map((item) => ({
  //       ...item,
  //       total: item.price * item.quantity,
  //     }))
  //   );
  // };

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
        // updatePrice,
        itemTotal,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

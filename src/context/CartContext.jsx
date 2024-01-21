import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItem") || []);

export const CartContext = (props) => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  // Persistence
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart function
  const addProduct = (newCartProduct) => {
    setCartItems((prev) => [...prev, newCartProduct]);
  };

  // Remove item from cart
  const removeProduct = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.itemID !== itemId));
    // console.log(prev);
  };

  // Add cart item quantity
  const addCartItemQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.itemID === itemId ? { ...item, quantity: item.quantity++ } : item
      )
    );
  };

  const reduceCartItemQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.itemID === itemId ? { ...item, quantity: item.quantity-- } : item
      )
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeProduct,
        addCartItemQuantity,
        reduceCartItemQuantity,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

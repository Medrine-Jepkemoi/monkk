import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const IncrementDecrementQ = ({ minValue = 0, maxValue = 200 }) => {
  const [count, setCount] = useState(minValue);

  // Increase quantity of product
  const addQuantity = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };
  // Increase quantity of product
  const reduceQuantity = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="w-1/4 h-10 flex justify-between items-center p-3 border-2 rounded-md border-black  ">
      <button onClick={addQuantity}>
        <FiPlus />
      </button>
      <p>{count}</p>
      <button onClick={reduceQuantity}>
        <FiMinus />
      </button>
    </div>
  );
};

export default IncrementDecrementQ;

import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const IncrementDecrementQ = (props) => {
  return (
    <div className='w-1/4 h-10 flex justify-between items-center p-3 border-2 rounded-md border-black  '>
      <button onClick={() => props.addQuantity()}>
        <FiPlus />
      </button>
      <p>{props.count}</p>
      <button onClick={() => props.reduceQuantity()}>
        <FiMinus />
      </button>
    </div>
  );
};

export default IncrementDecrementQ;

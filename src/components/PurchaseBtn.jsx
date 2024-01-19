import React from "react";

const PurchaseBtn = (props) => {
  return (
    <div
      className={`${props.bgColor} flex justify-center items-center gap-4 rounded-md border-2 border-black h-16 w-full`}
    >
      <img src={props.icon} alt='Buy Icon' className='h-2/3 w-10' />
      <button
        id={props.id}
        onClick={props.handlePurchase}
        // Style as a prop
        className={`${props.textColor} text-base font-medium `}
      >
        {props.label}
      </button>
    </div>
  );
};

export default PurchaseBtn;

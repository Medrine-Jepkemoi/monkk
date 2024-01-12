import React from "react";

const ColorBtn = (props) => {
  return (
    <div>
      <button
        id={props.id}
        onClick={props.clickColor}

        // Style as a prop
        className={`${props.bgColor} border-2 border-black rounded-md h-16 w-20`
        }
      ></button>
    </div>
  );
};

export default ColorBtn;

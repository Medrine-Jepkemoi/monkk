import React from "react";
import { CiLogin } from "react-icons/ci";

const AuthenticationBtn = (props) => {
  return (
    <div>
      <button id={props.id} onClick={props.clickHandler} className="bg-black text-yellow-400 font-normal w-64 h-11 rounded-lg px-6 py-1 flex justify-center items-center space-x-2">
        <div><CiLogin/></div>
        <div>{props.value }</div>
        
      </button>
    </div>
  );
};

export default AuthenticationBtn;

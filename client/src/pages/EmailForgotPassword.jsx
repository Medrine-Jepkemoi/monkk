import React, { useState } from "react";
import TextInput from "../components/TextInput";
import AuthenticationBtn from "../components/AuthenticationBtn";
import AuthImage from "./images/authentication.png";
import MonkBadge from "./images/monkbadge.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom'


const EmailForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Sends email link to reset password");
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="h-full w-1/2 ">
        <div className="flex h-1/6 py-8 pl-3">
          <img src={MonkBadge} alt="Monk Badge" className=" h-8 w-32 " />
        </div>
        <div className=" h-5/6 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-semibold font-mono  text-4xl">
            Forgot your password?
          </h1>
          <div >
            <p className="text-gray-400 text-start ">
              Enter your email to reset your password
            </p>
          </div>
          <TextInput
            id={1}
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmail}
          />
          <AuthenticationBtn
            id={1}
            clickHandler={handleForgotPassword}
            value="Confirm"
          />
          <div className="flex justify-center items-center space-x-2 text-gray-400">
            <IoIosArrowRoundBack />
            <Link to="/">
              <a href="" className=" text-start">
                Return to Login
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">
        <img src={AuthImage} alt="Authentication Image" />
      </div>
    </div>
  );
};

export default EmailForgotPassword;

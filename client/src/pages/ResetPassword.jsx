import React, { useState } from "react";
import TextInput from "../components/TextInput";
import AuthenticationBtn from "../components/AuthenticationBtn";
import AuthImage from "./images/authentication.png";
import MonkBadge from "./images/monkbadge.png";
import { IoIosArrowRoundBack } from "react-icons/io";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("Resets Password");
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="h-full w-1/2 ">
        <div className="flex h-1/6 py-8 pl-3">
          <img src={MonkBadge} alt="Monk Badge" className=" h-8 w-32 " />
        </div>
        <div className=" h-5/6 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-semibold font-mono font text-4xl">
            Set your new password
          </h1>
          <div className="px-20">
            <p className="text-gray-400 text-start px-16">
              Your new password should be different from previously used
              passwords
            </p>
          </div>

          <TextInput
            id={1}
            type="text"
            value={newPassword}
            placeholder="Enter your new password"
            onChange={handleNewPassword}
          />
          <TextInput
            id={1}
            type="text"
            value={confirmPassword}
            placeholder="Confirm new password"
            onChange={handleConfirmPassword}
          />
          <AuthenticationBtn
            id={1}
            clickHandler={handleResetPassword}
            value="Reset Password"
          />
          <div className="flex justify-center items-center space-x-2 text-gray-400">
            <IoIosArrowRoundBack />
            <a href="" className=" text-start">
              Return to Login
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">
        <img src={AuthImage} alt="Authentication Image" />
      </div>
    </div>
  );
};

export default ResetPassword;

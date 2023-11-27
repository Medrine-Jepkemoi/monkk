import React, { useState } from "react";
import TextInput from "../components/TextInput";
import AuthenticationBtn from "../components/AuthenticationBtn";
import AuthImage from "./images/authentication.png";
import MonkBadge from "./images/monkbadge.png"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="h-full w-1/2 ">
        <div className="flex h-1/6 py-8 pl-3">
            <img src={MonkBadge} alt="Monk Badge" className=" h-8 w-32 "/>
        </div> 
        <form
          action=""
          className=" h-5/6 flex flex-col items-center justify-center space-y-4"
        >
          <p className="font-semibold font-mono font text-2xl">Welcome to MONK’s COLLECTION</p>
          <TextInput
            id={3}
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmail}
          />
          <TextInput
            id={4}
            type="text"
            value={password}
            placeholder="Enter your password"
            onChange={handlePassword}
          />
          <a href="" className="text-slate-400 text-start">Forgot Password?</a>
          <AuthenticationBtn
            id={1}
            clickHandler={handleLogin}
            value="Login"
          />
        </form>
      </div>
      <div className="h-full w-1/2">
        <img src={AuthImage} alt="Authentication Image" />
      </div>
    </div>
  );
};

export default Login;

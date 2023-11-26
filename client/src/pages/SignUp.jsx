import React, { useState } from "react";
import TextInput from "../components/TextInput";
import AuthenticationBtn from "../components/AuthenticationBtn";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");

  const handleOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault()
    console.log("Login button clicked")

  }

  return (
    <div>
      <form action="">
        <TextInput
          id={1}
          type="text"
          value={firstName}
          placeholder="firstname"
          onChange={handleOnChange}
        />
        <AuthenticationBtn id={1} clickHandler={handleSignup} value= "Signup" />
      </form>
    </div>
  );
};

export default SignUp;

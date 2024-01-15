import React, { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import AuthenticationBtn from "../components/AuthenticationBtn";
import AuthImage from "../assets/images/fullimg.png";
import MonkBadge from "../assets/images/monkbadge.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='flex h-screen w-screen'>
      <div className='h-full w-1/2 '>
        <div className='flex h-1/6 py-8 pl-3'>
          <img src={MonkBadge} alt='Monk Badge' className=' h-8 w-32 ' />
        </div>
        <form
          action=''
          className=' h-5/6 flex flex-col items-center justify-center space-y-4'
        >
          <p className='font-semibold font-mono font text-2xl'>
            Welcome to MONK’s COLLECTION
          </p>
          <TextInput
            id={1}
            type='text'
            value={firstName}
            placeholder='Enter your first name'
            onChange={handleFirstName}
          />
          <TextInput
            id={2}
            type='text'
            value={lastName}
            placeholder='Enter your last name'
            onChange={handleLastName}
          />
          <TextInput
            id={3}
            type='text'
            value={email}
            placeholder='Enter your email'
            onChange={handleEmail}
          />
          <TextInput
            id={4}
            type='text'
            value={password}
            placeholder='Enter your password'
            onChange={handlePassword}
          />
          <TextInput
            id={5}
            type='text'
            value={phoneNumber}
            placeholder='Enter your phone number'
            onChange={handlePhoneNumber}
          />
          <Link to='/login'>
            <a href='' className='text-slate-400 text-start'>
              Already have an account? Login
            </a>
          </Link>

          <AuthenticationBtn
            id={1}
            clickHandler={handleSignup}
            value='Signup'
          />
        </form>
      </div>
      <div className='h-full w-1/2'>
        <img src={AuthImage} alt='Authentication Image' />
      </div>
    </div>
  );
};

export default SignUp;

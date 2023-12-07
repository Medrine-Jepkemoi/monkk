import React from "react";
import MonkBadge from "./images/monkbadge.png";
import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex space-x-150 place-content-between px-8 bg-transparent">
      <div className=" h-16 py-4">
        <img src={MonkBadge} alt="" className="h-8 w-32" />
      </div>
      <ul className="h-16 flex justify-center items-center space-x-6 text-base font-bold ">
      <li className="hover:text-slate-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-slate-200">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="hover:text-slate-200">
          <Link to="/products">Shop</Link>
        </li>
      </ul>
      <ul className="h-16 flex justify-center items-center space-x-6 text-base font-bold">
        <li>
          <FaSearch />
        </li>
        <li>
          <HiMiniShoppingCart />
        </li>
        <li>
          <RiAccountCircleFill />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

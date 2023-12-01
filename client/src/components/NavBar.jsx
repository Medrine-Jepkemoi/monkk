import React from "react";
import MonkBadge from "./images/monkbadge.png";
import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { RiAccountCircleFill } from "react-icons/ri";



const NavBar = () => {
  return (
    <div className="flex space-x-150 place-content-between px-8 bg-transparent">
      <div className=" h-16 py-4">
        <img src={MonkBadge} alt="" className="h-8 w-32"/>
      </div>
      <ul className='h-16 flex justify-center items-center space-x-6 text-base font-bold'>
        <li>About Us</li>
        <li>Shop</li>
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

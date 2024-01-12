import React, { useState } from "react";
import MonkBadge from "../assets/images/monkbadge.png";
import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [product, setProduct] = useState("");
  const [searchBar, setSearchBar] = useState(false)
  const [searchIcon, setSearchIcon] = useState(true)

  const handleSearch = (e) => {
    setProduct(e.target.value);
  };

  const showSearchBar = () => {
    setSearchBar(!searchBar)
    console.log("Search Bar")
  }


  return (
    <div className="flex items-center space-x-150 place-content-between px-8  bg-transparent h-[10%] w-screen fixed top-0">
      <img src={MonkBadge} alt="Monk Logo" className="h-1/2 " />

      <ul className="h-full flex justify-center items-center space-x-6 text-base font-bold ">
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
      <ul className="flex justify-center items-center space-x-6 text-base font-bold">
        {searchBar && <input
          type="text"
          value={product}
          placeholder="Product, Categories"
          onChange={handleSearch}
          className="bg-transparent h-8 w-fit  text-gray-500  border border-md border-black placeholder:text-gray-500"
        />}
        <li>
          <FaSearch 
          onClick={showSearchBar} 
          />
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

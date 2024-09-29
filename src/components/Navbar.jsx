import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const menuItems = ["Mens", "Women", "Accessories", "Watches", "Jewellery"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-slate-400 shadow-lg lg:px-40 md:px-20 sm:px-20">
        <div className="flex justify-between items-center mr-5">
          <img src={Logo} alt="Logo" width={50} />
          <span className="text-black text-lg font-medium">Dressy Dazzle</span>
        </div>

        <ul className="hidden space-x-5 font-semibold text-black sm:flex font-poppins">
          {menuItems.map((item) => (
            <button key={item} className="hover:text-white">
              {item}
            </button>
          ))}
        </ul>

        <button
          className="px-3 text-white sm:hidden focus:outline-none"
          onClick={handleToggle}
        >
          {isNavbarOpen ? <LuX size={25} /> : <LuMenu size={25} />}
        </button>
        <div className="flex justify-start items-center">
          <a href="/login">
            <FaCircleUser className="text-xl hover:text-white mr-5" />
          </a>
          <IoMdCart className="text-xl hover:text-white mr-5" />
        </div>
      </nav>

      {isNavbarOpen && (
        <div className="fixed top-0 right-0 w-full h-full text-lg text-black bg-gray-400 transition-transform duration-700 transform translate-x-0  shadow-2xl z-50">
          <button
            onClick={handleToggle}
            className="absolute top-0 right-0 p-4 text-3xl text-red-600"
          >
            <LuX />
          </button>
          <ul className="flex flex-col p-4 space-y-5 items-center text-4xl font-semibold text-black font-poppins mt-20">
            {menuItems.map((section) => (
              <button
                key={section}
                className="text-left hover:text-white"
                onClick={() => {
                  setIsNavbarOpen(false);
                }}
              >
                {section}
              </button>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

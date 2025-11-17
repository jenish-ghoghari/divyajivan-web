import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import logo from "../../../assets/Divyajivan-Lifescience-Logo.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "FORMULATION", path: "/formulation" },
    { name: "SERVICES", path: "/services" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 lg:px-10 py-6 z-20 text-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-9" />

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex gap-10 text-sm tracking-wide">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-teal-200 font-semibold border-b-2 pb-1 border-teal-200"
                : "hover:text-teal-200 transition-all"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Contact */}
      <div className="hidden lg:flex items-center gap-4">
        <FaPhoneAlt className="text-teal-400" />
        <span className="text-sm font-medium">
          <a href="tel:+916357779200">+91 63577 79200</a>
        </span>

        <button className="ml-4 bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-full text-sm font-semibold transition-all">
          CONTACT US
        </button>
      </div>

      {/* Mobile Burger Button */}
      <button className="lg:hidden text-3xl" onClick={() => setOpen(true)}>
        <HiBars3BottomLeft />
      </button>

      {/* Social Icons (Desktop Right Side) */}
      <div className="absolute right-8 top-24 hidden lg:flex flex-col items-center gap-4 z-20">
        <FaFacebookF className="text-white/80 hover:text-white cursor-pointer" />
        <FaInstagram className="text-white/80 hover:text-white cursor-pointer" />
        <FaLinkedinIn className="text-white/80 hover:text-white cursor-pointer" />
        <FaSearch className="text-white/80 hover:text-white cursor-pointer" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-[999] p-6 flex flex-col gap-6 text-gray-800 transform transition-transform duration-300 ease-out 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button className="text-3xl self-end" onClick={() => setOpen(false)}>
          <BiX />
        </button>

        {/* Sidebar Links */}
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-md  ${
                isActive ? "text-teal-600 font-medium" : "text-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Phone */}
        <div className="flex items-center gap-3 mt-4">
          <FaPhoneAlt className="text-teal-500" />
          <span className="font-semibold">
            <a href="tel:+916357779200">+91 63577 79200</a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-gray-700 text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaSearch />
        </div>
      </div>
    </header>
  );
}

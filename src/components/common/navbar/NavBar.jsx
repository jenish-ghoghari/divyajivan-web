import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import logo from "../../../assets/Divyajivan-Lifescience-Logo.svg";
export default function NavBar() {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex gap-10 text-sm tracking-wide">
        <a
          href="/"
          className="text-[#0af] font-medium border-b border-[#0af] pb-1"
        >
          HOME
        </a>
        <a href="/about">ABOUT US</a>
        <a href="/formulation">Formulation</a>
        <a href="/services">SERVICES</a>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT US</a>
      </nav>

      {/* Contact + Button */}
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-teal-400" />
        <span className="text-sm font-medium">
          <a href="tel:+916357779200">+91 63577 79200</a>
        </span>
        <button className="ml-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
          CONTACT US
        </button>
      </div>

      {/* Social Icons */}
      <div className="absolute right-8 top-24 flex flex-col items-center gap-4 z-20">
        <FaFacebookF className="text-white/80 hover:text-white cursor-pointer" />
        <FaInstagram className="text-white/80 hover:text-white cursor-pointer" />
        <FaLinkedinIn className="text-white/80 hover:text-white cursor-pointer" />
        <FaSearch className="text-white/80 hover:text-white cursor-pointer" />
      </div>
    </header>
  );
}

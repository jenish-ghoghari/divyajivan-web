import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import indiaFlag from "../../../assets/inadifag.png";
import usaFlag from "../../../assets/usaflag.jpg";
import logo from "../../../assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & Social */}
          <div className="text-center md:text-left">
            <div className="mb-5 flex justify-center md:justify-start">
              <img src={logo} alt="Divya Jivan" className="w-40" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Collaborate with Leaders in Quality Healthcare. Ensuring
              Reliability and Consistency.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-primary-lightBlue transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-primary-lightBlue cursor-pointer">
                Home
              </li>
              <li className="hover:text-primary-lightBlue cursor-pointer">
                About Us
              </li>
              <li className="hover:text-primary-lightBlue cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-primary-lightBlue cursor-pointer">
                Career
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Our Global Offices</h2>
            <div className="space-y-5 text-gray-400">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <img src={indiaFlag} alt="India" className="w-6 h-4" />
                  <h3 className="font-semibold text-white">India</h3>
                </div>
                <p className="mt-1 text-sm">
                  Zircon Arena, Near Pal Haveli, PAL - RTO, Hazira Road, Surat -
                  394510, Gujarat
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <img src={usaFlag} alt="USA" className="w-6 h-4" />
                  <h3 className="font-semibold text-white">USA</h3>
                </div>
                <p className="mt-1 text-sm">
                  631 Doschar LN, Sugar Land, TX 77479
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Divyajivan Healthcare. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const navItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Formulation", url: "/formulation" },
  { id: 6, name: "Services", url: "/services" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-green-700/20 py-3 px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MdEmail className="text-gray-900 text-xl" />
          <p className="font-semibold">
            Email:{" "}
            <a
              href="mailto:info@divyajivanhealth.org"
              className="text-gray-700 hover:text-blue-600"
            >
              info@divyajivanhealth.org
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 text-center md:text-left">
          <MdLocationOn className="text-gray-900 text-xl" />
          <p className="font-medium text-gray-900">
            Address:{" "}
            <span className="text-gray-700 font-medium">
              Zircon Arena, Near Pal Haveli, PAL - RTO, Hazira Road, Surat,
              Gujarat - 394510
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-gray-900 text-xl" />
          <Link
            to="tel:+919426417722"
            className="font-semibold text-gray-700 hover:text-blue-600"
          >
            +91 94264 17722
          </Link>
        </div>
      </div>
      <nav
        className={`sticky top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white"
            : "bg-white border-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-5 relative">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} className="h-8 sm:h-8 " alt="logo" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  className="px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white border-none"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1 p-2 z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Contact Button (Always Visible on Mobile) */}
          <Link
            to="contact"
            className="lg:hidden absolute right-4 top-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm z-[55]"
          >
            Contact
          </Link>
        </div>

        {/* Fullscreen Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-lg font-medium"
            >
              <ul className="flex flex-col items-center gap-6 text-gray-800">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl hover:text-purple-600 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;

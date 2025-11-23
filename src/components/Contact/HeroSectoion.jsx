import React from "react";
import { motion } from "framer-motion";
import NavBar from "../common/navbar/NavBar";
import banner from "../../assets/banner.jpg";

export default function HeroSection() {
  return (
    <motion.section
      className="relative p-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-full h-[55vh] lg:h-[55vh] overflow-hidden rounded-3xl text-white">
        {/* Background Image with Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#032f5a]/90 via-[#043e7d]/70 to-transparent" />
        </div>

        {/* Navbar */}
        <NavBar />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-4xl drop-shadow-lg">
              Comprehensive Range of Pharmaceutical Formulations
            </h1>

            <p className="mt-4 text-md md:text-lg lg:text-xl italic  md:max-w-3xl text-gray-100">
              Explore our diverse portfolio of high-quality medicines —
              scientifically developed to ensure safety, efficacy, and global
              healthcare excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

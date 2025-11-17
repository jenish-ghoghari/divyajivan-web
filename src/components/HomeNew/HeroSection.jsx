import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../common/navbar/NavBar";
import pharmaCapsule from "../../assets/pharmaCapsule.jpg";
import pharmaWorld from "../../assets/pharmaWorld.jpg";
import { Link } from "react-router-dom";

// Each slide with unique gradient overlay (left → right)
const slides = [
  {
    image: pharmaWorld,
    title: "Global Pharmaceutical Manufacturer & Exporter",
    subtitle: "Transforming Lives Through Health",
    gradient:
      "bg-gradient-to-b from-[#032f5a]/90 via-[#043e7d]/70 to-transparent",
  },
  {
    image: pharmaCapsule,
    title: "Leading Innovation in Health & Wellness",
    subtitle: "Transforming Lives Through Health",
    gradient:
      "bg-gradient-to-br from-[#0a3d62]/90 via-[#115173]/70 to-transparent",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  // Reset timer and restart interval
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000); // 8 seconds
  };

  useEffect(() => {
    resetTimer(); // Start timer on mount
    return () => clearInterval(timerRef.current); // Cleanup
  }, []);

  const slide = slides[current];

  return (
    <motion.section
      className="relative p-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-full h-[90vh] lg:h-[95vh] overflow-hidden rounded-3xl text-white">
        {/* Background Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            <div className={`absolute inset-0 ${slide.gradient}`} />
          </motion.div>
        </AnimatePresence>

        {/* Common Header */}
        <NavBar />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col  justify-center px-8 md:px-20 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-teal-400 text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl drop-shadow-lg">
                {slide.title}
              </h1>
            </motion.div>
          </AnimatePresence>
          <Link to={"/contact"} className="bg-teal-400 py-3 px-4 mt-12 w-fit rounded-xl font-bold text-md">
            Contact Us
          </Link>
        </div>

        {/* Prev / Next Controls */}
        <div className="absolute bottom-0 right-0 z-10">
          <div className="bg-white relative text-gray-600 px-6 py-6 rounded-tl-3xl flex items-center gap-6 text-sm font-medium">
            <button
              onClick={prevSlide}
              className="hover:text-black transition-colors duration-200"
            >
              PREV
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={nextSlide}
              className="hover:text-black transition-colors duration-200"
            >
              NEXT
            </button>
          </div>

          {/* Decorative corners */}
          <div className="absolute -left-10 bottom-0 w-10 h-10 rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="fill-white"
            >
              <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="white"></path>
            </svg>
          </div>
          <div className="absolute right-0 -top-10 w-10 h-10 rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

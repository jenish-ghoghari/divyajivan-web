import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { motion } from "framer-motion";

// IMAGES
import banner from "../../assets/lab.jpeg";
import NavBar from "../common/navbar/NavBar";

const HeroSection = ({ pageData }) => {
  return (
    <motion.section
      className="relative p-4 sm:p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="relative w-full h-[65vh] md:h-[70vh] rounded-3xl overflow-hidden text-white shadow-xl">
        {/* BG IMAGE + GRADIENT */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-radial from-[#00162c]/60 to-[#000f1e]" />
        </div>

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <NavBar />
        </div>

        {/* MAIN CONTENT */}
        <div className="absolute inset-0 grid grid-cols-1 px-6 md:px-14 items-center z-10">
          {/* LEFT SIDE ONLY (Right side removed) */}
          <motion.div
            className="space-y-6  lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              
              <h1 className="text-2xl md:text-5xl font-bold drop-shadow-xl leading-tight">
                {pageData?.pageTitle}
              </h1>
            </div>

            <p className="text-gray-200 text-sm md:text-xl md:max-w-2xl ">
              {pageData?.pageDescription}
            </p>

            {pageData?.pageSubDescription && (
              <p className="text-gray-100 italic text-sm md:text-lg md: max-w-2xl">
                {parse(pageData?.pageSubDescription)}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};



export default HeroSection;

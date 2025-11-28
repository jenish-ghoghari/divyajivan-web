import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { motion } from "framer-motion";

// IMAGES
import banner from "../../assets/Lab.jpeg";
import NavBar from "../common/navbar/NavBar";

// Define the product types
const productTypes = [
  { name: "Capsules", to: "/products/capsules" },
  { name: "Tablets", to: "/products/tablets" },
  { name: "External Preparations", to: "/products/external-preparations" },
];

const HeroSection = ({ pageData }) => {
  const location = useLocation();

  return (
    <motion.section
      className="relative p-4 sm:p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="relative w-full h-[65vh] md:h-[70vh] rounded-3xl overflow-hidden text-white shadow-xl">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${pageData?.pageBannerImage || banner})`,
          }}
        />

        {/* BEAUTIFUL LINEAR GRADIENT OVERLAY */}
        <div
          className="
          absolute inset-0 
          bg-gradient-to-br
          from-[#00162c]/80 
          via-[#00162c]/65 
          to-[#000a14]/90
        "
        />

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <NavBar />
        </div>

        {/* MAIN CONTENT */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 px-6 md:px-14 items-center z-10">
          {/* LEFT SIDE TEXT */}
          <motion.div
            className="space-y-6 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-5xl font-bold drop-shadow-xl leading-tight">
              {pageData?.pageTitle}
            </h1>

            <p className="text-gray-200 text-sm md:text-xl md:max-w-2xl">
              {pageData?.pageDescription}
            </p>

            {pageData?.pageSubDescription && (
              <p className="text-gray-100 italic text-sm md:text-lg md:max-w-2xl">
                {parse(pageData?.pageSubDescription)}
              </p>
            )}
          </motion.div>

          {/* RIGHT — PRODUCT LINKS (desktop only) */}
          <motion.div
            className="hidden lg:flex justify-end items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {productTypes.map((item, index) => {
                const isActive = location.pathname === item.to;

                return (
                  <Link
                    key={index}
                    to={item.to}
                    className={`
                      px-6 py-3 text-lg font-medium rounded-2xl backdrop-blur-md shadow-xl transition duration-300
                      min-w-[250px] text-center
                      ${
                        isActive
                          ? "bg-teal-500 text-white shadow-teal-500/50 hover:bg-teal-600"
                          : "bg-white/10 text-gray-200 hover:bg-white/20"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

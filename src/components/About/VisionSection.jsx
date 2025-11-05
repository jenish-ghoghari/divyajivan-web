import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaAward } from "react-icons/fa";

const data = [
  {
    icon: <FaEye className="text-4xl" />,
    title: "Our Vision",
    text: "Our vision is to achieve Excellence in Formulation and to be the most respected Pharma company that Empowers Life Sciences with Quality and Innovation.",
  },
  {
    icon: <FaBullseye className="text-4xl" />,
    title: "Our Mission",
    text: "Innovative and affordable products that address the needs and satisfaction of our customers.",
  },
  {
    icon: <FaAward className="text-4xl" />,
    title: "Quality",
    text: "The Divyajivan Lifescience is a values-led organization that works toward Quality, Purity, and Safety of Drug Products, integrity of products, Excellence of People, Continuous Improvement, and Compliance with the latest regulatory requirements to Care for the World.",
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 sm:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg p-10 pt-20 text-center overflow-visible transform transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 1 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              {/* Background zoom overlay (fades in on hover) */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-700 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Icon (above card) */}
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="w-24 h-24 bg-purple-700 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white">
                  <div className="transition-all duration-500 text-white group-hover:text-purple-700">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6 transition-colors duration-500 group-hover:text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-100">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

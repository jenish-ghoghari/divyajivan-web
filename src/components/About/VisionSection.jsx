import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaAward } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const data = [
  {
    id: "01",
    icon: <FaEye className="text-6xl text-[#0E2B5C] mx-auto" />,
    title: "Our Vision",
    text: "Our vision is to achieve Excellence in Formulation and to be the most respected Pharma company that Empowers Life Sciences with Quality and Innovation.",
  },
  {
    id: "02",
    icon: <FaBullseye className="text-6xl text-[#0E2B5C] mx-auto" />,
    title: "Our Mission",
    text: "Innovative and affordable products that address the needs and satisfaction of our customers.",
  },
  {
    id: "03",
    icon: <FaAward className="text-6xl text-[#0E2B5C] mx-auto" />,
    title: "Quality",
    text: "Divyajivan Lifescience is a values-led organization that works toward Quality, Purity, and Safety of Drug Products, integrity of products, Excellence of People, Continuous Improvement, and Compliance with the latest regulatory requirements to Care for the World.",
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 bg-gray-100/80 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Vision, Mission & Quality
        </motion.h2>

        {/* Animated Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative bg-white rounded-3xl transition-all duration-500 p-8 flex flex-col min-h-[320px] group hover:shadow-2xl"
            >
              {/* Number */}
              <span className="text-sm text-gray-400 font-medium">
                {item.id}
              </span>

              {/* Icon */}
              <div className="flex justify-end mt-4">{item.icon}</div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-[#0E2B5C] leading-snug">
                {item.title}
              </h3>

              {/* Text */}
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                {item.text}
              </p>

              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

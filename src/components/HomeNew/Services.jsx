import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GiTestTubes, GiChemicalDrop, GiChemicalTank } from "react-icons/gi";
import { FaFlask } from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaFlask className="text-5xl text-blue-900 mx-auto" />,
    title: "Contract Manufacturing (CDMO)",
  },
  {
    id: "02",
    icon: <GiChemicalDrop className="text-5xl text-blue-900 mx-auto" />,
    title: "Third-Party Manufacturing",
  },
  {
    id: "03",
    icon: <GiTestTubes className="text-5xl text-blue-900 mx-auto" />,
    title: "Regulatory Services",
  },
  {
    id: "04",
    icon: <GiChemicalTank className="text-5xl text-blue-900 mx-auto" />,
    title: "Contract Research and Manufacturing Services",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 bg-gray-100/80">
      <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white rounded-3xl transition-all duration-500 p-8 flex flex-col justify-between min-h-[260px] group "
          >
            {/* Number */}
            <span className="text-sm text-gray-400 font-medium">
              {service.id}
            </span>

            {/* Icon */}
            <div className="flex justify-end mt-4">{service.icon}</div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-[#0E2B5C] leading-snug">
              {service.title}
            </h3>

            {/* Floating Arrow */}
            <div className="absolute bg-gray-100/80 rounded-tl-3xl p-1.5 -bottom-0 -right-0">
              <div
                className="bg-white rounded-full w-12 h-12 flex items-center justify-center 
                transition-all duration-500 ease-in-out
                group-hover:bg-blue-600 group-hover:rotate-[135deg]"
              >
                <FiArrowUpRight
                  className="text-[#0E2B5C] text-lg transition-all duration-500 ease-in-out 
                  group-hover:text-white group-hover:rotate-[-90deg]"
                />
              </div>

              {/* Corner SVG shapes */}
              <div className="absolute -left-5 bottom-0 w-5 h-5 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="fill-gray-100/80"
                >
                  <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z"></path>
                </svg>
              </div>
              <div className="absolute right-0 -top-5 bottom-0 w-5 h-5 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="fill-gray-100/80"
                >
                  <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

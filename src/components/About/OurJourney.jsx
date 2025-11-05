import React from "react";
import {
  FaLightbulb,
  FaMapMarkerAlt,
  FaIndustry,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";

const timelineData = [
  {
    year: "2021 – Vision Begins",
    title: "Idea & Planning",
    text: "Thought of starting a pharmaceutical manufacturing plant with the mission to provide innovative and affordable medicines.",
    icon: <FaLightbulb className="text-yellow-500 text-xl" />,
  },
  {
    year: "2022 – Foundation & Setup",
    title: "Location & Setup",
    text: "Selected the site and started groundwork for world-class pharmaceutical manufacturing facilities.",
    icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
  },
  {
    year: "2023 – Plant Construction",
    title: "Manufacturing Unit",
    text: "State-of-the-art plant construction initiated, focused on quality and regulatory standards.",
    icon: <FaIndustry className="text-blue-500 text-xl" />,
  },
  {
    year: "2024 – Licensing Milestone",
    title: "Schedule M 25 & 28 Licenses",
    text: "Achieved key licenses to manufacture tablets, capsules, ointments, and syrups.",
    icon: <FaCertificate className="text-green-500 text-xl" />,
  },
  {
    year: "2025 – Quality Certifications",
    title: "Global Standards",
    text: "Secured State GMP and WHO-GMP certifications, ensuring compliance with international benchmarks.",
    icon: <FaCertificate className="text-indigo-500 text-xl" />,
  },
  {
    year: "2026 – Expanding Global Footprints",
    title: "International Registrations",
    text: "Upcoming registrations in Tanzania, Zimbabwe, and Kenya, building trust across borders.",
    icon: <FaGlobe className="text-teal-500 text-xl" />,
  },
];

const OurJourney = () => {
  return (
    <section className="w-full  py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">
          Our Journey
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Connector line for mobile */}
                {index !== timelineData.length - 1 && (
                  <div className="absolute left-[1.9rem] top-10 w-0.5 h-full bg-gray-200 sm:hidden"></div>
                )}

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 bg-white border-2 border-gray-200 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:w-1/2 transition-all duration-300 hover:shadow-md ${
                    index % 2 === 0 ? "sm:text-left" : "sm:text-right"
                  }`}
                >
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    📅 {item.year}
                  </p>
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

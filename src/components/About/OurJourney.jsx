import React from "react";
import {
  FaLightbulb,
  FaMapMarkerAlt,
  FaIndustry,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const timelineData = [
  {
    year: "2021 – Vision Begins",
    title: "Idea & Planning",
    text: "Thought of starting a pharmaceutical manufacturing plant with the mission to provide innovative and affordable medicines.",
    icon: <FaLightbulb className="text-5xl text-blue-900 mx-auto" />,
  },
  {
    year: "2022 – Foundation & Setup",
    title: "Location & Setup",
    text: "Selected the site and started groundwork for world-class pharmaceutical manufacturing facilities.",
    icon: <FaMapMarkerAlt className="text-5xl text-blue-900 mx-auto" />,
  },
  {
    year: "2023 – Plant Construction",
    title: "Manufacturing Unit",
    text: "State-of-the-art plant construction initiated, focused on quality and regulatory standards.",
    icon: <FaIndustry className="text-5xl text-blue-900 mx-auto" />,
  },
  {
    year: "2024 – Licensing Milestone",
    title: "Schedule M 25 & 28 Licenses",
    text: "Achieved key licenses to manufacture tablets, capsules, ointments, and syrups.",
    icon: <FaCertificate className="text-5xl text-blue-900 mx-auto" />,
  },
  {
    year: "2025 – Quality Certifications",
    title: "Global Standards",
    text: "Secured State GMP and WHO-GMP certifications, ensuring compliance with international benchmarks.",
    icon: <FaCertificate className="text-5xl text-blue-900 mx-auto" />,
  },
  {
    year: "2026 – Expanding Global Footprints",
    title: "International Registrations",
    text: "Upcoming registrations in Tanzania, Zimbabwe, and Kenya, building trust across borders.",
    icon: <FaGlobe className="text-5xl text-blue-900 mx-auto" />,
  },
];

const OurJourney = () => {
  return (
    <section className="py-16 bg-gray-100/80">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
          Milestones Reached in Our Journey of Growth & Innovation{" "}
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl transition-all duration-500 p-8 flex flex-col gap-5  min-h-[300px] group"
            >
              {/* Year */}
              <span className="text-sm text-gray-400 font-medium mb-2">
                {item.year}
              </span>

              {/* Icon */}
              <div className="flex justify-end mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0E2B5C] leading-snug mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

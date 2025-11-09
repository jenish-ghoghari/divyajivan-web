import React from "react";
import { Link } from "react-router-dom";
import serviceOne from "../../assets/service1.jpg";
import serviceTwo from "../../assets/service2.jpg";
import serviceThree from "../../assets/service3.jpg";
const services = [
  {
    title: "Contract Manufacturing",
    description: "Your Reliable Manufacturing Partner.",
    image: serviceOne,
    points: [
      "Long-term strategic partnerships.",
      "Development, validation, and manufacturing of pharmaceutical ingredients & formulations.",
      "Third-party manufacturing for branded generics across dosage forms.",
      "Strong Quality Control & Quality Assurance systems.",
      "Large-scale production capabilities.",
      "Trusted by leading Indian pharmaceutical companies.",
    ],
  },
  {
    title: "CRAMS",
    description: "Contract Research and Manufacturing Services.",
    image: serviceTwo,
    points: [
      "Extending beyond traditional CMO.",
      "Seamless integration of R&D and manufacturing.",
      "Supports product conceptualization to commercialization.",
      "Formulation development, analytical methods, stability studies, pilot-scale.",
    ],
  },
  {
    title: "Regulatory Services",
    description: "Expert Guidance Through Regulatory Landscapes.",
    image: serviceThree,
    points: [
      "Comprehensive support for the entire product lifecycle.",
      "Ensuring regulatory compliance and market access.",
      "Dossier preparation & submission.",
      "Regulatory compliance management.",
      "Variations and renewals.",
      "Technical documentation.",
      "Liaison with regulatory authorities.",
    ],
  },
];

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Delivering excellence through research, manufacturing, and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Title Bar (slides up on hover) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 transition-all duration-500 group-hover:bottom-full group-hover:opacity-0 p-4">
              <h4 className="text-white text-center font-semibold text-lg">
                {service.title}
              </h4>
            </div>

            {/* Content Overlay (slides up into view) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-sky-600/95 to-blue-800/95 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out p-6 flex flex-col justify-start text-left overflow-y-auto h-[100%]">
              <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
              <p className="text-sky-100 font-bold text-xl mb-4">
                {service.description}
              </p>
              <ul className="text-base space-y-2 list-disc list-inside max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

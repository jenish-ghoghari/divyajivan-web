import React from "react";
import { BsCapsulePill } from "react-icons/bs";
import {
  FaCapsules,
  FaFlask,
  FaMountain,
  FaPills,
  FaTablets,
} from "react-icons/fa";

const infrastructureFeatures = [
  {
    title: "Separate Air Handling Unit (AHU)",
    description:
      "Each of the primary packaging departments has its own separate AHUs for each zone.",
  },
  {
    title: "Separate Defined Areas",
    description:
      "Critical processing zones are separated to avoid cross-contamination.",
  },
  {
    title: "In-House Purify Water Plant",
    description: "Used for Reverse Osmosis Water and Demineralized Water.",
  },
  {
    title: "ETP Installed",
    description:
      "Installed as per Gujarat Pollution Control Board (GPCB) standards.",
  },
  {
    title: "Physiochemical Laboratory",
    description:
      "Fully equipped in-house Physiochemical laboratory for quality testing.",
  },
  {
    title: "Air-Curtains & PVC Curtains Installed",
    description: "Installed at required entries to prevent air contamination.",
  },
  {
    title: "Microbiology Laboratory",
    description:
      "Fully equipped in-house Microbiology laboratory for testing and analysis.",
  },
  {
    title: "Air Compression",
    description: "Equipped with moisture separator for clean air supply.",
  },
  {
    title: "Separate Dispensing Booths",
    description:
      "Separate booths for API and Excipients to avoid cross-contamination.",
  },
  {
    title: "An Elevator",
    description: "Elevator provided for safe and efficient material handling.",
  },
  {
    title: "Security",
    description: "24-hour security system for plant safety.",
  },
  {
    title: "Fire Extinguisher",
    description:
      "Plant fully equipped with fire extinguishers for safety compliance.",
  },
  {
    title: "Air Conditioning Provided",
    description:
      "Air conditioning available wherever required — R.M. Storage, P.M. Storage, Secondary Packaging, Retain Sample, Instrument Lab, etc.",
  },
];

export default function OurFacilitySection() {
  return (
    <section className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 mb-10">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-10">
        Facilities we provide{" "}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructureFeatures.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl  transition-all p-8  border border-gray-200"
          >
            <h3 className={`text-2xl  font-semibold`}>{item.title}</h3>
            <p className="text-gray-600 mt-4 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

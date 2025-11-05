import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";

import doctorImage from "../../assets/doctor.jpg"; // 🩺 your image path here
import HealthSection from "../../assets/HealthSections.png";

const VisionMissionSection = () => {
  return (
    <section className="w-full py-8 sm:py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col md:flex-row items-center  gap-4 sm:gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={doctorImage}
              alt="Doctor with patient"
              className="rounded-2xl shadow-lg w-full max-w-xl"
            />
            <div className="absolute bottom-[-20px] right-[-20px] hidden sm:block bg-white py-4 px-6 rounded-2xl">
              <img src={HealthSection} className="text-green-500 w-20" />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-gray-800">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Our Vision
            </h2>
            <p className="mt-3 text-sm sm:text-lg text-gray-600 leading-relaxed">
              Transforming the community where every person has a healthy life.
            </p>
          </div>
          <div className="h-[2px] w-24 bg-lime-500"></div>

          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-3 text-sm sm:text-lg text-gray-600 leading-relaxed">
              To develop a healthcare system where quality service is provided
              with a humane approach at affordable cost.
            </p>

            <button className="mt-6 border border-lime-500 text-gray-800 px-6 py-2 rounded-md hover:bg-lime-500 hover:text-white transition duration-300">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;

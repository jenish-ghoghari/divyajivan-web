import React from "react";
import { FaFlask, FaMicroscope, FaVials, FaCapsules } from "react-icons/fa";
import microscopeImg from "../../assets/lab.jpeg";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaFlask className="text-white text-2xl" />,
    title: "Contract Manufacturing (CDMO) Services",
    description: "Tailored to meet diverse healthcare needs.",
  },
  {
    icon: <FaMicroscope className="text-white text-2xl" />,
    title: "Custom Pharmaceutical Solutions",
    description: "Developed with cutting-edge technology.",
  },
  {
    icon: <FaVials className="text-white text-2xl" />,
    title: "Third-party Manufacturing Partnerships",
    description: "With leading healthcare brands.",
  },
  {
    icon: <FaCapsules className="text-white text-2xl" />,
    title: "Pharmaceutical Formulations",
    description: "That meet international quality standards.",
  },
];

const PharmaSection = () => {
  return (
    <section className="w-full py-12  lg:py-20  sm:py-16">
      <div className="container mx-auto px-5 lg:px-12   grid grid-cols-1 lg:grid-cols-3 gap-10 xl:items-center ">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-teal-600 font-semibold uppercase tracking-wide mb-3 flex items-center gap-2">
            Manufacturing & Global Export
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight mb-5">
            Excellence in Pharmaceutical Manufacturing & Global Export
          </h2>
          <p className="text-gray-600 mb-8">
            With decades of expertise in pharmaceutical manufacturing, we’ve
            earned our position among the top pharmaceutical companies in Surat.
            Our comprehensive range of services includes:
          </p>
          <Link
            to="/about"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition"
          >
            About Us
          </Link>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <img
            src={microscopeImg}
            alt="Microscope"
            className="hidden lg:block md:w-80 lg:w-96 h-100  object-cover rounded-4xl"
          />
        </div>

        {/* RIGHT SERVICES */}
        <div className="space-y-6 md:space-x-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="bg-teal-500 w-14 h-14 rounded-full flex justify-center items-center flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-md md:text-lg font-semibold text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaSection;

import React from "react";
import Marquee from "react-fast-marquee";
import bgImage from "../../assets/Lab.jpeg"; // <-- Add your image here

const CoreValues = () => {
  const coreValues = [
    {
      title: "Patient-Centric Approach",
      content:
        "Every action we take is motivated by a desire to enhance people’s lives.",
    },
    {
      title: "Team Culture",
      content:
        "We foster a collaborative environment where diverse perspectives are valued and mutual support empowers every team member to excel.",
    },
    {
      title: "Responsibility",
      content:
        "We take proactive ownership of our actions and decisions, ensuring accountability at every level of our operations.",
    },
    {
      title: "Uncompromised Quality",
      content:
        "We are steadfast in our dedication to manufacturing medications that adhere to the strictest global standards.",
    },
    {
      title: "Affordability for All",
      content:
        "We strive to make healthcare accessible and affordable for everyone without compromising on quality.",
    },
    {
      title: "Innovation at Heart",
      content:
        "We are always seeking technological and formulation advancements to give patients the best medical treatments.",
    },
    {
      title: "Respect",
      content:
        "We honor the dignity and worth of every individual, respect the environment, and adhere to all ethical standards.",
    },
    {
      title: "Integrity First",
      content:
        "We hold ourselves to the highest ethical and transparent standards in everything we do.",
    },
  ];

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-radial from-black/65 to-black "></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Our Core Values
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            These principles guide our mission to deliver excellence and
            compassion in every step we take.
          </p>
        </div>

        {/* Marquee section */}
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="w-90 min-h-40 bg-white/90 backdrop-blur-lg rounded-2xl p-6 mx-4 border border-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 text-base">{value.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CoreValues;

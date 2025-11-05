import React from "react";
import { FaUserShield, FaUsers } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { LuLightbulb } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";

const data = [
  {
    letter: "D",
    color: "text-green-600",
    title: "Dependability",
    icon: <FaUserShield className="text-4xl text-green-500" />,
  },
  {
    letter: "I",
    color: "text-black",
    title: "Innovativeness",
    icon: <LuLightbulb className="text-4xl text-green-500" />,
  },
  {
    letter: "V",
    color: "text-green-600",
    title: "Versatility",
    icon: <FaBriefcaseMedical className="text-4xl text-green-500" />,
  },
  {
    letter: "Y",
    color: "text-black",
    title: "Youthfulness",
    icon: <FaUsers className="text-4xl text-green-500" />,
  },
  {
    letter: "A",
    color: "text-green-600",
    title: "Affordability",
    icon: <GiMedicinePills className="text-4xl text-green-500" />,
  },
];

const DivyaMeaningSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 container mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
          Meaning of <span className="text-black">DIVYA</span>
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Every letter in <span className="font-semibold">DIVYA</span> represents our core values
        </p>
      </div>

      {/* Desktop & Tablet View */}
      <div className="hidden md:flex justify-center items-start max-w-6xl mx-auto gap-8 lg:gap-12">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[18%] text-center relative">
            {/* Letter */}
            <span className={`text-5xl font-bold mb-3 ${item.color}`}>
              {item.letter}
            </span>

            {/* Dotted Line */}
            <div className="w-[2px] h-10 border-l border-dashed border-gray-400 mb-3"></div>

            {/* Icon */}
            <div className="mb-3">{item.icon}</div>

            {/* Title */}
            <p
              className={`text-lg font-semibold ${
                index % 2 === 0 ? "text-green-600" : "text-black"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden items-center gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-xl shadow-sm w-full max-w-xs"
          >
            <span className={`text-4xl font-bold mb-2 ${item.color}`}>
              {item.letter}
            </span>
            <div className="mb-2">{item.icon}</div>
            <p
              className={`text-lg font-semibold ${
                index % 2 === 0 ? "text-green-600" : "text-black"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DivyaMeaningSection;

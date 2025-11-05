import React, { useEffect, useState } from "react";
import { GiHospital } from "react-icons/gi";
import { FaPeopleRoof, FaAward, FaMoneyBillTrendUp } from "react-icons/fa6";
import SatisfiedPatients from "../../assets/SatisfiedPatients.png";
import AwardWinning from "../../assets/AwardWinning.png";
import HealthSection from "../../assets/HealthSections.png";
import KindOfResearch from "../../assets/kind_of_research.png";
const statsData = [
  {
    id: 1,
    icon: KindOfResearch,
    value: 100,
    label: "Our Equipments",
    suffix: "k",
  },
  {
    id: 2,
    icon: AwardWinning,
    value: 5,
    label: "Field Expertise",
    suffix: "+",
  },
  {
    id: 3,
    icon: SatisfiedPatients,
    value: 25,
    label: "Complete Cases",
    suffix: "+",
  },
  {
    id: 4,
    icon: HealthSection,
    value: 5,
    label: "Awards Winning",
    suffix: "+",
  },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-xl sm:text-4xl font-extrabold text-[#202457]">
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center pb-10">
          <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Divyajivan Healthcare
          </h2>
          <p className="text-gray-500 mt-2 text-xs sm:text-base">
            Trusted care, quality service, and a commitment to your well-being.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center "
            >
              <img src={stat.icon} className="w-10 sm:w-15 md:w-20 " />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-gray-00 6font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

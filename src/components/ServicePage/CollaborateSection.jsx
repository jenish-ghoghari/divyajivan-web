import React from "react";

const sections = [
  {
    title: "Business & Marketing Collaboration",
    color: "text-blue-600",
    points: [
      "Global Marketing Partner",
      "Strategic Alliances",
      "Digital Healthcare Collaboration",
    ],
  },
  {
    title: "Regulatory & Plant Support Collaboration",
    color: "text-amber-700",
    points: [
      "Plant Registration & Regulatory Support",
      "Technology Transfer & Compliance",
    ],
  },
  {
    title: "Manufacturing & Supply Chain Collaboration",
    color: "text-green-700",
    points: [
      "Contract Manufacturing Partner (CMO/CDMO)",
      "Custom Formulation Development",
      "Long-term Supply Partnership",
    ],
  },
  {
    title: "International Collaboration",
    color: "text-blue-700",
    points: [
      "Market Entry Support",
      "Export Partnerships",
      "Regulatory Dossier Support",
      "Joint R&D Programs",
    ],
  },
  {
    title: "Platform for fostering innovative ideas and discove Collaboration",
    color: "text-blue-700",
    points: [],
  },
];

const CollaborateSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 leading-tight mb-6">
          Our Collaboration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <h2 className={`text-2xl font-semibold mb-4 ${item.color}`}>
                {item.title}
              </h2>
              <ul className="space-y-2 text-gray-700 text-base leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;

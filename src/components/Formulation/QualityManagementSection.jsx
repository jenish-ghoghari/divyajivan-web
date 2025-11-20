import React from "react";
import bgImage from "../../assets/Quality-Photo.jpg"; // <-- Add your background image

const sections = [
  {
    title: "Quality Risk Management (QRM)",
    color: "text-blue-600",
    points: [
      "Systematic evaluation of potential risks to product quality",
      "Implementation of risk controls and mitigation plans",
      "Aligned with ICH Q9 guidelines",
    ],
  },
  {
    title: "Documentation & Record Control",
    color: "text-amber-700",
    points: [
      "Comprehensive SOPs, batch records, and logs",
      "Version control and traceability",
      "Compliance with GDP (Good Documentation Practices)",
    ],
  },
  {
    title: "Change Control Management",
    color: "text-green-700",
    points: [
      "Evaluation and approval of any changes affecting processes, materials, or equipment",
      "Ensures continued compliance and product integrity",
    ],
  },
  {
    title: "Deviation & CAPA Management",
    color: "text-blue-700",
    points: [
      "Investigation of deviations and non-conformities",
      "Root cause analysis (RCA)",
      "Implementation of Corrective and Preventive Actions (CAPA)",
    ],
  },
  {
    title: "Training & Competency Management",
    color: "text-amber-700",
    points: [
      "Role-specific training for all personnel",
      "Regular assessments and requalification",
      "Maintains a skilled and compliant workforce",
    ],
  },
  {
    title: "Supplier Qualification & Material Control",
    color: "text-green-700",
    points: [
      "Audit and approval of vendors",
      "Raw material testing and traceability",
      "Ongoing supplier performance monitoring",
    ],
  },
  {
    title: "Production & Process Control",
    color: "text-blue-700",
    points: [
      "Validation of manufacturing processes",
      "In-process controls to maintain consistency",
      "Equipment calibration and preventive maintenance",
    ],
  },
  {
    title: "Quality Control (QC) Testing",
    color: "text-amber-700",
    points: [
      "Raw material, in-process, and finished product testing",
      "Microbiological and analytical labs",
      "Use of validated methods and instruments",
    ],
  },
  {
    title: "Self-Inspections & Internal Audits",
    color: "text-green-700",
    points: [
      "Periodic audits of facilities and systems",
      "Identification of gaps and opportunities for improvement",
    ],
  },
  {
    title: "Product Release & Batch Review",
    color: "text-blue-700",
    points: [
      "Comprehensive review of batch documentation",
      "Final approval by QA before product release",
    ],
  },
  {
    title: "Customer Complaints & Pharmacovigilance",
    color: "text-amber-700",
    points: [
      "Systematic logging and investigation of complaints",
      "Adverse drug reaction (ADR) monitoring (if applicable)",
      "Regulatory reporting and follow-up actions",
    ],
  },
  {
    title: "Continual Improvement",
    color: "text-green-700",
    points: [
      "Use of metrics, KPIs, and feedback to improve processes",
      "Management Review Meetings (MRMs)",
      "Innovation and quality culture development",
    ],
  },
  {
    title: "Regulatory Compliance & Standards",
    color: "text-green-700",
    points: [
      "Good Manufacturing Practices (GMP)",
      "FDA / CDSCO guidelines* (India-specific)",
      "ICH Q8, Q9, Q10 standards",
      "ISO 9001:2015 (Quality Management Systems)",
      "PIC/S and WHO TRS guidelines",
    ],
  },
];

const QualityManagementSection = () => {
  return (
    <section
      className="relative py-16 sm:py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20 mb-10">
          {/* Left Text Section */}
          <div className="w-full space-y-5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Quality Management System (QMS) at DivyaJivan
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              DivyaJivan’s{" "}
              <strong className="text-white">
                Pharmaceutical Quality Management System (QMS)
              </strong>{" "}
              is a structured and integrated framework designed to ensure that
              our products consistently meet applicable quality standards and
              regulatory requirements.
            </p>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Our QMS is aligned with international guidelines such as{" "}
              <strong className="text-white">
                ICH Q10, WHO GMP, ISO 9001:2015, and local regulatory authority
                requirements
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Sections */}
        {sections.map((item, index) => (
          <div
            key={index}
            className="py-8 border-b last:border-b-0 border-gray-400 border-opacity-40"
          >
            <div className="mx-auto md:max-w-5xl flex flex-col md:flex-row md:items-start md:gap-10">
              {/* Left Title */}
              <h2
                className={`text-xl sm:text-xl font-bold mb-4 md:mb-0 md:w-1/3 ${item.color} text-white`}
              >
                {item.title}
              </h2>

              {/* Right Description */}
              <div className="md:w-2/3 space-y-2 text-gray-200 leading-relaxed">
                {item.points.map((point, i) => (
                  <p key={i} className="text-base sm:text-md">
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualityManagementSection;

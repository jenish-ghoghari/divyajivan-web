import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const medicines = [
  {
    title: "Anesthetic",
    description:
      "Our anesthetic solutions provide effective pain management during medical procedures, ensuring patient comfort and precision in surgical interventions.",
  },
  {
    title: "Analgesic",
    description:
      "We offer powerful analgesics for pain relief, helping patients manage acute and chronic pain conditions efficiently.",
  },
  {
    title: "Antacid",
    description:
      "Our antacid formulations provide rapid relief from acidity, heartburn, and acid reflux, promoting digestive health.",
  },
  {
    title: "Anthelmintic",
    description:
      "Designed to combat parasitic infections, our anthelmintic medicines effectively eliminate intestinal worms and improve overall health.",
  },
  {
    title: "Anti-Allergic",
    description:
      "Our anti-allergic medications help relieve allergy symptoms such as sneezing, itching, and skin reactions, ensuring better respiratory and skin health.",
  },
  {
    title: "Anti-Anxiety",
    description:
      "We manufacture anti-anxiety medications that aid in managing stress, panic disorders, and generalized anxiety, improving mental well-being.",
  },
  {
    title: "Anti-Diabetic",
    description:
      "Our anti-diabetic drugs assist in regulating blood sugar levels, offering effective management of diabetes for long-term health benefits.",
  },
  {
    title: "Anti-Inflammatory",
    description:
      "We produce anti-inflammatory medications that reduce swelling, pain, and inflammation caused by various medical conditions.",
  },
  {
    title: "Anti-Vomiting",
    description:
      "Our anti-vomiting formulations provide relief from nausea and vomiting, ensuring patient comfort during treatments and recovery.",
  },
  {
    title: "Anti-Malarial",
    description:
      "Our anti-malarial drugs help in the prevention and treatment of malaria, offering effective solutions for disease control.",
  },
  {
    title: "Antibiotic",
    description:
      "We manufacture high-quality antibiotics to fight bacterial infections, ensuring rapid recovery and improved immunity.",
  },
  {
    title: "Anticoagulant",
    description:
      "Our anticoagulant medications prevent blood clot formation, reducing the risk of strokes, heart attacks, and deep vein thrombosis.",
  },
  {
    title: "Anticonvulsant",
    description:
      "We provide anticonvulsant drugs for the effective management of epilepsy and seizure disorders, improving neurological health.",
  },
  {
    title: "Antidepressant",
    description:
      "Our antidepressant formulations support mental health by treating depression and mood disorders, enhancing overall well-being.",
  },
  {
    title: "Antiemetic",
    description:
      "We produce antiemetic medications that prevent nausea and vomiting caused by motion sickness, chemotherapy, and other conditions.",
  },
];

const MedicineCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({});
  const sectionRefs = useRef([]);

  const handleScrollToSection = (index) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Detect which section is visible for active highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const height = ref.offsetHeight;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + height - 100
          ) {
            setActiveIndex(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar (Desktop Floating) */}
        <div className="hidden md:flex flex-col w-1/4 pr-6  sticky top-10 h-fit self-start">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Medicine Categories
          </h2>
          {medicines.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleScrollToSection(index)}
              whileHover={{ scale: 1.03 }}
              className={`text-left text-base font-medium px-4 py-3 mb-2 rounded-xl border transition-all duration-300 hover:bg-gray-100 border-gray-200`}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Content Section (Main Scroll Area) */}
        <div className="w-full hidden md:block md:w-3/4 space-y-10">
          {medicines.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className=""
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Accordion (Mobile + Tablet) */}
        <div className="block md:hidden w-full">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Medicine Categories
          </h2>
          {medicines.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 mb-3 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-blue-50 text-blue-900 font-semibold text-lg"
              >
                {item.title}
                <span className="text-2xl">
                  {openAccordions[index] ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openAccordions[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-3 bg-white"
                  >
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineCategories;

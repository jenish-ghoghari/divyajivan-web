import React from "react";

const QualitySection = () => {
  return (
    <div className="mt-20 container relative mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
        {/* Left Image Section */}

        <div className="w-full  space-y-5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl  font-bold text-gray-900 leading-tight">
            Quality Management System (QMS) at DivyaJivan{" "}
          </h2>

          <p className="text-gray-700  text-base sm:text-lg leading-relaxed">
            DivyaJivan’s{" "}
            <strong>Pharmaceutical Quality Management System (QMS)</strong> is a
            structured and integrated framework designed to ensure that our
            products consistently meet applicable quality standards and
            regulatory requirements. It supports our mission to provide safe,
            effective, and reliable pharmaceutical products to our customers and
            partners.
          </p>

          <p className="text-gray-700 text-base sm:text-lg  leading-relaxed">
            Our QMS is aligned with international guidelines such as{" "}
            <strong>
              ICH Q10, WHO GMP, ISO 9001:2015, and local drug regulatory
              authority requirements
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;

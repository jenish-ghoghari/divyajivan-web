import React from "react";
import aboutCapsulesGlobal from "../../assets/aboutCapsulesGlobal.jpg";

const InfoSection = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-16 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 left-16 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Main Container */}
      <div className="container relative mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="overflow-hidden rounded-3xl transition-transform duration-700 group-hover:scale-[1.03]">
              <img
                src={aboutCapsulesGlobal}
                alt="Divyajivan Lifescience manufacturing"
                className="w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 space-y-5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl  font-bold text-gray-900 leading-tight">
              Manufacturing Facility
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The manufacturing facility of the company complies with WHO
              regulations. Cutting edge equipment that complies with cGMP is
              available in every department. also has a large amount of
              temperature and humidity controlled storage space for raw material
              packing materials & completed goods. Our state-of-the-art
              manufacturing facility is equipped with the latest technology and
              equipment to ensure high-quality products that meet the standards
              of the WHO-GMP and PICS guidelines.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              our relationship with customers is the most important thing, and
              our continued growth is a testimony to that. By continuously
              growing and creating new opportunities, we strive to make the
              world a healthier place. We are committed to delivering integrated
              solutions that address key issues in healthcare, including current
              needs and future opportunities. Our expertise lies in identifying
              and resolving complex problems for global healthcare models.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 container relative mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
          {/* Left Image Section */}

          <div className="w-full lg:w-1/2 space-y-5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl  font-bold text-gray-900 leading-tight">
              Quality Management System (QMS) at DivyaJivan{" "}
            </h2>

            <p className="text-gray-700  text-base sm:text-lg leading-relaxed">
              DivyaJivan’s{" "}
              <strong>Pharmaceutical Quality Management System (QMS)</strong> is
              a structured and integrated framework designed to ensure that our
              products consistently meet applicable quality standards and
              regulatory requirements. It supports our mission to provide safe,
              effective, and reliable pharmaceutical products to our customers
              and partners.
            </p>

            <p className="text-gray-700 text-base sm:text-lg  leading-relaxed">
              Our QMS is aligned with international guidelines such as{" "}
              <strong>
                ICH Q10, WHO GMP, ISO 9001:2015, and local drug regulatory
                authority requirements
              </strong>
            </p>
          </div>

          {/* Right Content Section */}

          <div className="w-full  lg:w-1/2 relative group">
            <div className="overflow-hidden rounded-3xl transition-transform duration-700 group-hover:scale-[1.03]">
              <img
                src={aboutCapsulesGlobal}
                alt="Divyajivan Lifescience manufacturing"
                className="w-full h-[150px] sm:h-[220px] md:h-[260px] lg:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

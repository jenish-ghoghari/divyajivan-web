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
              The Leading Pharmaceutical in India
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-1">
                Divyajivan Lifescience PVT LTD
              </span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-md  leading-relaxed">
              Introducing Divyajivan Lifescience Pvt. Ltd., a leading
              pharmaceutical manufacturing company specializing in tablets,
              capsules, and ointments. Located in the vibrant city of Surat,
              Gujarat, India, we are committed to delivering high-quality
              healthcare products to meet the diverse needs of our
              customers.With a state-of-the-art facility and a team of
              experienced professionals, we ensure strict adherence to industry
              standards and regulations throughout our manufacturing process.
            </p>

            <p className="text-gray-700 text-sm sm:text-base md:text-md  leading-relaxed">
              Our focus on innovation, quality control, and customer
              satisfaction sets us apart in the market. Whether you are a
              healthcare provider, distributor, or retailer, partnering with
              Divyajivan Lifescience Pvt. Ltd. guarantees access to reliable,
              safe, and efficacious pharmaceutical products. Contact us today to
              explore how we can meet your manufacturing needs and contribute to
              the well-being of communities world-wide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

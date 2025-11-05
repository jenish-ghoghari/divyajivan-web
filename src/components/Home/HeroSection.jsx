import React from "react";
import banner from "../../assets/banner.jpg";

const HeroSection = () => {
  return (
    <section className="px-3 pb-3">
      <div
        className="relative w-full h-[80vh] rounded-xl overflow-hidden bg-center bg-cover flex flex-col items-center justify-center text-left text-white px-6 md:px-12 lg:px-20"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-green-900/60"></div>

        <div className="container mx-auto z-10 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-green-400">Divyajivan</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Bringing{" "}
            <span className="text-green-300 font-semibold">health</span>,{" "}
            <span className="text-green-300 font-semibold">care</span>, and{" "}
            <span className="text-green-300 font-semibold">trust</span>{" "}
            together. At Divyajivan, we strive to make quality pharmaceutical
            products accessible for everyone.
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

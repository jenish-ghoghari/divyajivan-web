import { FaArrowAltCircleRight } from "react-icons/fa";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="px-3 pb-3">
      <div className=" relative rounded-xl w-full h-[80vh] md:h-[600px] lg:h-[80vh] overflow-hidden">
        {/* Background Video */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Collaborate with <br /> Leaders in Quality <br /> Third-Party
            Manufacturing
          </h1>
          <p className="mt-4 text-lg italic md:text-xl">
            Ensuring <strong>Reliability</strong> and{" "}
            <strong>Consistency</strong>
          </p>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default HeroSection;

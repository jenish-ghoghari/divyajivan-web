import React from "react";
import HeroSection from "../../components/About/HeroSection";
import InfoSection from "../../components/About/InfoSection";
import VisionSection from "../../components/About/VisionSection";
import OurJourney from "../../components/About/OurJourney";
import Certifications from "../../components/Home/Certifications";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <VisionSection />
      <OurJourney />
      <Certifications />
    </div>
  );
};

export default AboutPage;

import React from "react";
import HeroSection from "../../components/About/HeroSection";
import InfoSection from "../../components/About/InfoSection";
import VisionSection from "../../components/About/VisionSection";
import OurJourney from "../../components/About/OurJourney";
import CertificationsSection from "../../components/HomeNew/CertificationsSection";
import CoreValues from "../../components/About/CoreValues";
import ManufacturingUnitSection from "../../components/About/ManufacturingUnitSection"

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <VisionSection />
      <CoreValues />
      <OurJourney />
      <ManufacturingUnitSection />
      <CertificationsSection />
    </div>
  );
};

export default AboutPage;

import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import Certifications from "../../components/Home/Certifications";
import DivyaMeaningSection from "../../components/Home/DivyaMeaningSection";
import AssociateWithUs from "../../components/Home/AssociateWithUs";
import VisionMissionSection from "../../components/Home/VisionMissionSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <WhyChooseUs />
      <DivyaMeaningSection />
      <AssociateWithUs />
      <Certifications />
    </>
  );
};

export default HomePage;

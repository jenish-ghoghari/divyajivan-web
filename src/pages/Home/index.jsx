import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import DivyaMeaningSection from "../../components/Home/DivyaMeaningSection";
import AssociateWithUs from "../../components/Home/AssociateWithUs";
import VisionMissionSection from "../../components/Home/VisionMissionSection";
import CertificationsSection from "../../components/HomeNew/CertificationsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <WhyChooseUs />
      <DivyaMeaningSection />
      <AssociateWithUs />
      <CertificationsSection />
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import HeroSection from "../../components/ServicePage/HeroSectoion";
import ServicesSection from "../../components/ServicePage/ServicesSection";
import CollaborateSection from "../../components/ServicePage/CollaborateSection";

const ServicePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CollaborateSection />
    </>
  );
};

export default ServicePage;

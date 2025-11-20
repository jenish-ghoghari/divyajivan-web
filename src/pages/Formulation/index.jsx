import React from "react";
import HeroSection from "../../components/Formulation/HeroSection";
import InfoSection from "../../components/Formulation/InfoSection";
import QualityManagementSection from "../../components/Formulation/QualityManagementSection";
import ManufacturingCapacity from "../../components/Formulation/ManufacturingCapacity";
import QualitySection from "../../components/Formulation/QualitySection";
import OurFacilitySection from "../../components/Formulation/OurFacilitySection";
import CertificationsSection from "../../components/HomeNew/CertificationsSection";

const FormulationPage = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <OurFacilitySection />
      <QualityManagementSection />
      <CertificationsSection />
    </>
  );
};

export default FormulationPage;

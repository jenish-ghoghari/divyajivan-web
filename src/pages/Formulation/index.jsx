import React from "react";
import HeroSection from "../../components/Formulation/HeroSection";
import InfoSection from "../../components/Formulation/InfoSection";
import QualityManagementSection from "../../components/Formulation/QualityManagementSection";
import ManufacturingCapacity from "../../components/Formulation/ManufacturingCapacity";
import QualitySection from "../../components/Formulation/QualitySection";
import OurFacilitySection from "../../components/Formulation/OurFacilitySection";

const FormulationPage = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <ManufacturingCapacity />
      <OurFacilitySection />
      <QualitySection />
      <QualityManagementSection />
    </>
  );
};

export default FormulationPage;

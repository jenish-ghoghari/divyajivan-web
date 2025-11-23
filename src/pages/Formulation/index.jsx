import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/Formulation/HeroSection";
import InfoSection from "../../components/Formulation/InfoSection";
import QualityManagementSection from "../../components/Formulation/QualityManagementSection";
import ManufacturingCapacity from "../../components/Formulation/ManufacturingCapacity";
import QualitySection from "../../components/Formulation/QualitySection";
import OurFacilitySection from "../../components/Formulation/OurFacilitySection";
import CertificationsSection from "../../components/Home/CertificationsSection";

const FormulationPage = () => {
  return (
    <>
      <Helmet>
        <title>Pharmaceutical Formulation | Divyajivan Lifescience</title>

        <meta
          name="description"
          content="Explore Divyajivan Lifescience's advanced pharmaceutical formulation services, including tablets, capsules, creams, gels, and WHO-GMP compliant manufacturing facilities."
        />

        <meta
          name="keywords"
          content="pharmaceutical formulation, tablets manufacturing, capsules manufacturing, creams and gels, WHO GMP facility, Divyajivan Lifescience"
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pharmaceutical Formulation | Divyajivan Lifescience"
        />
        <meta
          property="og:description"
          content="Explore our advanced pharmaceutical formulation services including tablets, capsules, creams, gels, and WHO-GMP compliant manufacturing facilities."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <InfoSection />
      <OurFacilitySection />
      <QualityManagementSection />
      <CertificationsSection />
    </>
  );
};

export default FormulationPage;

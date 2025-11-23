import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/About/HeroSection";
import InfoSection from "../../components/About/InfoSection";
import VisionSection from "../../components/About/VisionSection";
import OurJourney from "../../components/About/OurJourney";
import CertificationsSection from "../../components/Home/CertificationsSection";
import CoreValues from "../../components/About/CoreValues";
import ManufacturingUnitSection from "../../components/About/ManufacturingUnitSection";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          About Us | Divyajivan Lifescience – Leading Pharmaceutical
          Manufacturer
        </title>

        <meta
          name="description"
          content="Divyajivan Lifescience is a leading pharmaceutical manufacturer in India, specializing in tablets, capsules, and external preparations with global-quality standards."
        />

        <meta
          name="keywords"
          content="about Divyajivan Lifescience, pharmaceutical manufacturer India, pharma company Surat, tablets and capsules manufacturing, WHO GMP pharma, pharma exporter"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="About Divyajivan Lifescience – Leading Pharmaceutical Manufacturer in India"
        />
        <meta
          property="og:description"
          content="Learn about Divyajivan Lifescience Pvt. Ltd., a trusted pharmaceutical manufacturer of tablets, capsules, and external preparations, delivering quality worldwide."
        />
        <meta property="og:type" content="website" />
      </Helmet>

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

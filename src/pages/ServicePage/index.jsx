import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/ServicePage/HeroSectoion";
import ServicesSection from "../../components/ServicePage/ServicesSection";
import CollaborateSection from "../../components/ServicePage/CollaborateSection";

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Pharmaceutical Contract Manufacturing & CRAMS | Divyajivan Lifesciences</title>

        <meta
          name="description"
          content="Discover Divyajivan Lifesciences’ contract manufacturing, CRAMS, and regulatory services—your trusted partner for pharmaceutical research, development, and large-scale production."
        />

        <meta
          name="keywords"
          content="contract manufacturing, pharmaceutical services, CRAMS, regulatory services, pharma manufacturing, formulation development, third party manufacturing, Divyajivan Lifesciences"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Pharmaceutical Contract Manufacturing & CRAMS | Divyajivan Lifesciences" />
        <meta
          property="og:description"
          content="Your trusted partner in pharmaceutical excellence—offering contract manufacturing, CRAMS, R&D, and regulatory services with world-class standards."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <CollaborateSection />
    </>
  );
};

export default ServicePage;

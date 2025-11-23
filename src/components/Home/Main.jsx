import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import ProductCategory from "./ProductCategory";
import { Helmet } from "react-helmet";
import ServicesSection from "./Services";
import CertificationsSection from "./CertificationsSection";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>
          Global Pharmaceutical Manufacturer & Exporter | Divyajivan
          Lifesciences
        </title>

        <meta
          name="description"
          content="Divyajivan Lifesciences is a global pharmaceutical manufacturer & exporter offering high-quality tablets, capsules, nutraceuticals, and wellness formulations worldwide."
        />

        <meta
          name="keywords"
          content="pharmaceutical manufacturer, pharma exporter, global pharma company, tablets capsules manufacturer, nutraceutical exporter, Divyajivan Lifesciences, WHO GMP pharma"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Global Pharmaceutical Manufacturer & Exporter | Divyajivan Lifesciences"
        />
        <meta
          property="og:description"
          content="A leading global pharmaceutical manufacturer delivering tablets, capsules, nutraceuticals, and wellness formulations across international markets."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <ProductCategory />
      <CertificationsSection />
    </>
  );
};

export default Main;

import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import ProductCategory from "./ProductCategory";
import Services from "./Services";
import WhatWeDo from "./WhatWeDo";
import { Helmet } from "react-helmet";
import Certifications from "../Home/Certifications";
import WhyChooseUs from "../Home/WhyChooseUs";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Leading third-party pharmaceutical manufacturer offering contract pharma manufacturing, private label services, and bulk drug formulations.</title>
        <meta
          name="description"
          content="Collaborate with Leaders in Quality Third-Party Manufacturing. Best third-party pharmaceutical manufacturer in India, USFDA-approved pharma third-party manufacturers,  EU-GMP contract manufacturing pharma"
        />
        <meta
          name="keywords"
          content=" Best third-party pharmaceutical manufacturer in India, How to start a third-party pharma business, Contract pharmaceutical manufacturing process, Private label pharma vs contract manufacturing, Pharma manufacturing companies near me, Third-party pharma manufacturing cost estimation, Benefits of outsourcing pharmaceutical production, Top pharmaceutical contract manufacturers in India, How to choose a pharma third-party manufacturer, Pharma PCD vs third-party manufacturing"
        />
      </Helmet>
      <HeroSection />
      <AboutUs />
      <ProductCategory />
      <WhyChooseUs />
      <WhatWeDo />
      
      <Certifications />
    </>
  );
};

export default Main;

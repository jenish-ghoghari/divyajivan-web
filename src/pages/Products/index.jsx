import React from "react";
import { Helmet } from "react-helmet";
import MedicineCategories from "../../components/Products/MedicineCategories";
import HeroSection from "../../components/Products/HeroSectoion";
import TableComponent from "../../components/Products/TableComponent";
import { productPagesData } from "../../components/Products/ProductPageData";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const pageData = productPagesData.find(
    (page) => page?.pageUrl.toLowerCase() === id.toLowerCase()
  );

  const title =
    pageData?.title || "Pharmaceutical Products | Divyajivan Lifesciences";

  const metaDescription =
    pageData?.description ||
    "Explore our complete range of globally certified pharmaceutical products, including tablets, capsules, syrups, ointments, and advanced healthcare formulations.";

  const keywords =
    pageData?.keywords ||
    "pharmaceutical products, pharma formulations, tablets manufacturer, capsules manufacturer, divyajivan lifesciences, medicines export";

  return (
    <>
      <Helmet>
        <title>{title} | Divyajivan Lifesciences</title>

        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${title} | Divyajivan Lifesciences`}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection pageData={pageData} />
      <TableComponent pageData={pageData} />
    </>
  );
};

export default ProductPage;

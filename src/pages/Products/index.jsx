import React from "react";

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
  return (
    <>
      <HeroSection pageData={pageData} />
      {/* <MedicineCategories /> */}
      <TableComponent pageData={pageData} />
    </>
  );
};

export default ProductPage;

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import FormulationPage from "./pages/Formulation";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/Products";

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="formulation" element={<FormulationPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

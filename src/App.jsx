import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomeNew from "./pages/HomeNew";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormulationPage from "./pages/Formulation";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/Products";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout wrapper */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeNew />} /> {/* Default home route */}
          <Route path="about" element={<About />} />
          <Route path="formulation" element={<FormulationPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

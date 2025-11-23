import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/Contact/HeroSectoion";
import AppointmentForm from "../../components/Contact/AppointmentForm";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Divyajivan Lifescience</title>

        <meta
          name="description"
          content="Get in touch with Divyajivan Lifescience for pharmaceutical manufacturing, contract services, product inquiries, and business collaboration. We’re here to assist you."
        />

        <meta
          name="keywords"
          content="contact divyajivan lifescience, pharma manufacturer contact, pharmaceutical company surat, pharma collaboration, contract manufacturing inquiry, CRAMS services contact"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Divyajivan Lifescience" />
        <meta
          property="og:description"
          content="Connect with Divyajivan Lifescience for manufacturing inquiries, collaborations, regulatory support, and pharmaceutical services."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <AppointmentForm />
    </div>
  );
};

export default ContactPage;

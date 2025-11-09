import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/Divyajivan-Lifescience-Logo.svg";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0b3b61] to-[#0d4675] text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-8 py-12 border-t border-white/10">
        {/* Logo + Description */}
        <div className=" mb-7 ">
          <img src={logo} alt="Divyajivan Lifescience" className="h-10 mb-4" />
          <p className="text-md leading-relaxed text-white max-w-[75%]">
            Leading pharmaceutical manufacturing company in Gujarat with
            state-of-the-art pharmaceutical production facilities. We provide
            Tablets, Capsules, & ointments (Creams, Lotions, and Gels),
            Specialised Pharmaceutical Formulations, Customised Pharma Products
            and Essential Healthcare Solutions.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  flex-col md:flex-row  border-b border-t border-white/10 ">
          {/* Contact Us */}
          <div className="border-0 md:border-b md:border-r lg:border-b-0 lg:border-r  border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-2">
                <IoLocationSharp className="text-lg mt-0.5" />
                <span className="w-[90%]">
                  1001 & 1002, Zircon Arena, Opp. De’villa Restro, Pal R.T.O to
                  Hazira Road,Surat-394510, Gujarat, India
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <IoLocationSharp className="text-lg mt-0.5 " />
                <span className="w-[90%]">
                  231, 232, 233 RJD Integrated Textile Park, Ichhapore
                  Surat-394510 Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <IoMail className="text-lg" />
                <div>
                  <a
                    href="mailto:info@divyajivanlife.org"
                    className="hover:text-white"
                  >
                    info@divyajivanlife.org{" "}
                  </a>

                  <a
                    href="mailto:export@divyajivanlife.org"
                    className="hover:text-white"
                  >
                    export@divyajivanlife.org{" "}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <IoCall className="text-lg" />
                <a href="tel:+916357779200" className="hover:text-white">
                  +91 63577 79200
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-0 md:border-r-0 md:border-b lg:border-b-0 lg:border-r border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Global Presence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="border-0 md:border-r lg:border-r border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80 max-w-xs">
              <li>Expert Technical Support And Documentation</li>
              <li>Customized Pharmaceutical Solutions For Global Markets</li>
              <li>Reliable Delivery Schedules</li>
              <li>Comprehensive Contract Manufacturing (CDMO) Services</li>
            </ul>
          </div>

          {/* WHO GMP Certified */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Leading WHO GMP Certified Tablet, Capsule, Ointment Manufacturers In India.
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Tablets</li>
              <li>Capsules</li>
              <li>Ointments (Creams, Lotions, and Gels)</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-8">
          <p>Copyright@2021 All Rights Reserved | Divyajivan Lifescience Pvt. LTD</p>
        </div>
      </div>
    </footer>
  );
}

import { FiArrowUpRight } from "react-icons/fi";
import GMP from "../../assets/gmpLogo.png";
import GLP from "../../assets/glpLogo.png";
import FDCA from "../../assets/FDCALogo.png";
import WHPGMP from "../../assets/whoGmp.png";
import ISOCertificate from "../../assets/ISO_9001-2015.png";
const certifications = [
  {
    id: 1,
    title: "WHO-GMP certification",
    image: WHPGMP,
  },
  {
    id: 3,
    title: "GMP",
    image: GMP,
  },
  {
    id: 2,
    title: "GLP",
    image: GLP,
  },
  {
    id: 1,
    title: "FDCA Gujarat",
    image: FDCA,
  },
  { id: 4, title: "ISO 9001:2015", image: ISOCertificate },
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-10 px-5 md:px-10">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="relative group border border-gray-200 rounded-3xl overflow-hidden  transition-all duration-300"
          >
            {/* Background Image */}
            <div
              className="h-50 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t  transition-all duration-300"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-5">
                <h3 className="text-black text-md  font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Arrow Button */}
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

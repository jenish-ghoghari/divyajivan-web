import { FiArrowUpRight } from "react-icons/fi";
import GMP from "../../assets/gmpLogo.png";
import GLP from "../../assets/glpLogo.png";
import FDCA from "../../assets/FDCALogo.png";
import WHPGMP from "../../assets/whoGmp.png";
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
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-10 px-5 md:px-10">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Background Image */}
            <div
              className="h-100 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})`, }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B48]/80 to-transparent group-hover:from-[#001B48]/90 transition-all duration-300"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-4 right-4">
                <button className="bg-white text-[#001B48] rounded-full p-3 transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

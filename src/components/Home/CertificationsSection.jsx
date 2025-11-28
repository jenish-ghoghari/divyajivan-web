import Marquee from "react-fast-marquee";
import GMP from "../../assets/gmpLogo.png";
import GLP from "../../assets/glpLogo.png";
import FDCA from "../../assets/FDCALogo.png";
import WHPGMP from "../../assets/whoGmp.png";
import ISOCertificate from "../../assets/ISO_9001-2015.png";

const certifications = [
  { id: 1, title: "WHO-GMP certification", image: WHPGMP },
  { id: 2, title: "ISO 9001:2015", image: ISOCertificate },
  { id: 3, title: "GMP", image: GMP },
  { id: 4, title: "GLP", image: GLP },
  { id: 5, title: "FDCA Gujarat", image: FDCA },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white pb-10 px-5 py-8 md:py-10">

      {/* ---------- GRID on LG and above ---------- */}
      <div className="hidden xl:grid container mx-auto grid-cols-5 gap-6">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-3xl bg-white flex flex-col items-center p-6 transition-all"
          >
            <div className="w-full lg:h-30 xl:h-50 flex items-center justify-center">
              <img src={item.image} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-black text-lg font-semibold text-center mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* ---------- MARQUEE on MOBILE & TABLET ---------- */}
      <div className="xl:hidden">
        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          {certifications.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-3xl  bg-white flex flex-col items-center p-6 mx-4 w-60"
            >
              <div className="w-full h-50 flex items-center justify-center">
                <img src={item.image} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-black text-base font-semibold text-center mt-3">
                {item.title}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

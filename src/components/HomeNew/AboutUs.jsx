import DivyaJivanHelthcare from "../../assets/Divyajivan-Healthcare-Logo.svg";
import DivyaJivanLifescience from "../../assets/Divyajivan-Lifescience-Logo.svg";
import LogoWhite from "../../assets/logo-white.svg";
import WelcomeBackground from "../../assets/Welcome-SHC-Background-Photo.jpg";
const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto"
      style={{
        backgroundImage: `url(${WelcomeBackground})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white  py-12 sm:py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to Divyajivan Life Science
        </h1>

        <div className="my-6 sm:my-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-bold mb-2">
            A Division of Divyajivan Group
          </p>

          <p className="text-base sm:text-md md:text-lg leading-relaxed">
            Divyajivan Lifescience Pvt Ltd group, is a trusted pharmaceutical
            manufacturer specializing in high-quality tablets, capsules,
            ointments, and syrups. With a commitment to innovation, safety, and
            global manufacturing standards, we deliver diverse, effective
            healthcare solutions that meet the evolving needs of the
            pharmaceutical industry.
          </p>
        </div>

        <div className="my-6 sm:my-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-bold mb-2">
            Divyajivan Lifescience Pvt Ltd
          </p>
          <p className="text-base sm:text-md md:text-lg leading-relaxed">
            Divyajivan Lifescience Pvt Ltd is a leading pharmaceutical
            manufacturer with expertise in producing tablets, capsules, and
            ointments. Committed to global manufacturing standards and quality,
            the company leverages cutting-edge technology and a dedicated team
            to deliver diverse healthcare products that meet the evolving
            demands of the pharmaceutical industry.
          </p>
        </div>

        <div className="my-6 sm:my-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-bold mb-2">
            SHC Pharmaceuticals
          </p>
          <p className="text-base sm:text-md md:text-lg leading-relaxed">
            SHC Pharmaceuticals is a reputable pharmaceutical manufacturer
            specializing in the production of high-quality syrups and external
            preparations, including gels, lotions, creams, and solutions.
            Dedicated to innovation and effective healthcare solutions, SHC
            Pharmaceuticals ensures safety and efficacy, making us a trusted
            partner for clients seeking reliable manufacturing services tailored
            to their needs.
          </p>
        </div>

        <div className="my-6 sm:my-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-bold mb-2">
            Pharmac Chemical & Pharmaceuticals
          </p>
          <p className="text-base sm:text-md md:text-lg leading-relaxed">
            Pharmac Chemical & Pharmaceuticals has been a trusted name in the
            import and export of nutraceutical raw materials, active
            pharmaceutical ingredients (APIs), and excipients since 2015. With a
            strong global network and a commitment to quality, we ensure the
            seamless supply of high-grade pharmaceutical and nutraceutical
            ingredients to manufacturers worldwide.
          </p>
        </div>

        <div className="mt-20 mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <hr className="w-60 border-t-2 border-white hidden md:block" />
            <h2 className="mx-4 text-xl md:text-2xl font-bold">
              SHC GROUP OF COMPANY
            </h2>
            <hr className="w-60 border-t-2 border-white hidden md:block" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
            {[
              {
                name: "Divya Jivan Lifescience Pvt. Ltd.",
                alt: "Buy bulk pharmaceuticals from manufacturers",
                since: "Since 2021",
                logo: DivyaJivanLifescience,
              },
              {
                name: "SHC Pharmaceuticals",
                alt: " Order custom formulation medicines in bulk",
                since: "Since 2018",
                logo: LogoWhite,
              },
              {
                name: "Divya Jivan Healthcare Pvt. Ltd.",
                alt: "Indian pharmaceutical contract manufacturing company",
                since: "Since 2021",
                logo: DivyaJivanHelthcare,
              },
            ].map((company, index) => (
              <div key={index} className="text-center">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="w-[150px] md:w-[190px] h-[50px] mx-auto mb-2 object-contain"
                />
                <p className="font-semibold text-md md:text-lg">
                  {company.name}
                </p>
                <p className="text-sm text-gray-400">{company.since}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

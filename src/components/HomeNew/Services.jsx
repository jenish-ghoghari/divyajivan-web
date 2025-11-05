import { services } from "../../Constants";

const Services = () => {
  return (
    <section
      id="services"
      className="container mx-auto px-6 lg:px-12  py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Why SHC Pharma?
      </h2>
      <p className="text-gray-600 mb-8 w-full md:max-w-3xl mx-auto text-base sm:text-md md:text-lg">
        We are an emerging pharmaceutical company dedicated to providing
        innovative and affordable medications that promote healthier lives and
        meet the needs of our valued customers.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((feature, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center"
          >
            <div className="text-indigo-600 mb-4">
              {" "}
              <img
                className="w-14  sm:w-20 md:w-35"
                src={feature.image}
                alt={feature.alt}
              />
            </div>
            <h3 className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

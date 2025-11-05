import { whatWeDo } from "../../Constants";

const WhatWeDo = () => {
  return (
    <section className="bg-[#0a0f1d] text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((service, index) => (
            <div key={index} className="p-4 transition-shadow">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-55 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

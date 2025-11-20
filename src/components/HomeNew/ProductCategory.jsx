import { Link } from "react-router-dom";
import { productCategories } from "../../Constants";

const ProductCategory = () => {
  return (
    <section className="bg-gray-50">
      <div className="container  mx-auto px-6 lg:px-12 py-8 sm:py-8  lg:py-12">
        {/* Header */}
        <div className="text-center mb-6">
          <div className=" ">
            <p className="text-md sm:text-lg md:text-2xl w-full md:w-[80%] mx-auto font-bold leading-relaxed text-[#0E2B5C]">
              We are Manufacturing Masters, Quality Conscious, safety determined
              and Delivering to Perfection for whole community!
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:max-w-5xl mx-auto  gap-6">
          {productCategories.map((data, index) => (
            <Link
              key={index}
              to={data.url}
              className="group relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300"
            >
              {/* Full Image */}
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-45 sm:h-60  md:h-80 object-cover"
              />

              {/* Bottom overlay for title */}
              <div className="absolute bottom-0 left-0 right-0 bg-white transition-all duration-500 p-3 sm:p-4">
                <h6 className="text-[#0E2B5C] text-sm lg:text-lg font-semibold text-center">
                  {data.title}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;

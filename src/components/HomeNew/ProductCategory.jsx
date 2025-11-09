import { Link } from "react-router-dom";
import { productCategories } from "../../Constants";

const ProductCategory = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-12 sm:py-16  lg:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className=" ">
          <p className="text-lg md:text-3xl w-full md:w-[80%] mx-auto font-bold leading-relaxed text-gray-700">
            We are Manufacturing Masters, Quality Conscious, safety determined
            and Delivering to Perfection for whole community!
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {productCategories.map((data, index) => (
          <Link
            key={index}
            to={data.url}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Full Image */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-80 object-cover"
            />

            {/* Top overlay (blue) for button */}
            <div className="absolute inset-0 bg-sky-600/80 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-sky-600 font-medium rounded-md shadow hover:bg-sky-100 transition-all duration-300">
                View More →
              </button>
            </div>

            {/* Bottom overlay for title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 group-hover:bg-sky-600/80 transition-all duration-500 p-4">
              <h6 className="text-white text-sm lg:text-lg font-semibold text-center">
                {data.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

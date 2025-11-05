import { licenses } from "../../Constants";

const Certifications = () => {
  return (
    <div className=" m-4 rounded-2xl text-center">
      <div className="container mx-auto px-6 lg:px-12  py-2 md:py-10 sm:px-6">
        <h2 className="text-md sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Certified By
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {licenses.map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt={data.alt}
              className="w-16 sm:w-20 md:w-30 lg:w-40  object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

import { associateMembers, licenses } from "../../Constants";
import Marquee from "react-fast-marquee";

const AssociateWithUs = () => {
  return (
    <div className="bg-gray-100 text-center">
      <div className="container mx-auto px-6 lg:px-12  py-2 md:py-10 sm:px-6">
        <h2 className="text-md sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Certified By
        </h2>
        <Marquee className="flex gap-4 lg:gap-8" gradient={true} gradientColor="#f3f6f4" gradientWidth={100} autoFill={true}>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-10 pb-8">
            {associateMembers.map((data, index) => (
              <img
                key={index}
                src={data.img}
                alt={data.alt}
                className="w-20 sm:w-28 md:w-38 lg:w-50  object-contain"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default AssociateWithUs;

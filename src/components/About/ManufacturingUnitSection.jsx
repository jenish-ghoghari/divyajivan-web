import { FiArrowUpRight } from "react-icons/fi";
import AluPvcBlister from "../../assets/AluPvcBlister.jpeg";
import AluPvcMachine from "../../assets/AluPvcMachine.jpeg";

import CapsuleFeelingMachine from "../../assets/CapsuleFeelingMachine.jpeg";
import Coting from "../../assets/Coting.jpeg";
import Granulation from "../../assets/Granulation.jpeg";
import Lab from "../../assets/Lab.jpeg";
import OintmentMachine from "../../assets/OintmentMachine.jpeg";
import StripMachine from "../../assets/StripMachine.jpeg";
import TabletCompressor from "../../assets/TabletCompressor.jpeg";
import TubeFeelingMachine from "../../assets/TubeFeelingMachine.jpeg";

const manufacturingUnit = [
  { id: 1, title: "LAB", image: Lab },
  {
    id: 2,
    title: "ALU PVC BLISTER",
    image: AluPvcBlister,
  },
  {
    id: 3,
    title: "ALU PVC MACHINE",
    image: AluPvcMachine,
  },
  {
    id: 4,
    title: "CAPSULE FEELING MACHINE",
    image: CapsuleFeelingMachine,
  },
  {
    id: 5,
    title: "COATING",
    image: Coting,
  },
  { id: 6, title: "GRANULATION", image: Granulation },
  { id: 7, title: "OINTMENT MACHINE", image: OintmentMachine },
  { id: 8, title: "STRIP MACHINE", image: StripMachine },
  { id: 9, title: "TABLET COMPRESSOR", image: TabletCompressor },
  { id: 10, title: "TUBE FELLING MACHINE", image: TubeFeelingMachine },
];

export default function ManufacturingUnitSection() {
  return (
    <section className="bg-gray-50 py-10 px-5 md:px-10">
      <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        Manufacturing Facility
      </h2>
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {manufacturingUnit.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl border border-gray-200 overflow-hidden shadow-md  transition-all duration-300"
          >
            {/* Background Image */}
            <div
              className="h-70 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="absolute bg-white p-3 z-999 bottom-0 w-full text-center font-bold">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const AppointmentForm = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto bg-white shadow-sm rounded-3xl p-8 sm:p-10 md:p-14  border border-gray-100">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#103b72] mb-10">
          Make an Appointment
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>

          {/*  Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Button */}
            <button
              type="submit"
              className="bg-[#16aeb5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#119ca3] transition-all duration-300 w-fit"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;

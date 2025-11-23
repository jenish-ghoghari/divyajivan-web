import React from "react";
import { Link, useLocation } from "react-router-dom";

const TableComponent = ({ pageData }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* BREADCRUMB */}
        <nav className="text-gray-700 text-sm font-medium mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="text-primary-blue hover:underline">
                Home
              </Link>
            </li>
            {pathnames.map((name, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>/</span>
                <span className="capitalize">{name}</span>
              </li>
            ))}
          </ol>
        </nav>

        {/* TABLE */}
        <div className="overflow-x-auto shadow-lg rounded-lg border">
          <table className="w-full bg-white">
            <thead className="bg-[#0B1B2A] text-white sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left w-20">No</th>
                <th className="px-4 py-3 text-left">Composition</th>
              </tr>
            </thead>

            <tbody>
              {pageData?.tableData?.map((section, index) => (
                <React.Fragment key={index}>
                  {/* SECTION HEADER */}
                  <tr
                    className={`${pageData.tableTitleBackground} text-black border-b `}
                  >
                    <td className="px-4 py-3 font-bold border-r w-20">
                      {section.id}
                    </td>
                    <td className="px-4 py-3 font-bold">{section.title}</td>
                  </tr>

                  {/* ITEMS */}
                  {section.items.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b last:border-b-0 odd:bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <td className="px-4 py-3 border-r text-gray-700 font-medium">
                        {idx + 1}
                      </td>
                      <td className="px-4 py-3 text-gray-800">{item}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};


export default TableComponent;

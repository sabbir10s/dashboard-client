import React from "react";

const CategoryTable = ({ categories }) => {
  return (
    <>
      {categories.map((customer) => (
        <tr key={customer._id} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {customer._id.slice(8, 12)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {customer.registered.slice(0, 10)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {customer.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {customer.email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {customer.phone}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-4">
            <div className="relative flex flex-col items-center group">
              <button className="text-gray-400 text-lg">
                <BiShow />
              </button>
              <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-success-500 shadow-lg">
                  View Order
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-success-500"></div>
              </div>
            </div>
            <div className="relative flex flex-col items-center group">
              <button className="text-gray-400 text-lg">
                <RiDeleteBinLine />
              </button>
              <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-error-500 shadow-lg">
                  Delete
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-error-500"></div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CategoryTable;

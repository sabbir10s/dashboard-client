import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "../shared/Pagination";

const CustomerTable = () => {
  const [customer, setCustomer] = useState([]);
  const fetchData = () => {
    axios
      .get("customer.json")
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 5;

  return (
    <div>
      <div className="bg-white border-[1px] border-gray-200/80 rounded-[10px] shadow-custom">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Joining Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((customer) => (
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
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-gray-900 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
          <p className="uppercase font-semibold">
            showing ({itemsOffset + 1}- {itemsOffset + currentItems.length}) of{" "}
            {customer.length}
          </p>
          <Pagination
            pageCount={pageCount}
            setPageCount={setPageCount}
            itemsOffset={itemsOffset}
            setItemsOffset={setItemsOffset}
            setCurrentItems={setCurrentItems}
            itemsPerPage={itemsPerPage}
            items={customer}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;

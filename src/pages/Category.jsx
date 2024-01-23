import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CategoryDrawer from "../components/drawer/CategoryDrawer";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2 className="text-xl font-medium pb-6">Category</h2>

      <div className="absolute top-0 right-0 w-full bg-black z-10">
        <CategoryDrawer isOpen={isOpen} onClose={handleCloseModal} />
      </div>

      <div className="bg-white py-8 px-5 rounded-md shadow-custom_secondary flex items-center gap-8">
        <div className="w-full">
          <input
            className="input_styles"
            type="text"
            placeholder="Search by category name"
          />
        </div>

        <div className="text-center w-1/4">
          <button
            onClick={handleOpenModal}
            className="flex items-center justify-center gap-2  bg-primary-600 text-white w-full cursor-pointer py-3 border-none rounded-md font-medium"
          >
            <FiPlus />
            <span>Add Category</span>
          </button>
        </div>
      </div>

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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Parent Category Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Image
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
                {/* <CategoryTable categories={[{}]} /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import { FiX } from "react-icons/fi";
import MainDrawer from "../drawer/MainDrawer";
import AddProductForm from "./AddProductForm";

const ProductModal = ({ isOpen, onClose }) => {
  return (
    <MainDrawer isOpen={isOpen} onClose={onClose}>
      <div className="fixed top-0 right-0 h-auto lg:h-screen lg:w-2/3 w-full shadow-custom z-50 bg-[#F4F5F7]">
        {/* Modal content */}
        {/* Replace this with your modal content */}
        <div className="pt-8 px-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Add Product</h1>
            <p>Add your product and necessary information from here</p>
          </div>

          <div>
            <button
              className="w-8 h-8 flex justify-center items-center border border-gray-400 rounded-full hover:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-150 ease-in-out"
              type="button"
              onClick={onClose}
            >
              <FiX className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="mt-8 h-[75%] overflow-y-scroll bg-white p-5">
          <AddProductForm />

          <div className="mt-6 flex justify-end space-x-2 items-center">
            <button className="bg-primary-600 text-white cursor-pointer w-full py-3 border-none rounded-md font-medium">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </MainDrawer>
  );
};

export default ProductModal;

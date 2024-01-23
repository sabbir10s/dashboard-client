import React, { useState } from "react";
import Input from "../lib/Input";
import ProductModal from "./ProductModal";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="absolute top-0 right-0 w-full bg-black z-10">
        <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
      </div>

      <div className="bg-white py-8 px-5 rounded-md shadow-custom_secondary grid lg:grid-cols-4 gap-8 ">
        <div>
          <Input
            className="input_styles"
            type="text"
            placeholder="Search by product name"
          />
        </div>{" "}
        <div className="relative z-0">
          <select
            className="input_styles relative appearance-none focus:outline-none focus:border-blue-500 "
            name="Category"
            id="Category"
          >
            <option value="Category" className="text-gray-500">
              Category
            </option>
            <option value="Organic Food">Organic Food</option>
            <option value="Fish &amp; Meat">Fish &amp; Meat</option>
            <option value="Fruits &amp; Vegetable">
              Fruits &amp; Vegetable
            </option>
            <option value="Fresh Seafood">Fresh Seafood</option>
            <option value="Cooking Essentials">Cooking Essentials</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Drinks">Drinks</option>
            <option value="Milk &amp; Dairy">Milk &amp; Dairy</option>
            <option value="Organic Food">Organic Food</option>
            <option value="Honey">Honey</option>
            <option value="Sauces &amp; Pickles">Sauces &amp; Pickles</option>
            <option value="Jam &amp; Jelly">Jam &amp; Jelly</option>
            <option value="Snacks &amp; Instant">Snacks &amp; Instant</option>
            <option value="Biscuits &amp; Cakes">Biscuits &amp; Cakes</option>
            <option value="Household Tools">Household Tools</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Pet Care">Pet Care</option>
            <option value="Beauty &amp; Health">Beauty &amp; Health</option>
            <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>{" "}
        <div className="relative z-0">
          <select
            className="input_styles relative appearance-none focus:outline-none focus:border-blue-500"
            name="Price"
            id="price"
          >
            <option value="Price" className="text-gray-500">
              Price
            </option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>{" "}
        <div>
          <div className="text-center">
            <button
              onClick={handleOpenModal}
              className="bg-primary-600 text-white lg:w-4/6 w-full cursor-pointer py-3 border-none rounded-md font-medium"
            >
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </span>{" "}
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

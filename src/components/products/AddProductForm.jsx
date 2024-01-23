import React, { useState } from "react";
import uploadImg from "../../assets/upload.png";
import Input from "../lib/Input";

const AddProductForm = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      // Add the new tag to the tags array
      setTags([...tags, e.target.value]);
      // Clear the input
      e.target.value = "";
    }
  };

  return (
    <div>
      {/* tabs */}
      <div className="border-b mb-8">
        <button className="bg-transparent text-primary-500 text-[18px] border-b-2 cursor-pointer border-primary-600 px-5 ">
          Basic Info
        </button>
      </div>

      {/* forms */}
      <form action="#" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Title/Name</h3>
          <div className="lg:col-span-2">
            <Input
              className="input_styles"
              placeholder="Product Title/Name"
              type="text"
            />
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Description</h3>
          <div className="lg:col-span-2">
            <textarea
              name="desk"
              rows="4"
              className="input_styles"
              placeholder="Product Description"
            ></textarea>
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Images</h3>
          <div className="lg:col-span-2 rounded-lg border-4 border-dashed w-full group text-center py-5">
            <label>
              <div>
                <img
                  className="w-20 h-20 mx-auto object-center cursor-pointer"
                  src={uploadImg}
                  alt="upload image"
                />
                <p>Drag your images here </p>
                <p className="text-gray-600">
                  (Only *.jpeg, *.webp and *.png images will be accepted)
                </p>
              </div>

              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product SKU</h3>
          <div className="lg:col-span-2">
            <Input
              className="input_styles"
              placeholder="Product SKU"
              type="text"
            />
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Barcode</h3>
          <div className="lg:col-span-2">
            <Input
              className="input_styles"
              placeholder="Product Barcode"
              type="text"
            />
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Quantity</h3>
          <div className="lg:col-span-2">
            <Input
              className="input_styles"
              placeholder="Product Quantity"
              type="number"
            />
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Slug</h3>
          <div className="lg:col-span-2">
            <Input
              className="input_styles"
              placeholder="Product Slug"
              type="text"
            />
          </div>
        </div>{" "}
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Default Category</h3>
          <div className="lg:col-span-2">
            <div className="relative">
              <select
                className="input_styles relative appearance-none focus:outline-none focus:border-blue-500"
                name="Default Category"
                id="Default Category"
              >
                <option value="Default Category" className="text-gray-500">
                  Default Category
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
            </div>
          </div>
        </div>
        {/* new column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <h3>Product Tags</h3>
          <div className="lg:col-span-2">
            {tags.length > 0 && (
              <div className="flex flex-wrap space-y-1 space-x-1 mb-3">
                {" "}
                {tags.map((tag, i) => (
                  <p
                    key={i}
                    className="bg-primary-200 px-2 py-[2px] text-sm rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            )}
            <Input
              className="input_styles"
              placeholder="Product Tags (Write then press enter to add a new tag)"
              type="text"
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>{" "}
      </form>
    </div>
  );
};

export default AddProductForm;

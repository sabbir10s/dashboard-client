import React from "react";
import { FiX } from "react-icons/fi";
import uploadImg from "../../assets/upload.png";
import useCategorySubmit from "../../hooks/useCategorySubmit";
import MainDrawer from "./MainDrawer";

const CategoryDrawer = ({ isOpen, onClose }) => {
  const { register, onSubmit, errors, handleSubmit, handleImageUpload } =
    useCategorySubmit();

  return (
    <MainDrawer isOpen={isOpen} onClose={onClose}>
      <div className="fixed top-0 right-0 h-auto lg:h-screen lg:w-2/3 w-full shadow-custom z-50 bg-[#F4F5F7]">
        {/* Modal content */}
        {/* Replace this with your modal content */}
        <div className="pt-8 px-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Add Category</h1>
            <p>Add your Category and necessary information from here</p>
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <h3>Category Name</h3>
              <div className="lg:col-span-2">
                <input
                  {...register("name", {
                    required: "Category name is required",
                  })}
                  name="name"
                  type="text"
                  className="input_styles"
                  placeholder="Category Name"
                />
                {errors.name && (
                  <p className="text-error-500">{errors.name?.message}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <h3>Category Description</h3>
              <div className="lg:col-span-2">
                <textarea
                  {...register("description")}
                  name="description"
                  rows="4"
                  className="input_styles"
                  placeholder="Category Description"
                ></textarea>
              </div>
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <h3>Category Images</h3>
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

                  <input
                    onChange={(e) => handleImageUpload(e.target.files)}
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <h3>Parent Category Name</h3>
              <div className="lg:col-span-2 flex justify-between gap-3">
                <div className="w-full">
                  <input
                    {...register("parentId", {
                      required: "Parent Name is required",
                    })}
                    name="parentId"
                    className="input_styles"
                    placeholder="Parent name"
                    type="text"
                  />
                  {errors.parentId && (
                    <p className="text-error-500">{errors.parentId?.message}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    {...register("parentId2")}
                    name="parentId2"
                    className="input_styles"
                    placeholder="Parent name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 z-20 space-x-2 items-center">
              <button
                type="submit"
                className="bg-primary-600 text-white cursor-pointer w-full py-3 border-none rounded-md font-medium"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainDrawer>
  );
};

export default CategoryDrawer;

import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Input from "../lib/Input";

const DefaultForm = () => {
  //   default state showSuccessMessage  = false
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gender: "male",
    acceptedTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, just show success message
    setShowSuccessMessage(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: inputValue }));
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=" Type your name"
            value={formData.name}
            onChange={handleChange}
            className="input_styles"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={handleChange}
            className="input_styles"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-2">
            Phone
          </label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="Type your phone"
            value={formData.phone}
            onChange={handleChange}
            className="input_styles"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
            className="input_styles"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium mb-2">
            Gender
          </label>
          <div className="flex space-x-2">
            <div className="flex space-x-2">
              {" "}
              <Input
                type="radio"
                id="male"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <br />
            <div className="flex space-x-2">
              <Input
                type="radio"
                id="female"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <br />
            <div className="flex space-x-2">
              <Input
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                type="radio"
                id="other"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="select" className="block font-medium mb-2">
            Select Options
          </label>
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
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mr-2 focus:outline-none focus:ring focus:ring-secondary-500"
            />
            <label htmlFor="acceptedTerms" className="font-medium">
              I accept the terms and conditions
            </label>
          </div>
        </div>
      </form>

      {/* show successful message */}
      <Transition
        show={showSuccessMessage}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="mt-4 bg-primary-100 text-primary-700 p-4 rounded-md">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <p>Form submitted successfully!</p>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DefaultForm;

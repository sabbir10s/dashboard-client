import React from "react";
import DefaultForm from "../Forms/DefaultForm";
import Validation from "../Forms/Validation";
import Icons from "../Forms/Icons";

const Form = () => {
  return (
    <div className="w-full  p-0 lg:p-8 rounded-lg shadow-md space-y-8">
      <h2 className="text-4xl font-semibold mb-6 inline-block border-b-2 border-primary-400">Forms</h2>
      <div className="shadow-custom p-8 rounded-lg">
        <h2 className="text-xl font-medium mb-6">Elements</h2>
        <DefaultForm />
      </div>
      <div className="shadow-custom p-8 rounded-lg">
        <h2 className="text-xl font-medium mb-6">Validation</h2>
        <Validation />
      </div>{" "}
      <div className="shadow-custom p-8 rounded-lg">
        <h2 className="text-xl font-medium mb-6">Icons</h2>
        <Icons />
      </div>{" "}
    </div>
  );
};

export default Form;

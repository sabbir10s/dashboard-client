import { Transition } from "@headlessui/react";
import React from "react";

const MainDrawer = ({ isOpen, onClose, children }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed top-0 right-0 h-full w-full overflow-x-hidden">
        <div
          onClick={onClose}
          className="h-screen hidden md:block w-1/3 bg-black opacity-50 fixed top-0 left-0 z-40"
        ></div>

        {children}
      </div>
    </Transition>
  );
};

export default MainDrawer;

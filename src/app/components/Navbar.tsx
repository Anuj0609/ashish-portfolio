"use client";
import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#171321] px-4 py-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className={`text-white text-[16px] font-bold space-x-3 flex flex-row ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <div className="space-x-1">
            <span>A</span> <span>S</span> <span>H</span> <span>I</span>
            <span>S</span> <span>H</span>
          </div>
          <div className="space-x-1">
            <span>Y</span> <span>A</span> <span>D</span> <span>A</span>
            <span>V</span>
          </div>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none focus:text-white"
          >
            {isOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiAlignJustify className="w-8 h-8" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 bg-gray-800 max-w-1/2 p-4 space-y-2`}
        >
          <a href="#home" className="text-gray-300 hover:text-white block py-2">
            Home
          </a>
          <a
            href="#About"
            className="text-gray-300 hover:text-white block py-2"
          >
            About
          </a>
          <a
            href="#Portfolio"
            className="text-gray-300 hover:text-white block py-2"
          >
            Portfolio
          </a>
          <a
            href="#Skills"
            className="text-gray-300 hover:text-white block py-2"
          >
            Skills
          </a>
          <a
            href="#cover-letter"
            className="text-gray-300 hover:text-white block py-2"
          >
            Cover Letter
          </a>
          <a
            href="#Education"
            className="text-gray-300 hover:text-white block py-2"
          >
            Education
          </a>
          <a
            href="#facts"
            className="text-gray-300 hover:text-white block py-2"
          >
            Facts
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-white block py-2"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white block py-2"
          >
            Contact
          </a>
          <a href="#blog" className="text-gray-300 hover:text-white block py-2">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

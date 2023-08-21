import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex justify-between items-center">
        <a className=" text-lg font-semibold" href="#">
          <img src="/assets/logo.png" width={200} className="ms-10" />
        </a>

        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="hidden lg:flex space-x-4 mt-4 me-auto ms-auto gap-8">
          <a className="font-semibold" href="#">
            Home
          </a>
          <a className="font-semibold" href="#">
            Pages
          </a>
          <a className="font-semibold" href="#cards">
            Services
          </a>
          <a className="font-semibold" href="#projects">
            Project
          </a>
          <a className="font-semibold" href="#articles">
            Blog
          </a>
          <a className="font-semibold" href="#join">
            Contact
          </a>
        </div>
        <FaSearch className="me-4 text-2xl cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${
          menuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center">
          <a className="block py-2" href="#">
            Home
          </a>
          <a className="block py-2" href="#">
            Pages
          </a>
          <a className="block py-2" href="#">
            Services
          </a>
          <a className="block py-2" href="#">
            Project
          </a>
          <a className="block py-2" href="#">
            Blog
          </a>
          <a className="block py-2" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

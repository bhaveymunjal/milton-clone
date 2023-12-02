/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/asset 33.svg";
import { Link } from "react-scroll";
import ResponsiveNavigation from "../Utility Components/ResponsiveNavigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#fef9f6] font-sans text-[16px] font-bold border-b border-solid border-[#DFDEDE] fixed w-full z-10">
      <div className="w-[80%] h-[80px] mx-auto flex justify-between items-center">
        <Link
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          className="cursor-pointer mx-2 flex gap-1"
        >
          <img src={logo} alt="" />
          <span>Milton</span>
        </Link>

        {/* Responsive Navigation for large screen devices*/}
        <ResponsiveNavigation/>

        {/* Responsive Hamburger Icon */}
        <div className="md-900:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
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
              ></path>
            </svg>
          </button>
        </div>

        {/* Responsive Menu */}
        {menuOpen && (
          <div className="md-900:hidden flex flex-col absolute top-16 left-0 right-0 bg-[#fef9f6] text-[#6b6b78] border-b border-[#DFDEDE] items-center py-4 ">
            <Link
              to="featuresSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              className="py-2 px-4 hover:text-black hover:underline"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="testimonialSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              className="py-2 px-4 hover:text-black hover:underline"
              onClick={toggleMenu}
            >
              Testimonial
            </Link>
            <Link
              to="pricingSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              className="py-2 px-4 hover:text-black hover:underline"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="faqSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
              className="py-2 px-4 hover:text-black hover:underline"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
            <a
              href="#"
              className="py-2 px-4 hover:text-black hover:underline"
              onClick={toggleMenu}
            >
              Blogs
            </a>
              <button className="bg-[#F1F2F4] rounded-xl py-[8px] px-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
                Log in
              </button>
              <button className="bg-black text-white rounded-xl mt-2 py-[8px] px-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
                Get started
              </button>
          </div>
        )}

        <div className="hidden md-900:flex gap-[8px]">
          <button className="bg-[#F1F2F4] rounded-xl text-xs sm:text-sm py-[8px] px-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
            Log in
          </button>
          <button className="bg-black text-white rounded-xl py-[8px] px-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

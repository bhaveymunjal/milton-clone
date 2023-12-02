/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/asset 33.svg";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="bg-[#fef9f6] font-sans text-[16px] font-bold border-b border-solid border-[#DFDEDE] fixed w-full z-10">
      <div className="w-[80%] h-[80px] mx-auto flex justify-between items-center">
        
      <Link
            to="heroSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mx-2 flex gap-1"
        >
          <img src={logo} alt="" />
          <span>Milton</span>
        </Link>
        <div className=" text-[#6b6b78] flex gap-[40px]">
          <Link
            to="featuresSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Features
          </Link>
          <Link
            to="testimonialSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Testimonial
          </Link>
          <Link
            to="pricingSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Pricing
          </Link>
          <Link
            to="faqSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            FAQs{" "}
          </Link>
          <a
            href="#"
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Blogs{" "}
          </a>
        </div>
        <div className="flex gap-[8px]">
          <button className="bg-[#F1F2F4] rounded-xl py-[8px] px-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
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

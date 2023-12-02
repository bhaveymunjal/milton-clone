/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/asset 34.svg";
import twitter from "../assets/asset 25.svg";
import facebook from "../assets/asset 26.svg";
import linkedin from "../assets/asset 27.svg";
import { Link } from "react-scroll";

export default function Footer() {
  const footerItems = [
    { id: "featuresSection", text: "Features" },
    { id: "testimonialSection", text: "Testimonials" },
    { id: "pricingSection", text: "Pricing" },
    { id: "faqSection", text: "FAQs" },
  ];

  return (
    <div className="bg-[#f1f2f4] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="mb-8 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="h-8" />
              <h2 className="text-[20px] font-semibold text-gray-900">
                Milton
              </h2>
            </div>
            <p className="text-gray-500 font-medium mb-4">
              A short text explaining why my startup is so cool
            </p>
            <p className="text-gray-500 font-medium mb-4">
              © My super start-up
            </p>
            <div className="flex gap-2">
              <a href="#" className="hover:underline hover:text-black">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" className="hover:underline hover:text-black">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="hover:underline hover:text-black">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
              Products
            </h2>
            <ul className="text-gray-500 font-medium">
              {footerItems.map((item) => (
                <li key={item.id} className="mb-4">
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                    className="hover:underline hover:text-black cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
              Resources
            </h2>
            <ul className="text-gray-500 font-medium">
              {["Change Log", "Help Center", "Blog", "Contact"].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others and Blog */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
              Others
            </h2>
            <ul className="text-gray-500 font-medium">
              {["Privacy", "Terms", "Affiliation", "Press"].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
              From the Blog
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-black">
                  Mastering Your Schedule: Top Time Management Techniques for
                  Balancing Work and Life
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-black">
                  Organizing Your Calendar for Enhanced Productivity and Focus
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-black">
                  The Power of Prioritization: Effective Strategies for Managing
                  Your Time and Tasks
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline hover:text-black">
                  Maximizing Your Minutes: Essential Tips for Streamlining Your
                  Daily Routine and Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

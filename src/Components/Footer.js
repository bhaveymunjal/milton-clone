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
      <div class="w-[80%] mx-auto  ">
        <div class=" gap-24 px-4 py-6 lg:py-8 flex justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" />
              <h2 class="text-[20px] font-semibold text-gray-900  ">Milton</h2>
            </div>
            <ul class="text-gray-500  font-medium">
              <li class="mb-4">
                <a href="#" class=" hover:underline hover:text-black">
                  A short text explaining why my startup is so cool
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline hover:text-black">
                  © My super start-up
                </a>
              </li>
              <li class="mb-4 flex gap-2">
                <a href="#" class="hover:underline hover:text-black">
                  <img src={twitter} alt="" />
                </a>
                <a href="#" class="hover:underline hover:text-black">
                  <img src={facebook} alt="" />
                </a>
                <a href="#" class="hover:underline hover:text-black">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-[20px] font-semibold text-gray-900  ">
              Products
            </h2>
            <ul class="text-gray-500  font-medium">
              {footerItems.map((item) => (
                <li key={item.id} className="mb-4 ">
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:underline hover:text-black cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-[20px] font-semibold text-gray-900  ">
              Resources
            </h2>
            <ul class="text-gray-500  font-medium">
              {["Change Log", "Help Center", "Blog", "Contact"].map((item) => {
                return (
                  <li class="mb-4">
                    <a href="#" class="hover:underline hover:text-black">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-[20px] font-semibold text-gray-900  ">
              Others
            </h2>
            <ul class="text-gray-500  font-medium">
              {["Privacy", "Terms", "Affiliation", "Press"].map((item) => {
                return (
                  <li class="mb-4">
                    <a href="#" class="hover:underline hover:text-black">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-[20px] font-semibold text-gray-900  ">
              From the Blog
            </h2>
            <ul class="text-gray-500  font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline hover:text-black">
                  Mastering Your Schedule: Top Time Management Techniques for
                  Balancing Work and Life
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline hover:text-black">
                  Organizing Your Calendar for Enhanced Productivity and Focus
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline hover:text-black">
                  The Power of Prioritization: Effective Strategies for Managing
                  Your Time and Tasks
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline hover:text-black">
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

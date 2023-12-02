/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-scroll'

export default function ResponsiveNavigation() {
  return (
    <div className="hidden md-900:flex gap-[10px] text-[#6b6b78]">
          <Link
            to="featuresSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Features
          </Link>
          <Link
            to="testimonialSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Testimonial
          </Link>
          <Link
            to="pricingSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="cursor-pointer mx-2 hover:text-black underline-offset-2 hover:underline"
          >
            Pricing
          </Link>
          <Link
            to="faqSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
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
  )
}

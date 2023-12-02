import React from "react";
import check from "../assets/asset 31.svg";
export default function PriceCard({ plan, price, cost }) {
  const features = [
    "A cool feature",
    "A basic feature",
    "A top feature with limitations",
    "An incredible feature so useful",
    "A top feature",
  ];
  return (
    <div className="bg-white  p-8 rounded-2xl text-[16px]">
      <p
        className={`mx-auto px-[32px] py-[8px] text-[20px] bg-[#f1f2f4] font-semibold rounded-full inline`}
      >
        {" "}
        {plan}{" "}
      </p>
      <p className="text-[#6b6b78] mt-4">
        So you can see how incredible our tool is
      </p>
      <span className="text-[40px] md:text-[60px] lg:text-[80px] font-bold">${price}</span>
      <span className="text-[#6b6b78] text-[20px]">/mo</span>
      <p>{cost}</p>
      <div className=" text-center mt-4">
        <button className="bg-[#2e2e2e] w-full text-[#fefefe] rounded-xl text-xs sm:text-sm md:text-lg  px-[24px] py-[12px] lg:px-[32px] lg:py-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
          Get started
        </button>
        <p className="text-[#6b6b78] mt-2 text-xs">
          {plan === "Free"
            ? "No credit card needed"
            : "7 days free trial no credit card needed"}
        </p>
      </div>
      <div className="">
        <p className="text-[20px] font-semibold my-4">What's included:</p>
        <ul className="text-[#6b6b78]">
          {features.map((feature) => {
            return (
              <li className="flex gap-2 mb-3">
                <img src={check} alt="" width={24} />
                <span className="">{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

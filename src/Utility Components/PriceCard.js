import React from "react";
import check from "../assets/asset 31.svg";
export default function PriceCard({ plan, price, cost }) {
  return (
    <div className="bg-white p-8 rounded-2xl text-[16px]">
      <p
        className={`mx-auto px-[32px] py-[8px] text-[20px] bg-[#f1f2f4] font-semibold rounded-full inline`}
      >
        {" "}
        {plan}{" "}
      </p>
      <p className="text-[#6b6b78] mt-4">
        So you can see how incredible our tool is
      </p>
      <span className="text-[80px] font-bold">${price}</span>
      <span className="text-[#6b6b78] text-[20px]">/mo</span>
      <p>{cost}</p>
      <div className=" text-center mt-4">
        <button className="bg-[#2e2e2e] w-full text-[#fefefe] rounded-xl px-[32px] py-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
          Get started
        </button>
        <p className="text-[#6b6b78] mt-2 text-xs">
          {plan === "Free" ? "No credit card needed" : "7 days free trial no credit card needed"}
        </p>
      </div>
      <div className="">
        <p className="text-[20px] font-semibold mt-4">What's included:</p>
        <ul className="text-[#6b6b78]">
          <li className="flex gap-2 mb-3">
            <img src={check} alt="" width={24} />
            <span className="">A cool feature</span>
          </li>
          <li className="flex gap-2 mb-3">
            <img src={check} alt="" width={24} />
            <span className="">A basic feature</span>
          </li>
          <li className="flex gap-2 mb-3">
            <img src={check} alt="" width={24} />
            <span className="">A top feature with limitations</span>
          </li>
          <li className="flex gap-2 mb-3">
            <img src={check} alt="" width={24} />
            <span className="">An incredible feature so useful</span>
          </li>
          <li className="flex gap-2 mb-3">
            <img src={check} alt="" width={24} />
            <span className="">A top feature</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

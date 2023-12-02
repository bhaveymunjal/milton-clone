import React from "react";
export default function FeatureCard({ img, title, description, color }) {
  
  return (
    <div
      className={`fade-in-from-bottom flex flex-col mx-auto w-[100%] sm:w-[80%] md:w-[45%] lg:w-[30%] gap-5`}
    >
      <div className="bg-[#f1f2f4] py-10 px-16 flex justify-center rounded-xl w-[100%] h-[300px]">
        <img src={img} alt="" className="" />
      </div>
      <p
        className={`mr-auto px-[32px] py-[8px] text-[16px] bg-[${color}] font-semibold rounded-full text-[#2d2d2d]`}
      >
        {/* <p className={`mr-auto px-[32px] py-[8px] text-[16px] bg-[#cceafd] font-semibold rounded-full`}> */}
        {title}
      </p>
      <p className="text-justify text-[#6b6b78]">{description}</p>
    </div>
  );
}

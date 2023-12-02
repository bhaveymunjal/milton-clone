import React from "react";
import FeedbackCard from "./FeedbackCard";
export default function MainFeatureCard({
  heading,
  title,
  description,
  review,
  user,
  direction,
  dp,
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p
          className={`mr-auto px-[32px] py-[8px] text-[16px] bg-[#fee9cb] font-semibold rounded-full`}
        >
          {heading}
        </p>
        <h1 className="text-[#2d2d2d] text-[28px] lg:text-[52px] font-bold leading-[1.2]">
          {title}
        </h1>
      </div>
      <div className="">
        <p className="text-[#6b6b78] text-[20px]">{description}</p>
      </div>
      <FeedbackCard direction={direction} review="I never missed a call again, the AI driven feature is a game changer for me! " user="Adam, Solo founder" dp={dp} />
    </div>
  );
}

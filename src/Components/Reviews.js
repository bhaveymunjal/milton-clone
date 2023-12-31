import React from "react";
import ComponentHeader from "../Utility Components/ComponentHeader";
import ReviewCard from "../Utility Components/ReviewCard";

export default function Reviews() {
  return (
    <div id="testimonialSection" className=" mx-auto flex flex-col gap-y-12">
      <ComponentHeader
        header="They already love our products 😍"
        title="See what our users say about us"
      />
      <div className=" overflow-hidden mt-10">
        <div className=" group w-max custom-animation flex gap-2 mb-4 ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className=" group w-max custom-animation1 flex gap-2 mb-4 ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className=" group w-max custom-animation2 flex gap-2  ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

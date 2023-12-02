import React from "react";
import img from "../assets/asset 17.png";
export default function ReviewCard() {
  return (
    <div className=" xl:w-[500px] lg:min-w-[400px] min-w-[300px] bg-white border p-4 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <img src={img} alt="" />
          <span className="font-semibold">“Highly recommend”</span>
        </div>
        <div className="">⭐⭐⭐⭐⭐</div>
      </div>
      <div className="">
        <p className="text-[#6b6b78]">
          This app has saved me so much time and stress! I used to constantly
          forget important dates, but now I can stay on top of everything. You
          should test it!
        </p>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold">Sophie Devilan</div>
        <div className="text-[#6b6b78]">Entrepreneur</div>
      </div>
    </div>
  );
}

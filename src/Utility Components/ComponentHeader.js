import React from "react";

export default function ComponentHeader({ title, header }) {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px]">
      <p className={`mx-auto px-[32px] py-[8px] text-[16px] bg-[#f1f2f4] font-semibold rounded-full`}>
        {header}
      </p>
      <h1 className="text-[#2d2d2d] text-[52px] mx-auto font-bold">{title}</h1>
    </div>
  );
}

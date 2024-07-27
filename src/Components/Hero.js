import React from "react";
import img1 from "../assets/asset 15.png";
import img2 from "../assets/asset 16.png";
import img3 from "../assets/asset 17.png";
import img4 from "../assets/asset 18.png";
import img5 from "../assets/asset 19.png";

export default function Hero() {
  return (
    <div
      className="h-screen w-[80%] mx-auto flex items-center justify-center flex-col"
      id="heroSection"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="">
        <p className="px-[16px] py-[8px] text-[16px] bg-[#f1f2f4] font-bold rounded-full">
          An another way to manage time
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center mt-8">
        <div className="leading-[0.95] text-[40px] sm:text-[60px] lg:text-[80px] md:w-[80%] text-center font-semibold">
          <h1 className="">Your New Favorite calender🗓️app</h1>
        </div>
        <div className=" text-[#6b6b78] md:w-[60%] text-center">
          <p className="text-xs sm:text-sm md:text-lg">
            Here you should explain how cool your app is. Remember,focus on the
            benefits for your users, not on the features.
          </p>
        </div>
        <div className="text-center">
          <button className="bg-[#2e2e2e] text-[#fefefe] rounded-xl text-xs sm:text-sm md:text-lg  px-[24px] py-[12px] lg:px-[32px] lg:py-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
            Get started, it's free
          </button>
          <p className="text-[#6b6b78] text-[12px] mt-2">
            Free 14 days trials,no credit card needed
          </p>
        </div>
        <div className="flex gap-2">
        <div className="flex">
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <img key={index} src={img} className={`border-[3px] w-[40px] border-white rounded-full ${index > 0 ? '-ml-4' : ''}`} alt="" />
          ))}
        </div>

          <div className="">
            <div class="flex items-end gap-1.5 -ml-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-yellow-300">
                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239" fill="#FEC84B"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-yellow-300">
                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239" fill="#FEC84B"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-yellow-300">
                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239" fill="#FEC84B"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-yellow-300">
                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239" fill="#FEC84B"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-yellow-300">
                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239" fill="#FEC84B"></path>
              </svg>
              <p class="text-base font-semibold leading-4">5.0</p>
            </div>
            <p className="text-[10px] sm:text-[16px]">From 200+ happy users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

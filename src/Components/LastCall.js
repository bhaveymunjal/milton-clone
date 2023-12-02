import React from 'react'
import ComponentHeader from '../Utility Components/ComponentHeader'
import FeedbackCard from '../Utility Components/FeedbackCard'
import dp from '../assets/asset 24.png'

export default function LastCall() {
  return (
    <div className='flex flex-col w-[80%] mx-auto items-center gap-6 pb-[150px]'>
        <ComponentHeader header="Last call Baby! 🚀" title="Ready to start?"/>
        <div className=" text-[#6b6b78] md:w-[80%] lg:w-[45%] text-center mx-auto">
          <p className="text-xs sm:text-sm md:text-lg">
            Here you should explain how cool your app is. Remember,focus on the
            benefits for your users, not on the features.
          </p>
        </div>
        <button className="bg-[#2e2e2e] text-[#fefefe] text-xs sm:text-sm md:text-lg rounded-xl px-[24px] py-[12px] lg:px-[32px] lg:py-[16px] transition-transform duration-300 ease-in-out hover:scale-110 shadow-md">
        Get started, it's free
        </button>
        <FeedbackCard review="I never missed a call again, the AI driven feature is a game changer for me! " user="Adam, Solo founder" dp={dp} />
    </div>
  )
}

import React from 'react'

export default function FeedbackCard({review, user, dp, direction}) {
  return (
    <div className={`flex ${direction==='right'?'flex-row-reverse':''}`}>
        <img src={dp} className='w-[80px]' alt=""  />
        <div className={`bg-[#2e2e2e] p-4 rounded-tl-[12px] rounded-tr-[12px] ${direction==='right'?'rounded-bl-[12px] rounded-br-[2px]':'rounded-br-[12px] rounded-bl-[2px]'} rounded-br-[12px] rounded-bl-[4px]`}>
            <p className="text-[#fefefe] text-xs sm:text-sm md:text-lg mb-3">{review}</p>
            <p className="text-[#90909e] text-xs sm:text-sm md:text-lg">{user}</p>
        </div>
    </div>
  )
}

import React from 'react'

export default function FeedbackCard({review, user, dp, direction}) {
  return (
    <div className={`flex ${direction==='right'?'flex-row-reverse':''}`}>
        <img src={dp} alt="" width="80px" height={10} />
        <div className={`bg-[#2e2e2e] p-4 rounded-tl-[12px] rounded-tr-[12px] ${direction==='right'?'rounded-bl-[12px] rounded-br-[2px]':'rounded-br-[12px] rounded-bl-[2px]'} rounded-br-[12px] rounded-bl-[4px]`}>
            <p className="text-[#fefefe]">{review}</p>
            <p className="text-[#90909e]">{user}</p>
        </div>
    </div>
  )
}

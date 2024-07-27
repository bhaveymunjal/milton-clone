import React, { useState } from "react";

export default function Button() {
    const [color, setColor] = useState('bg-red-600')
    const toggleClick = ()=>{
        if(color==='bg-red-600')
            setColor('bg-green-600')
        else
            setColor('bg-red-600')
    }
  return (
    <div>
      <button onClick={toggleClick} className={`border ${color} text-white p-4`}>Click Here</button>
    </div>
  );
}

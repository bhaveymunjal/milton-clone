import React, { useState } from "react";
import ComponentHeader from "../Utility Components/ComponentHeader";
import PriceCard from "../Utility Components/PriceCard";

export default function Price() {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div id="pricingSection">
      <div className="w-[80%] mx-auto">
        <ComponentHeader
          header="Pricing and plans 💰"
          title="Find the best plan for your needs"
        />
        <main className="grid place-items-center">
          <div className="grid w-[30rem] grid-cols-2 gap-2 rounded-xl bg-[#f3f3f3] p-2 transition-all duration-300 ease-in-out">
            {["Monthly", "Annually"].map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="option"
                  id={option.toString()}
                  value={option.toString()}
                  className="peer hidden"
                  checked={selectedOption === option.toString()}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor={option.toString()}
                  className={`block cursor-pointer select-none rounded-xl p-2 text-center ${
                    selectedOption === option.toString()
                      ? "peer-checked:bg-white peer-checked:font-bold peer-checked:text-black peer-checked:opacity-100"
                      : "opacity-60"
                  } transition-all duration-500 ease-in-out`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </main>
        <div className="mt-10 flex gap-4 w-full justify-between">
          <PriceCard plan="Free" price={0} cost="Free for ever" />
            
          <PriceCard plan="Starter" price={selectedOption==='Monthly'?19:15} cost={selectedOption==='Monthly'?'Billed monthly':'Billed $180 yearly'} />
          <PriceCard plan="Pro" price={selectedOption==='Monthly'?49:45} cost={selectedOption==='Monthly'?'Billed monthly':'Billed $540 yearly'}/>
        </div>
      </div>
    </div>
  );
}

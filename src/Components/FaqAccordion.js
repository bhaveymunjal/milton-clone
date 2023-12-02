import React, { useState } from "react";
import ComponentHeader from "../Utility Components/ComponentHeader";

const FaqAccordion = () => {
  const faqData = [
    {
      question: "Can I cancel my subscrition?",
      answer:
        "You can cancel your plan whenever you'd like. You'll be downgraded to the free plan. You won't be locked out of any projects that have paid plans.",
    },
    {
      question: "What happens when my trial ends?",
      answer:
        "When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.",
    },
    {
      question: "What payment methods do you offer?",
      answer:
        "We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the 'Help' section in your account or email us at support@Milton.com, and we'll be happy to assist you.",
    },
    {
      question: "Do you offer discounts to educational institutions ?",
      answer:
        "Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.",
    },
  ];

  const [openIndices, setOpenIndices] = useState([]);
  const [rotations, setRotations] = useState(Array(faqData.length).fill(90));

  const toggleAccordion = (index) => {
    setOpenIndices((prevOpenIndices) => {
      if (prevOpenIndices.includes(index)) {
        return prevOpenIndices.filter((i) => i !== index);
      } else {
        return [...prevOpenIndices, index];
      }
    });
  };

  const handleClick = (index) => {
    setRotations((prevRotations) => {
      const newRotations = [...prevRotations];
      newRotations[index] = newRotations[index] === 90 ? 0 : 90;
      return newRotations;
    });
  };

  return (
    <div className="w-[80%] mx-auto mt-8" id="faqSection">
      <ComponentHeader
        header="Relevant stuff, bla bla 📣"
        title="Frequently asked questions "
      />
      <div className="w-[80%] mx-auto pt-16">
        <ul>
          {faqData.map((faq, index) => (
            <li key={index} className="mb-8 bg-[#f1f2f4] px-6 py-4 rounded-xl">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <div
                  className="bg-[#90909e] opacity-40   rounded-full flex w-[30px] h-[30px] justify-center items-center relative cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <div
                    className={`w-[16px] h-[2px] rounded-lg bg-black absolute top-auto bottom-auto left-[7px] right-0`}
                    style={{
                      transform: `rotate(${rotations[index]}deg)`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  ></div>
                  <div className="w-[16px] h-[2px] bg-black rounded-lg"></div>
                </div>
              </div>
              {openIndices.includes(index) && (
                <div className="pt-2 pb-4 text-[16px]">
                  <p className="text-[#6b6b78]">{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqAccordion;

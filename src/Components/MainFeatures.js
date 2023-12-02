import React from "react";
import ComponentHeader from "../Utility Components/ComponentHeader";
import MainFeatureCard from "../Utility Components/MainFeatureCard";
import img1 from "../assets/asset 2.png";
import img2 from "../assets/asset 3.png";
import img3 from "../assets/asset 6.png";
import img4 from "../assets/asset 7.png";
import dp1 from "../assets/asset 1.png";
import dp2 from "../assets/asset 4.png";
import dp3 from "../assets/asset 5.png";
import dp4 from "../assets/asset 8.png";
const data = [
  {
    heading:"Seamless Scheduling",
    title:"Focus on what matters most for you",
    description:"Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
    review:"I tested many calendar apps. This app is the best of all! It saves me hours of time.",
    user:"Carla, Head of Finance",
    img:img1,
    dp:dp1
  },
  {
    heading:"Smart Reminders & Task",
    title:"Never miss an important deadline or event again",
    description:"Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
    review:"I love how user-friendly this app is! It's so easy to add events and set reminders!",
    user:"Adam, entrepreneur",
    img:img2,
    dp:dp2
  },
  {
    heading:"Seamless Scheduling",
    title:"Focus on what matters most for you",
    description:"Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
    review:"I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.",
    user:"Annie, Designer",
    img:img3,
    dp:dp3
  },
  {
    heading:"Smart Reminders & Task",
    title:"Never miss an important deadline or event again",
    description:"Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
    review:"I've recommended this app to all my friends and colleagues! ",
    user:"Karl, CTO of a cool startup",
    img:img4,
    dp:dp4  
  },
]
export default function MainFeatures() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-20" id='featuresSection'>
      <ComponentHeader header="Our main features 🦸🏼" title="Discover your new superpowers" />
      {data.map((card,i)=>{
        const direction = i % 2 === 0 ? 'left' : 'right';
        return(
          <div className={`flex ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2">
              <MainFeatureCard heading={card.heading} user={card.user} review={card.review} description={card.description} title={card.title} dp={card.dp} direction={direction} />
            </div>
            <div className="w-1/2">
              <img src={`${card.img}`} alt="" />
            </div>
          </div>
        )
      })}
    </div>
  );
}

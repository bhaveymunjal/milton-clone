import React from 'react'
import FeatureCard from '../Utility Components/FeatureCard'
import img1 from "../assets/asset 9.svg";
import img2 from "../assets/asset 10.svg";
import img3 from "../assets/asset 11.svg";
import img4 from "../assets/asset 12.png";
import img5 from "../assets/asset 13.png";
import img6 from "../assets/asset 14.png";
import ComponentHeader from '../Utility Components/ComponentHeader';
export default function Features() {
    const data = [{
            title:"Cross-Device Sync",
            description: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
            img:img1,
            color:"#f1f2f4"
        },
        {
            title:"Auto Event Import",
            description: "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.",
            img:img2,
            color:"#fee9cb"
        },
        {
            title:"Task Delegation",
            description: "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.",
            img:img3,
            color:"#cceafd"
        },
        {
            title:"Voice Command Integration",
            description: "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.",
            img:img4,
            color:"#ddf4e4"
        },
        {
            title:"Customizable Alerts",
            description: "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.",
            img:img5,
            color:"#fdded6"
        },
        {
            title:"Privacy Protection",
            description: "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.",
            img:img6,
            color:"#c39cf6"
        },
    ]
  return (
    <div className='w-[80%] mx-auto flex flex-col items-center gap-y-12' >
        <ComponentHeader header="And so much more... 💼" title="Our features to make your life easier"/>
        
        <div className="flex flex-wrap gap-y-16">
        {data.map((card) => {
            return <FeatureCard img={card.img} description={card.description} title={card.title} color={card.color} />
        })}
        </div>
    </div>
  )
}

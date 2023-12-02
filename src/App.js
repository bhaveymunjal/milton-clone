import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Superpage from "./Components/Superpage";
import MainFeatures from "./Components/MainFeatures";
import Features from "./Components/Features";
import FaqAccordion from "./Components/FaqAccordion";
import Reviews from "./Components/Reviews";
import Price from "./Components/Price";
import LastCall from "./Components/LastCall";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-[#fef9f6] ">
        <Hero/>
        <Superpage/>
        <MainFeatures/>
        <Features/>
        <Reviews/>
        <Price/>
        <FaqAccordion/>
        <LastCall/>
      </div>
      <Footer/>
    </>
  );
}

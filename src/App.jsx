import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PaketSection from "./components/PaketSection";
import PromoSection from "./components/PromoSection";
import HelpSection from "./components/HelpSection";
import MySmartfrenSection from "./components/MySmartfrenSection";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      <div id="paket" data-aos="fade-up"><PaketSection /></div>
      <div id="promo" data-aos="fade-up"><PromoSection /></div>
      <div id="help" data-aos="fade-up"><HelpSection /></div>
      <div id="mysmartfren" data-aos="fade-up"><MySmartfrenSection /></div>
    </div>
  );
}

export default App;






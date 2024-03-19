import Navbar from "@/presentation/components/Navbar";
import React from "react";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";

const HomePage = () => {
  return (
    <>
      <header className="relative w-full overflow-hidden">
        <div className="w-full absolute h-[500px] overflow-hidden">
          <div className="absolute left-0 top-0 h-[412px] w-[412px] rounded-3xl bg-[#7C3EFF] opacity-10 blur-3xl filter"></div>
          <div className="absolute right-0 top-0 h-[412px] w-[412px] rounded-3xl bg-[#BE229C] opacity-10 blur-3xl filter"></div>
        </div>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <Timeline />
        <Sponsor />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksSection from "./HowItWorksSection";
import SpecialitiesSection from "./SpecialitiesSection";
import TelemedicineSection from "./TemedicineSection";
import InfoSection3 from "./InfoSection3";
import InfoSection2 from "./InfoSection2";
import InfoSection1 from "./InfoSection1";
import CardsSection from "./CardsSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <InfoSection1 />
      <HowItWorksSection />
      <InfoSection2 />
      <SpecialitiesSection />
      <CardsSection />
      <InfoSection3 />
      <TelemedicineSection />
      <Footer />
    </>
  );
};

export default HomePage;

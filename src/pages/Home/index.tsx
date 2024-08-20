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
import Banner from "@/components/Banner";
import BannerImage from "@/assets/banner-img.png";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner
        heading="Global Health Opinion"
        description="At Global Health Opinion Inc., headquartered in Texas, USA, we boast a diverse network of doctors, hailing from multiple geographies and bringing a wealth of experience. "
        image={BannerImage}
      />

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

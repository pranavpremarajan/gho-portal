import SimpleLayout from "@/layouts/SimpleLayout";
import SpecialitiesSection from "../Home/SpecialitiesSection";
import CardsSection from "../Home/CardsSection";
import Banner from "@/components/Banner";
import bannerImg from "@/assets/banner-img.png";

const ServicesPage = () => {
  return (
    <>
      <SimpleLayout>
        <Banner
          heading="Our Services"
          description="We provide expert second opinions to help you make informed health decisions with confidence. Our top-tier specialists offer detailed, unbiased evaluations from the comfort of your home, ensuring you have the clarity and reassurance needed for your healthcare journey"
          image={bannerImg}
        />
        <CardsSection />
        <SpecialitiesSection />
      </SimpleLayout>
    </>
  );
};

export default ServicesPage;

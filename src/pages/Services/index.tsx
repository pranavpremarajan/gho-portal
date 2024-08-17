import SimpleLayout from "@/layouts/SimpleLayout";
import SpecialitiesSection from "../Home/SpecialitiesSection";
import CardsSection from "../Home/CardsSection";
import Container from "@/components/Container";
import Image from "@/assets/Service Image.png";

const ServicesPage = () => {
  return (
    <>
      <SimpleLayout>
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-2 py-10">
            <div
              className="h-100 w-100 min-h-[350px] mx-10"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="p-10">
              At Global Health Opinion, we are dedicated to ensuring you have
              the confidence and clarity needed to make informed health
              decisions. Our specialized second opinion service connects you
              with top-tier medical experts who meticulously review your
              diagnosis, medical history, and test results. Whether you’re
              uncertain about a recent diagnosis, considering alternative
              treatments, or simply seeking confirmation, our comprehensive
              evaluation provides you with a detailed, unbiased perspective. We
              prioritize your convenience and privacy, offering this crucial
              service from the comfort of your own home. By leveraging the
              expertise of leading specialists across various fields, we empower
              you with the knowledge and reassurance necessary to navigate your
              health care journey with confidence. At Global health Opinion,
              your health is our priority, and we are here to guide you every
              step of the way.
            </div>
          </div>
        </Container>

        <CardsSection />
        <SpecialitiesSection />
      </SimpleLayout>
    </>
  );
};

export default ServicesPage;

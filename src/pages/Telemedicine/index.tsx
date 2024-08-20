import SimpleLayout from "@/layouts/SimpleLayout";
import TelemedicineSection from "../Home/TemedicineSection";
import Banner from "@/components/Banner";
import bannerImg from "@/assets/banner-img.png";

const TelemedicinePage = () => {
  return (
    <>
      <SimpleLayout>
        <Banner
          heading="Telemedicine"
          description="Our mission is to empower patients worldwide by providing
                    expert medication reviews, insightful second opinions, and
                    comprehensive peer reviews. We believe in guiding
                    individuals toward informed health decisions, ensuring they
                    have peace of mind through our extensive online second
                    opinion services."
          image={bannerImg}
        />

        <TelemedicineSection />
      </SimpleLayout>
    </>
  );
};

export default TelemedicinePage;

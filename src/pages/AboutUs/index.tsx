import SimpleLayout from "@/layouts/SimpleLayout";
import AboutUsImage1 from "@/assets/About Image1.jpg";
import AboutUsImage2 from "@/assets/About Image2.jpg";
import AboutUsImage3 from "@/assets/About Image3.jpg";
import AboutUsImage4 from "@/assets/About Image4.jpg";
import Container from "@/components/Container";

const AboutUsPage = () => {
  return (
    <>
      <SimpleLayout>
        <Container className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{
                  marginBottom: "150px",
                }}
              >
                <img
                  src={AboutUsImage1}
                  className="h-[250px] rounded-xl"
                  style={{}}
                />
                <img
                  src={AboutUsImage2}
                  className="h-[250px] rounded-xl"
                  style={{
                    position: "absolute",
                    top: "150px",
                    left: "100px",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center ">
              <div>
                <div className="font-bold pb-3">OUR MISSION</div>
                <div className="font-bold text-2xl pb-3">
                  Empowering Patients Worldwide with Expert Medical Insights
                </div>
                Our mission is to empower patients worldwide by providing expert
                medication reviews, insightful second opinions, and
                comprehensive peer reviews. We believe in guiding individuals
                toward informed health decisions, ensuring they have peace of
                mind through our extensive online second opinion services.
              </div>
            </div>
          </div>
        </Container>

        <Container className="bg-white">
          <div className="grid grid-cols-2 py-10">
            <div className="flex items-center ">
              <div>
                <div>OUR MISSION</div>
                <div>
                  Empowering Patients Worldwide with Expert Medical Insights
                </div>
                Our mission is to empower patients worldwide by providing expert
                medication reviews, insightful second opinions, and
                comprehensive peer reviews. We believe in guiding individuals
                toward informed health decisions, ensuring they have peace of
                mind through our extensive online second opinion services.
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{
                  marginBottom: "150px",
                }}
              >
                <img
                  src={AboutUsImage3}
                  className="h-[250px] rounded-xl"
                  style={{}}
                />
                <img
                  src={AboutUsImage4}
                  className="h-[250px] rounded-xl"
                  style={{
                    position: "absolute",
                    top: "150px",
                    left: "100px",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </SimpleLayout>
    </>
  );
};

export default AboutUsPage;

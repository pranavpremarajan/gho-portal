import SimpleLayout from "@/layouts/SimpleLayout";
import AboutUsImage2 from "@/assets/About Image2.jpg";
import AboutUsImage3 from "@/assets/About Image3.jpg";
import Container from "@/components/Container";
import bannerImg from "@/assets/banner-img.png";
import Banner from "@/components/Banner";

const AboutUsPage = () => {
  return (
    <>
      <SimpleLayout>
        <Banner
          heading="About Us"
          description="Our mission is to empower patients worldwide by providing
                    expert medication reviews, insightful second opinions, and
                    comprehensive peer reviews. We believe in guiding
                    individuals toward informed health decisions, ensuring they
                    have peace of mind through our extensive online second
                    opinion services."
          image={bannerImg}
        />

        <Container className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img src={AboutUsImage2} className="h-[400px] rounded-xl" />
              </div>
            </div>

            <div className="flex items-center p-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex items-center p-10">
              <div>
                <div className="font-bold pb-3">WHAT WE DO</div>
                <div className="font-bold text-2xl pb-3">
                  Utilizing advanced AI technology, we deliver immediate medical
                  evaluations and detailed analyses of medicinal compositions
                  and applications. Our services include:
                </div>
                Expert Medication Reviews: Comprehensive evaluations of
                medications to ensure they are safe and effective.
                <br /> Insightful Second Opinions: Trusted medical advice from
                experienced professionals, providing clarity and confidence in
                your healthcare decisions. <br />
                Comprehensive Peer Reviews: Detailed assessments by our network
                of doctors, offering a multi-faceted view of your medical
                situation.
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div
                className="relative"
                style={{
                  marginBottom: "150px",
                }}
              >
                <img src={AboutUsImage3} className="h-[400px] rounded-xl" />
              </div>
            </div>
          </div>
        </Container>

        <Container className="bg-white py-10">
          <svg
            width="101"
            height="27"
            viewBox="0 0 101 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="13.3401"
              cy="13.3401"
              r="11.8401"
              stroke="#181A93"
              stroke-width="3"
            />
            <circle
              cx="50.0208"
              cy="13.3401"
              r="11.8401"
              stroke="#181A93"
              stroke-width="3"
            />
            <circle
              cx="86.7015"
              cy="13.3401"
              r="11.8401"
              stroke="#181A93"
              stroke-width="3"
            />
          </svg>{" "}
          <div className="text-center">
            <div className="font-bold pb-3">OUR COMMITMENT</div>
            <div className="font-bold text-2xl pb-3">
              Ensuring Timely, Accurate, and Reliable Health Guidance
            </div>
            We are dedicated to providing timely, accurate, and reliable medical
            insights. Our goal is to help individuals worldwide make
            well-informed health decisions with confidence, supported by the
            expertise of our global network of doctors and advanced AI
            technology.
          </div>
        </Container>
      </SimpleLayout>
    </>
  );
};

export default AboutUsPage;

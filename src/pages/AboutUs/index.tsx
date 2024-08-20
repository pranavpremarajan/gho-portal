import SimpleLayout from "@/layouts/SimpleLayout";
import AboutUsImage2 from "@/assets/About Image2.jpg";
import AboutUsImage3 from "@/assets/About Image3.jpg";
import Container from "@/components/Container";
import bannerImg from "@/assets/banner-img.png";
import Banner from "@/components/Banner";
import useScrolled from "@/hooks/useScrolled";

const AboutUsPage = () => {
  const scrollPosition = useScrolled();

  return (
    <>
      <SimpleLayout>
        <Banner
          heading="About Us"
          description="At Global Health Opinion, we conduct impactful health research and collaborate with governments, NGOs, and academics to improve health systems. We offer expert second opinions and provide rigorous peer review, all to advance global healthcare."
          image={bannerImg}
        />

        <Container className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src={AboutUsImage2}
                  className={`h-[400px] rounded-xl ${
                    scrollPosition > 50
                      ? "d-block animate__animated animate__fadeInUp"
                      : "hidden"
                  }`}
                />
              </div>
            </div>

            <div
              className={`flex items-center p-10 ${
                scrollPosition > 50
                  ? "d-block animate__animated animate__fadeIn"
                  : "hidden"
              }`}
            >
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
            <div
              className={`flex items-center p-10 ${
                scrollPosition > 600
                  ? "d-block animate__animated animate__fadeIn"
                  : "hidden"
              }`}
            >
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
              <img
                src={AboutUsImage3}
                className={`h-[400px] rounded-xl ${
                  scrollPosition > 600
                    ? "d-block animate__animated animate__fadeInUp"
                    : "hidden"
                }`}
              />
            </div>
          </div>
        </Container>

        <Container className="bg-white py-10">
          <svg
            width="50"
            height="13.5"
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
          <div className="text-center py-10">
            <div className="font-bold pb-3 text-gray-600">OUR COMMITMENT</div>
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

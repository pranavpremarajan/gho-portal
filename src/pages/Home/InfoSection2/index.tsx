import Container from "@/components/Container";
import Image from "../../../assets/ImageForArticle_22572_16533781526443229.webp";

const InfoSection2 = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 xl:grid-cols-2 py-10">
        <div className="p-10">
          <div className="text-primary text-3xl font-bold">
            Advanced technology: Diagnosis
          </div>
          <div className="text-gray-800 my-5">
            At Global Health Opinion Inc, we leverage advanced technology and
            our extensive network of specialized doctors to offer cutting-edge
            diagnosis and patient care across multiple specialties. Our online
            platform provides convenient access to expert medical insights,
            empowering patients to take control of their health journey from
            anywhere in the world.At Global Health Opinion Inc, we are committed
            to leveraging advanced technology and our network of specialized
            doctors to provide patients with the highest quality diagnosis and
            patient care. Through our online platform, we offer convenient
            access to expert medical insights and personalized treatment plans,
            empowering patients to achieve optimal health and well-being.
          </div>
        </div>
        <div
          className="h-100 w-100 min-h-[300px] mx-10"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </Container>
  );
};

export default InfoSection2;

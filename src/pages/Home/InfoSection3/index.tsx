import Container from "@/components/Container";
import Image from "../../../assets/Untitled-design-2022-10-23T134734_095.png";

const InfoSection3 = () => {
  return (
    <Container>
       <div className="grid grid-cols-1 xl:grid-cols-2 py-10">
        <div
          className="h-100 w-100 min-h-[300px] mx-10"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="p-10">
          <div className="text-primary text-3xl font-bold">
            Comprehensive International Second Opinion and Inpatient Services
          </div>
          <div className="text-gray-800 my-5">
            Our network offers a robust international second opinion service
            utilizing a vast network of over 4,000 doctors across multiple
            specialties in the United States of America. We provide extensive
            telemedicine consulting services through our centers in Dubai and
            India, complemented by inpatient services through your network of
            hospitals in the USA. This ensures that patients receive the highest
            level of care, tailored to their specificneeds. Our with a vast
            network of specialists, advanced telemedicine centers, and strong
            and strong partnerships with hospitals in the USA, we ensure that
            patients receive the highest quality of care, tailored to their
            specific needs, and supported by continuous follow-up and
            monitoring.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoSection3;

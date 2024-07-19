import Container from "@/components/Container";
import Image from "../../../assets/telemedicine.jpg";

const TelemedicineSection = () => {
  return (
    <Container className="bg-gray-100 py-20">
      <div className="text-center">
        <div className="text-5xl">
          <span className="text-primary">Telemedicine: </span>
          Health Programmes
        </div>
        <div className="flex justify-center my-5">
          <div className="text-lg max-w-2xl">
            Telemedicine has revolutionized the way health care is delivered,
            making it convenient and accessible for patients to seek second
            opinions from the comfort of their homes. At Global Healthcare Inc.
            we offer comprehensive telemedicine services tailored specifically
            for second opinions, ensuring that patients receive expert insights
            and recommendations. from specialized doctors regarding their
            location.
          </div>
        </div>
        <div className="flex justify-center my-5">
          <img src={Image} className="w-full max-w-md" />
        </div>
      </div>
    </Container>
  );
};

export default TelemedicineSection;

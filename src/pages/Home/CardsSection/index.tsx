import Container from "@/components/Container";
import {
  DocumentCheckIcon,
  LinkIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

const items = [
  {
    title: "Multidisciplinary Expertise",
    description:
      "Our network includes thousands of specialized doctors spanning various medical specialties, ensuring that patients receive comprehensive and multidisciplinary care. Whether you’re facing a complex medical condition or seeking guidance on preventive health measures, our team of experts is here to support you every step of the way.",
    icon: <SparklesIcon />,
  },
  {
    title: "Personalized Patient Care",
    description:
      "Each patient is unique, and we understand the importance of personalized care tailored to individual needs and preferences. Our online platform facilitates seamlesscommunication, allowing for personalized consultations,  treatment recommendations, and ongoing support throughout the healthcare journey.",
    icon: <UserCircleIcon />,
  },
  {
    title: "Streamlined Consultation Process",
    description:
      "Our online services streamline the consultation process, eliminating the need for lengthy wait times or cumbersome paperwork.  Patients can easily schedule appointments, upload medical records, and communicate with their doctorsin real-time, ensuring efficient and convenient access to care.",
    icon: <DocumentCheckIcon />,
  },
  {
    title: "Continuity of Care",
    description:
      "We prioritize continuity of care to ensure that patients receive consistent and coordinated treatment across multiple specialties if needed. Our team collaborates closely to provide integrated care plans that address all aspects of the patient’s health, rehabilitation, and follow-up care",
    icon: <LinkIcon />,
  },
];

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="bg-gray-100  flex flex-col justify-between border p-10 py-20 cursor-pointer rounded-md">
      <div className="relative">
        <div className="bg-black rounded-full h-20 w-20 p-4 flex justify-center items-center text-white absolute top-[-110px]">
          <>{icon}</>
        </div>
        <div className="py-2 text-2xl font-bold text-primary">{title}</div>
        <div className="py-2">{description}</div>
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-10 gap-2 ">
        {items.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardsSection;

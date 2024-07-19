import Container from "@/components/Container";

const items = [
  {
    title: "Cardiology",
    description:
      "Seeking a second opinion in cardiology can be beneficial for confirming diagnoses, exploring alternative treatments, and ensuring you receive the most appropriate care for your heart health. It’s a proactive step towards managing your health with con",
  },
  {
    title: "Oncology",
    description:
      "Second opinion empowers patients to make informed decisions about their cancer care, potentially improving treatment outcomes and providing peace of mind. It’s an essential step in navigating the complexities of cancer diagnosis and treatment.",
  },
  {
    title: "Neurology",
    description:
      "In neurology we can provide valuable insights into your condition, help confirm or adjust your diagnosis, and offer alternative treatment options. It’s an essential step in managing neurological disorders effectively and ensuring you receive the best possible care.",
  },
  {
    title: "Orthopedics",
    description:
      "We give a proactive step toward ensuring you receive the most accurate diagnosis and effective treatment plan for your musculoskeletal condition. It empowers you to make informed decisions about managing your orthopedic health and achieving optimal recovery outcomes.",
  },
  {
    title: "Pediatrics",
    description:
      "Seeking a second opinion or peer review in pediatrics can provide valuable insights, confirm or refine diagnoses, and offer additional treatment options or support for families facing complex pediatric health issues. It’s a proactive step toward ensuring your child receives the best possible care and achieving optimal health outcomes.",
  },
  {
    title: "Rheumatology",
    description:
      "Seeking a second opinion in rheumatology can be a proactive step toward managing your condition effectively, ensuring you receive personalized care, and optimizing your quality of life despite rheumatic challenges. It’s important to feel confident and well-informed about your treatment decisions.",
  },
];

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#eff8ff] hover:bg-[#edf1fc] flex flex-col justify-between border p-10 cursor-pointer">
      <div>
        <div className="py-2 text-3xl font-bold text-blue-800">{title}</div>
        <div className="py-2 text-md text-gray-600">{description}</div>
      </div>
      <button className="bg-blue-800 text-white p-3">Get Second Opinion</button>
    </div>
  );
};

const SpecialitiesSection = () => {
  return (
    <Container className="py-10">
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-5xl font-medium text-primary">
            Medical Specialities
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 gap-8">
        {items.map((item) => (
          <Card title={item.title} description={item.description} />
        ))}
      </div>
    </Container>
  );
};

export default SpecialitiesSection;

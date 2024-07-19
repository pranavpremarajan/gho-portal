import Container from "@/components/Container";

const Card = ({
  count,
  title,
  descriptionItems,
}: {
  count: string;
  title: string;
  descriptionItems: string[];
}) => {
  return (
    <div className="bg-[#eff8ff] p-4 rounded-md shadow p-[60px]">
      <div className="text-5xl font-bold text-[#a5c5ed] py-1">{count}</div>
      <div className="py-2 text-xl font-bold text-blue-800">{title}</div>
      <ul className="list-disc font-medium">
        {descriptionItems.map((item) => (
          <li className="py-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <Container className="py-10">
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-5xl font-medium text-primary">How it works</div>
          <div className="text-xl p-3 border-b-2 border-orange-500">
            It’s Quick & Simple
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 gap-8">
        <Card
          count="01"
          title="Select specialty and Create An Account"
          descriptionItems={[
            "Create an account by using your email and deciding on a password.",
            "These credentials will be used to log into the platform and access your files and second opinion reports.",
          ]}
        />

        <Card
          count="02"
          title="Create Your Second Opinion Service Order"
          descriptionItems={[
            "Select the relevant medical service you want. Provide information about your current medical condition..",
            "Upload your medical documents and make your payment.",
          ]}
        />

        <Card
          count="03"
          title="Get Your Second Opinion"
          descriptionItems={[
            "A Second Opinions clinician will review your case.",
            "In most cases, your second opinion report will be available for download from your account within 48 hours.",
          ]}
        />
      </div>
    </Container>
  );
};

export default HowItWorksSection;

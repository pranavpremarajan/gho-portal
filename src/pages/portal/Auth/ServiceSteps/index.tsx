import { Steps } from "antd";

const ServiceSteps = () => {
  return (
    <div>
      <div className="my-10 text-blue-800 text-xl font-bold leading-none">
        How our services works for your treatment?
      </div>
      <Steps
        direction="vertical"
        items={[
          {
            title: <div className=" font-bold ">Initial Consultation</div>,
            description:
              "Patients can upload the medical report through our online platform, where they will be matched with a specialized doctor based on their specific medical needs.",
            status: "process",
          },
          {
            title: <div className=" font-bold ">Medical Assessment</div>,
            description:
              "Our doctors / health care specialist conduct a thorough medical assessment, which may include reviewing medical history, performing diagnostic tests, and discussing symptoms and concerns with the patient.",
            status: "process",
          },
          {
            title: <div className=" font-bold ">Diagnostic Evaluation</div>,
            description:
              "Utilising advanced technology and diagnostic tools, our doctors carefully analyse test results and medical imaging to make an accurate diagnosis and develop a personalised treatment plan.",
            status: "process",
          },
          {
            title: (
              <div className=" font-bold ">Second Opinion/Peer Review</div>
            ),
            description:
              "We specialize in providing second opinion and peer review services that are tailored to enhance healthcare decisions worldwide. Our expert team collaborates closely to offer comprehensive evaluations, ensuring accuracy and reliability in medical diagnoses and treatment plans. Through rigorous analysis and advanced methodologies, we strive to empower patients and healthcare providers with the insights needed to make informed decisions, ultimately improving patient outcomes globally",
            status: "process",
          },
        ]}
      />
    </div>
  );
};

export default ServiceSteps;

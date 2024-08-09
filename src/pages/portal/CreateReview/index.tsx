import DashboardLayout from "@/layouts/DashboardLayout";
import { Steps } from "antd";
import { useState } from "react";
import PatientInformationSection from "./PatientInformationSection";

const CreateReviewPage = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Patient Information",
      content: <PatientInformationSection onNextClick={() => setCurrent(1)} />,
    },
    {
      title: "Medical Summary",
      content: <></>,
    },
    {
      title: "Preview",
      content: <></>,
    },
    {
      title: "Payment",
      content: <></>,
    },
  ];

  return (
    <DashboardLayout title="Create Review">
      <Steps
        current={current}
        items={steps.map((step) => ({
          title: step.title,
        }))}
      />

      <div className="py-10 ">{steps[current].content}</div>
    </DashboardLayout>
  );
};

export default CreateReviewPage;

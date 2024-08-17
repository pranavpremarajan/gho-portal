import DashboardLayout from "@/layouts/DashboardLayout";
import { Button, Steps } from "antd";
import { useState } from "react";
import PatientInformationSection from "./PatientInformationSection";
import PreviewSection from "./PreviewSection";
import MedicalSummarySection from "./MedicalSummarySection";
import MedicalRecordSection from "./MedicalRecordsSection";

const CreateReviewPage = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Patient Information",
      content: <PatientInformationSection />,
    },
    {
      title: "Medical Summary",
      content: <MedicalSummarySection />,
    },
    {
      title: "Medical Records",
      content: <MedicalRecordSection />,
    },
    {
      title: "Preview",
      content: <PreviewSection />,
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

      <div className="flex justify-end space-x-2">
        <Button
          onClick={() => {
            current > 0 && setCurrent(current - 1);
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            current < 4 && setCurrent(current + 1);
          }}
        >
          Next
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default CreateReviewPage;

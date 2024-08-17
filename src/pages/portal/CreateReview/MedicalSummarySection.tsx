import AudioRecorder from "@/components/AudioRecorder";
import { Divider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const MedicalSummarySection = () => {
  const [medicalSummary, setMedicalSummary] = useState("");
  const [_recorderMedicalSummary, setRecordedMedicalSummary] = useState("");

  return (
    <>
      <div className="flex items-center justify-between font-bold">
        Medical / Diagnosis Summary
      </div>
      <Divider />

      <TextArea
        className="w-full"
        rows={10}
        onChange={(e) => setMedicalSummary(e.target.value)}
        value={medicalSummary}
      ></TextArea>
      <Divider />

      <div className="my-2">
        <div className="text-xs text-gray-800">
          Add a voice record (optional)
        </div>
        <AudioRecorder onChange={setRecordedMedicalSummary} />
      </div>
    </>
  );
};

export default MedicalSummarySection;

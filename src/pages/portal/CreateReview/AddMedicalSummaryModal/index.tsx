import { Modal, Input } from "antd";
import { useEffect, useState } from "react";

const { TextArea } = Input;

interface Props {
  open: boolean;
  value: string;
  setMedicalSummary: (summary: string) => void;
  setEdit: (edit: boolean) => void;
  onCancel?: () => void; 
}

const AddMedicalSummaryModal: React.FC<Props> = ({
  open,
  value,
  setMedicalSummary,
  setEdit,
  onCancel,
}) => {
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    setSummary(value);
  }, [value]);

  return (
    <Modal
      visible={open}
      centered
      title="Add Medical / Diagnosis Summary"
      onOk={() => {
        setMedicalSummary(summary);
        setEdit(false);
      }}
      onCancel={() => {
        setSummary(value);
        setEdit(false);
        if (onCancel) onCancel();
      }}
      closable={false}
      destroyOnClose={true}
    >
      <TextArea
        rows={10}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="rounded-none focus:shadow-none"
      />
    </Modal>
  );
};

export default AddMedicalSummaryModal;

import DashboardLayout from "@/layouts/DashboardLayout";
import { DeleteFilled, InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  Badge,
  Button,
  Divider,
  Input,
  Select,
  Table,
  UploadProps,
} from "antd";
import {
  countries,
  genderOptions,
  months,
  specialities as specialitiesOptions,
} from "./constants";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import { useState } from "react";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { AddMedicationSchema, CreateReviewSchema } from "@/schema/review";
import AudioRecorder from "@/components/AudioRecorder";
import Dragger from "antd/es/upload/Dragger";
import AddMedicalSummaryModal from "./AddMedicalSummaryModal";

const CreateReviewPage = () => {
  const MedicalSummarySection = () => {
    const [edit, setEdit] = useState(false);
    const [medicalSummary, setMedicalSummary] = useState("");
    const [recorderMedicalSummary, setRecordedMedicalSummary] = useState("");
    const [showFullSummary, setShowFullSummary] = useState(false);

    const toggleSummary = () => {
      setShowFullSummary(!showFullSummary);
    };

    return (
      <>
        <div className="flex items-center justify-between font-bold">
          Medical / Diagnosis Summary
          <PencilSquareIcon
            className="text-gray-600 h-5 cursor-pointer"
            onClick={() => setEdit(true)}
          />
        </div>
        <Divider />

        {!medicalSummary && !recorderMedicalSummary && (
          <div className="text-xs text-center text-gray-400">
            Medical summary not added
          </div>
        )}

        {(medicalSummary || recorderMedicalSummary) && (
          <>
            <div className="w-full">
              <div
                className={`text-xs mb-2 whitespace-pre text-wrap break-all`}
              >
                {showFullSummary
                  ? medicalSummary
                  : `${medicalSummary.substring(0, 300)}...`}
              </div>
              {medicalSummary.length > 300 && (
                <button
                  className="text-xs text-blue-500 hover:underline"
                  onClick={toggleSummary}
                >
                  {showFullSummary ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </>
        )}

        <Divider />

        <div className="my-2">
          <div className="text-xs text-gray-800">
            Add a voice record (optional)
          </div>
          <AudioRecorder />
        </div>

        <AddMedicalSummaryModal
          open={edit}
          setEdit={setEdit}
          setMedicalSummary={setMedicalSummary}
          value={medicalSummary}
        />
      </>
    );
  };

  const MedicalRecordSection = () => {
    const uploadProps: UploadProps = {
      name: "file",
      multiple: true,
      action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          // message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          // message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
      },
    };

    return (
      <>
        <div className="font-bold">Medical Records</div>
        <Divider />

        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Dragger>
      </>
    );
  };

  interface CurrentMedicationRowData {
    key: string;
    medicationName: string;
    medicationDate: string;
  }

  const CurrentMedicationsSection = () => {
    const [data, setData] = useState<CurrentMedicationRowData[]>([]);

    let removeItem = (key: string) => {
      const updatedItems = [...data].filter((item) => item.key !== key);
      setData(updatedItems);
    };

    const handleSubmit = (values: any, { resetForm }: { resetForm: any }) => {
      const key = Date.now().toString(); // Convert to string since Date.now() returns a number

      const newItem = {
        key,
        medicationName: values.medicationName,
        medicationDate: values.medicationDate,
      };

      setData([...data, newItem]);
      resetForm();
    };

    const columns = [
      {
        title: "Medication Name",
        dataIndex: "medicationName",
        key: "name",
      },
      {
        title: "Start Date",
        dataIndex: "medicationDate",
        key: "medicationDate",
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (_: any, record: CurrentMedicationRowData) => (
          <DeleteFilled
            onClick={() => removeItem(record.key)}
            className="text-red-500"
          />
        ),
      },
    ];

    return (
      <>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div className="font-bold">Current Medications</div>
            <Badge count={data.length} />
          </div>
          <PlusOutlined />
        </div>
        <Divider />

        <div className="flex space-x-2 my-2">
          <Formik
            initialValues={{
              medicationName: "",
              medicationDate: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={AddMedicationSchema}
          >
            {({ errors, touched, values, handleChange, handleSubmit }) => (
              <Form className="flex space-x-2" onSubmit={handleSubmit}>
                <div>
                  <Input
                    placeholder="Medication Name"
                    name="medicationName"
                    id="medicationName"
                    onChange={handleChange}
                    value={values.medicationName}
                  />

                  <div className="text-red-600 text-xs">
                    {errors.medicationName &&
                      touched.medicationName &&
                      errors.medicationName}
                  </div>
                </div>

                <div>
                  <Input
                    placeholder="Start Date"
                    name="medicationDate"
                    id="medicationDate"
                    onChange={handleChange}
                    value={values.medicationDate}
                  />
                  <div className="text-red-600 text-xs">
                    {errors.medicationDate &&
                      touched.medicationDate &&
                      errors.medicationDate}
                  </div>
                </div>
                <div className="">
                  <Button type="dashed" htmlType="submit">
                    Add
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          size="small"
          className="my-2"
        />
      </>
    );
  };

  return (
    <DashboardLayout title="Create Review">
      <Formik
        initialValues={{
          lastname: "",
          firstname: "",
          gender: "",
          birthMonth: "",
          birthYear: "",
          country: "",
          phone: "",
          occupation: "",
        }}
        validationSchema={CreateReviewSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full grid xl:grid-cols-2 gap-4">
              <div>
                <div className="bg-white shadow w-full p-5 my-2">
                  {/**Patient Information Section */}
                  <div className="font-bold">Patient Information</div>
                  <Divider />

                  <FormInput
                    label="Last Name"
                    id="lastname"
                    name="lastname"
                    helperText={
                      touched.lastname && errors.lastname ? errors.lastname : ""
                    }
                    error={touched.lastname && errors.lastname ? true : false}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="First Name"
                    id="firstname"
                    name="firstname"
                    helperText={
                      touched.firstname && errors.firstname
                        ? errors.firstname
                        : ""
                    }
                    error={touched.firstname && errors.firstname ? true : false}
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-2 lg:grid-cols-3 space-x-2 gap-2">
                    <FormSelect
                      placeholder="Gender"
                      label="Gender"
                      id="gender"
                      name="gender"
                      notFoundContent={<></>}
                      options={genderOptions}
                      className="w-full"
                      onChange={handleChange}
                      helperText={
                        touched.gender && errors.gender ? errors.gender : ""
                      }
                      error={touched.gender && errors.gender ? true : false}
                    />
                    <FormSelect
                      placeholder="Birth Month"
                      label="Birth Month"
                      id="birthMonth"
                      name="birthMonth"
                      options={months}
                      className="w-full"
                      helperText={
                        touched.birthMonth && errors.birthMonth
                          ? errors.birthMonth
                          : ""
                      }
                      error={
                        touched.birthMonth && errors.birthMonth ? true : false
                      }
                      onChange={handleChange}
                    />

                    <FormInput
                      placeholder="Year"
                      label="Year"
                      id="birthYear"
                      name="birthYear"
                      onChange={handleChange}
                      helperText={
                        touched.birthYear && errors.birthYear
                          ? errors.birthYear
                          : ""
                      }
                      error={
                        touched.birthYear && errors.birthYear ? true : false
                      }
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 space-x-2">
                    <FormSelect
                      placeholder="Country"
                      label="Country"
                      id="country"
                      name="country"
                      options={countries}
                      className="w-full"
                      onChange={handleChange}
                      helperText={
                        touched.country && errors.country ? errors.country : ""
                      }
                      error={touched.country && errors.country ? true : false}
                    />
                    <FormInput
                      placeholder="Phone"
                      label="Phone"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      helperText={
                        touched.phone && errors.phone ? errors.phone : ""
                      }
                      error={touched.phone && errors.phone ? true : false}
                    />
                  </div>

                  <FormInput
                    placeholder="Occupation"
                    label="Occupation"
                    id="occupation"
                    name="occupation"
                    onChange={handleChange}
                    helperText={
                      touched.occupation && errors.occupation
                        ? errors.occupation
                        : ""
                    }
                    error={
                      touched.occupation && errors.occupation ? true : false
                    }
                  />

                  {/**Patient Information Section */}
                </div>
                <div className="bg-white shadow w-full p-5 my-2">
                  <>
                    <div className="font-bold">Speciality</div>
                    <Divider />
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      defaultValue={["1", "2"]}
                      onChange={handleChange}
                      options={specialitiesOptions}
                      notFoundContent={<>No results found</>}
                      id="specialities"
                    />
                  </>
                </div>
              </div>
              <div>
                <div className="bg-white shadow w-full p-5 my-2">
                  <MedicalSummarySection />
                </div>

                <div className="bg-white shadow w-full p-5 my-2">
                  <MedicalRecordSection />
                </div>

                <div className="bg-white shadow w-full p-5 my-2">
                  <CurrentMedicationsSection />
                </div>

                <div className="flex justify-end">
                  <button className=" text-primary p-3">Save Review</button>
                  <button className="bg-primary text-white p-3" type="submit">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  );
};

export default CreateReviewPage;

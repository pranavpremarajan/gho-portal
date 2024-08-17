import { Divider } from "antd";
import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blue-200 text-center font-bold p-1 my-2">{children}</div>
  );
};

const PreviewSection = () => {
  return (
    <>
      <div className="flex space-x-4 justify-center text-xs">
        <div>
          <span className="font-bold">Case ID</span> : XXXXXXXX
        </div>
        <div>
          <span className="font-bold">Customer ID </span> : XXXXXXXX
        </div>
        <div>
          <span className="font-bold">Case Type ID</span> : XXXXXXXX
        </div>
        <div>
          <span className="font-bold">Case Status </span>: XXXXXXXX
        </div>
      </div>

      <Divider />

      <Heading>Patient Information</Heading>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Address : <span className="font-bold">114Test Street</span>
          </div>
          <div className="">
            Occupation : <span className="font-bold">Engineer</span>
          </div>
        </div>

        <div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Address : <span className="font-bold">114Test Street</span>
          </div>
          <div className="">
            Occupation : <span className="font-bold">Engineer</span>
          </div>
        </div>

        <div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Last Name : <span className="font-bold">Smith</span>
          </div>
          <div className="">
            Address : <span className="font-bold">114Test Street</span>
          </div>
          <div className="">
            Occupation : <span className="font-bold">Engineer</span>
          </div>
        </div>
      </div>

      <Heading>Speciality</Heading>
      <div className="flex space-x-2">
        <div className="border max-w-max p-1 font-bold">Speciality 1</div>
        <div className="border max-w-max p-1 font-bold">Speciality 2</div>
      </div>

      <Heading>Medical / Diagnosis Summary</Heading>
      <div>
        <div className="py-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="border font-bold p-1 text-xs">VoiceRecord.mp3</div>
      </div>

      <Heading>Medical Records</Heading>
      <div className="flex space-x-2">
        <div className="border font-bold p-1 text-xs flex">File1.pdf</div>
        <div className="border font-bold p-1 text-xs flex">File2.pdf</div>
        <div className="border font-bold p-1 text-xs flex">File3.pdf</div>
      </div>

      <Heading>Current Medication</Heading>
    </>
  );
};

export default PreviewSection;

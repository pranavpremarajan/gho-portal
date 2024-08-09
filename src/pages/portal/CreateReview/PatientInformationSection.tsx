import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import PhoneInput from "@/components/PhoneInput";

interface PatientInformationSectionProps {
  onNextClick: () => void;
}

const PatientInformationSection = ({
  onNextClick,
}: PatientInformationSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="">
          <FormInput label="Last Name" id="lastname" name="lastname" required />
          <FormInput
            label="First Name"
            id="firstname"
            name="firstname"
            required
          />

          <FormInput
            placeholder="Address"
            label="Address"
            id="address"
            name="address"
            required
          />

          <FormInput
            placeholder="Occupation"
            label="Occupation"
            id="occupation"
            name="occupation"
            required
          />
        </div>
        <div className="">
          <div className="flex space-x-2">
            <FormSelect
              placeholder="Birth Month"
              label="Birth Month"
              id="birthMonth"
              name="birthMonth"
              className="w-full"
            />

            <FormSelect
              placeholder="Birth Year"
              label="Birth Year"
              id="birthYear"
              name="birthYear"
              className="w-full"
            />
          </div>

          <FormInput
            placeholder="Employer"
            label="Employer"
            id="employer"
            name="employer"
            required
          />

          <FormSelect
            placeholder="Gender"
            label="Gender"
            id="gender"
            name="gender"
            required
            className="w-full"
          />

          <PhoneInput />
        </div>
        
        <div className="">
          <FormSelect
            placeholder="Country"
            label="Country"
            id="country"
            name="country"
            className="w-full"
          />

          <FormInput
            placeholder="Zip Code"
            label="Zip Code"
            id="zipcode"
            name="zipcode"
          />

          <FormInput
            placeholder="State"
            label="State"
            id="state"
            name="state"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="bg-primary text-white text-xs p-2"
          onClick={onNextClick}
        >
          Save and Continue
        </button>
      </div>
    </>
  );
};

export default PatientInformationSection;

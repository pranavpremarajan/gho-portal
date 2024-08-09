import React, { useState } from "react";
import { countries } from "./countries"; // Import a list of countries and codes

interface PhoneInputProps {
  onChange: (values: { countryCode: string; phoneNumber: string }) => void;
}

const PhoneInput = ({ onChange }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("+1"); // Default to US
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = event.target.value;
    setCountryCode(newCountryCode);
    onChange({
      countryCode: newCountryCode,
      phoneNumber,
    });
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    onChange({
      countryCode,
      phoneNumber: newPhoneNumber,
    });
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <select
        value={countryCode}
        onChange={handleCountryCodeChange}
        className="bg-gray-100 border-r border-gray-300 p-2 outline-none text-xs"
      >
        {countries.map(({ code, name }) => (
          <option key={code} value={code}>
            {name} ({code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="flex-1 p-2 outline-none text-xs"
        placeholder="Phone Number"
      />
    </div>
  );
};

export default PhoneInput;

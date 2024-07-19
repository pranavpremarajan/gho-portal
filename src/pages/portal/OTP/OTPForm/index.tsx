import OtpInput from "react-otp-input";
import React, { useState } from "react";
import FormButton from "@/components/FormButton";

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full max-w-sm bg-white p-5">
      <div className="font-bold my-3 mx-3">OTP Verification</div>
      <div className="text-xs font-gray-500 mx-3 my-2">
        An OTP has been sent to your email
      </div>
      <div className="flex justify-center py-2">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={{
            gap: "2px",
          }}
          inputStyle={{
            padding: "10px",
            height: "50px",
            width: "50px",
            fontWeight: "bold",
            border: "1px solid black",
          }}
          shouldAutoFocus
        />
      </div>
      <FormButton className="max-w-[120px] mx-3" disabled={otp.length != 6}>
        Verify
      </FormButton>
      <div className="text-xs font-gray-500 my-2 mx-3 cursor-pointer">
        Resend OTP
      </div>
    </div>
  );
};

export default OTPForm;

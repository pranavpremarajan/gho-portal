import React from "react";
import AuthPage from "../Auth";
import OTPForm from "./OTPForm";

const OTPPage: React.FC = () => {
  return (
    <>
      <AuthPage>
        <OTPForm />
      </AuthPage>
    </>
  );
};

export default OTPPage;

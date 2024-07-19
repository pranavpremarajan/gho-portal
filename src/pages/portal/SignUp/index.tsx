import React from "react";
import AuthPage from "../Auth";
import SignUpForm from "./SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <>
      <AuthPage>
        <SignUpForm />
      </AuthPage>
    </>
  );
};

export default SignUpPage;

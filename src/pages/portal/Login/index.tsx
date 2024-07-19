import React from "react";
import LoginForm from "./LoginForm";
import AuthPage from "../Auth";

const LoginPage: React.FC = () => {
  return (
    <>
      <AuthPage>
        <LoginForm />
      </AuthPage>
    </>
  );
};

export default LoginPage;

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import AuthPage from "../Auth";

const LoginPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <AuthPage>
        <LoginForm />
      </AuthPage>
    </>
  );
};

export default LoginPage;

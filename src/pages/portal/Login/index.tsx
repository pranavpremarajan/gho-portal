import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import AuthPage from "../Auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "@/config";

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(config.navigation.portal);
    }
  }, [isAuthenticated]);

  return (
    <>
      <AuthPage>
        <LoginForm />
      </AuthPage>
    </>
  );
};

export default LoginPage;

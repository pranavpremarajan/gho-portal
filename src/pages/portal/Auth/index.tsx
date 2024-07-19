import SimpleLayout from "@/layouts/SimpleLayout";
import ServiceSteps from "./ServiceSteps";
import { ReactNode } from "react";

interface AuthPageProps {
  children: ReactNode;
}

const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <>
      <SimpleLayout>
        <div className="grid xl:grid-cols-2 min-h-[calc(100vh-100px)] md:px-[150px]">
          <div className="hidden xl:flex justify-center items-center ">
            <ServiceSteps />
          </div>
          <div className="flex justify-center items-center">{children}</div>
        </div>
      </SimpleLayout>
    </>
  );
};

export default AuthPage;

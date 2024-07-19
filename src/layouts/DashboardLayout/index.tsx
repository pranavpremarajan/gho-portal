import { ReactNode } from "react";
import SimpleLayout from "../SimpleLayout";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import { Breadcrumb } from "antd";
import FullpageLoader from "@/components/FullpageLoader";
import MobileBar from "./MobileBar";

export interface LayoutProps {
  title: string;
  children: ReactNode;
  // TODO refine type
  breadCrumbItems?: any[];
  loading?: boolean;
}

interface DashboardLayoutProps extends LayoutProps {}

const DashboardLayout = ({
  title,
  children,
  breadCrumbItems,
  loading,
}: DashboardLayoutProps) => {
  return (
    <SimpleLayout>
      <div className="flex min-h-[calc(100vh-150px)]">
        <div className="bg-gray-200 w-full max-w-xs hidden sm:block">
          <Sidebar />
        </div>
        <div className="w-full p-10">
          <div className="text-xl font-bold pt-2">{title}</div>
          <Breadcrumb className="py-3" items={breadCrumbItems} />

          <div className="sm:hidden">
            <MobileBar />
          </div>

          <ContentArea> {children}</ContentArea>
        </div>
      </div>
      {loading && <FullpageLoader />}
    </SimpleLayout>
  );
};

export default DashboardLayout;

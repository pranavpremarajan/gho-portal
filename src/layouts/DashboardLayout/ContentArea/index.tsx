import { ReactNode } from "react";

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return <div className="">{children}</div>;
};

export default ContentArea;

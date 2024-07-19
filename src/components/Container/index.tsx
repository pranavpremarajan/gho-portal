import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`container mx-auto px-2 lg:px-[150px] ${className}`}>{children}</div>;
};

export default Container;

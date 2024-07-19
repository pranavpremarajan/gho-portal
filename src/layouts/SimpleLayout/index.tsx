import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode, useLayoutEffect } from "react";

export interface LayoutProps {
  children: ReactNode;
}

interface SimpleLayoutProps extends LayoutProps {}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default SimpleLayout;

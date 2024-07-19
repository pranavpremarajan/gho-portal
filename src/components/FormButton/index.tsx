import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

interface FormButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`bg-primary hover:bg-blue-700 text-white font-medium w-full p-3 flex items-center justify-center space-x-8 h-10 ${className} ${
        loading ? "loading" : ""
      } ${disabled? "cursor-not-allowed" : ""}`}
    >
      {loading ? <LoadingOutlined className="text-white text-2xl" /> : children}
    </button>
  );
};

export default FormButton;

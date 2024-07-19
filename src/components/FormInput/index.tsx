import { Input } from "antd";

interface FormInputProps {
  id: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  direction?: "rtl" | "ltr" | "auto";
  value?: any;
  onChange?: any;
}

const FormInput = ({
  id,
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  helperText,
  error,
  direction = "auto",
  value,
  ...rest
}: FormInputProps) => {
  return (
    <div className="my-2">
      <label htmlFor={id} className="block mb-1 text-gray-600 text-sm" dir={direction}>
        {label}
      </label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        dir={direction}
        {...rest}
      />
      <div className={`text-xs my-1 ${error ? "text-red-600" : ""}`}>
        {helperText}
      </div>
    </div>
  );
};

export default FormInput;

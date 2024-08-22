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
  disabled?: boolean;
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
  disabled = false,
  ...rest
}: FormInputProps) => {
  return (
    <div className="my-2">
      <label
        htmlFor={id}
        className="block mb-1 text-gray-600 text-sm font-bold"
        dir={direction}
      >
        {label} {required && "*"}
      </label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        dir={direction}
        value={value}
        disabled={disabled}
        {...rest}
      />
      <div className={`text-xs my-2 ${error ? "text-red-600" : ""}`}>
        {helperText}
      </div>
    </div>
  );
};

export default FormInput;

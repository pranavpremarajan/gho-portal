import { Select, SelectProps } from "antd";

interface FormSelectProps extends SelectProps {
  id: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  value?: any;
}

const FormSelect = ({
  id,
  label,
  type = "select",
  name,
  placeholder,
  required = false,
  helperText,
  error,
  value,
  className,
  onChange,
  ...rest
}: FormSelectProps) => {
  return (
    <div className="my-2 w-full">
      <label htmlFor={id} className="block mb-1 text-gray-600 text-sm font-bold">
        {label}
      </label>
      <Select
        id={id}
        className={`${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      <div className={`text-xs my-2 ${error ? "text-red-600" : ""}`}>
        {helperText}
      </div>
    </div>
  );
};

export default FormSelect;

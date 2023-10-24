import React from "react";
import { useController } from "react-hook-form";

type InputProps = {
  label: string;
  type?:string;
  name: string;
  rules?: any;
  classNames?: string;
  placeholder?: string;
  defaultValue?: string;
  formatValue?: (value: string) => string;
};

const Input: React.FC<InputProps> = ({ label, name, rules, classNames, defaultValue, type, placeholder, formatValue }) => {
  const { field, fieldState } = useController({ name, defaultValue,  rules });
  const { onChange, onBlur, value, ref } = field;
  const { error } = fieldState;

  const containerClass = classNames ? 'w-full ' + classNames : 'w-full';
  const errorData = error ? ' border-danger' : '' 


 
  return (
    <div className={containerClass}>
      <label
        htmlFor={name}
        className="mb-3 block text-sm font-medium text-black dark:text-white"
      >
        {label}
      </label>
      <input
        {...field}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onChange={onChange}
        value={value || ""}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded border border-stroke bg-gray py-3 px-4.5 
        text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
        dark:bg-meta-4 dark:text-white dark:focus:border-primary${errorData}`}
      />
       {error && <small className='text-danger'>{error.message}</small>}
    </div>
  );
};

export default Input;

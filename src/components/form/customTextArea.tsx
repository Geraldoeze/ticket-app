import React from "react";
import { useController } from "react-hook-form";

type TextareaProps = {
  label: string;
  name: string;
  rules?: any;
  classNames?: string;
  defaultValue?:string;
  placeholder?: string;
  row?:number;
  cols?:number;
  formatValue?: (value: string) => string;
};

const Textarea: React.FC<TextareaProps> = ({ label, name, rules, classNames, defaultValue, placeholder, row, cols, formatValue }) => {
  const { field, fieldState } = useController({ name, rules, defaultValue });
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
      <textarea
        {...field}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onChange={onChange}
        value={value || ""}
        ref={ref}
        placeholder={placeholder}
        className={`w-full rounded border border-stroke 
        bg-gray py-3 pl-4.5 pr-4.5 text-black
        focus:border-primary focus-visible:outline-none
        dark:border-strokedark dark:bg-meta-4
        dark:text-white dark:focus:border-primary${errorData}`}
      />
       {error && <small className='text-danger'>{error.message}</small>}
    </div>
  );
};

export default Textarea;
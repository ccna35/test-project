import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { cn } from "../../utils/utils";
import { useWatch } from "react-hook-form";

const Input = ({
  className,
  label,
  name,
  id,
  icon,
  type,
  placeholder,
  register,
  required,
  errors,
  control,
  ...inputProps
}) => {
  const test = useWatch({
    control,
    name,
  });
  console.log(test);
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
      )}

      <div>
        <div
          className={cn(
            "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",
            className
          )}
        >
          {icon && (
            <span className="flex select-none items-center p-2 text-gray-500 sm:text-sm">
              {icon}
            </span>
          )}
          <input
            {...register(name, {
              required,
            })}
            type={type}
            name={name}
            id={id}
            autoComplete="firstName"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            {...inputProps}
          />
        </div>
      </div>
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default Input;

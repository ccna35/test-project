import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { cn } from "../../utils/utils";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useWatch } from "react-hook-form";

const ImageInput = ({
  className,
  name,
  id,
  register,
  required,
  errors,
  label,
  multiple,
  control,
  ...inputProps
}) => {
  const test = useWatch({
    control,
    name,
  });
  console.log(test && test[0]);
  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={name}
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id={id}
                name={name}
                type="file"
                className="sr-only"
                multiple={multiple}
                {...register(name)}
                {...inputProps}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;

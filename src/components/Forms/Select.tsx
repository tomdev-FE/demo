import clsx from "clsx";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { HiExclamationCircle } from "react-icons/hi";

type SelectProps = {
  label: string;
  id: string;
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"select">;

export default function Select({
  label,
  id,
  placeholder,
  children,
  ...rest
}: SelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative flex-1">
      <label
        htmlFor={id}
        className="block font-normal text-gray-700 absolute pl-3 text-[10px]"
      >
        {label}
      </label>
      <div className="mt-1 ">
        <select
          {...register(id)}
          defaultValue=""
          {...rest}
          name={id}
          id={id}
          className={clsx(
            errors[id]
              ? "focus:ring-red-500 border-red-500 focus:border-red-500"
              : "",
            "block w-full rounded-md shadow-sm  pt-3"
          )}
          aria-describedby={id}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        {errors[id] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <HiExclamationCircle className="text-xl text-red-500" />
          </div>
        )}
      </div>
      <div className="mt-1">
        {errors[id] && (
          <span className="text-sm text-red-500">{errors[id]?.message}</span>
        )}
      </div>
    </div>
  );
}

import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export type InputProps = {
  label: string;
  id: string;
  placeholder: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  placeholder,
  id,
  type = "text",
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex-1">
      <div className="relative mt-1">
        <input
          {...register(id)}
          {...rest}
          type={type}
          name={id}
          id={id}
          className={clsx(
            errors[id]
              ? "focus:ring-red-500 border-red-500 focus:border-red-500"
              : "",
            "block w-full rounded-md shadow-sm pt-3"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
      </div>
      <div className="mt-1">
        {errors[id] && (
          <span className="text-sm text-red-500">{errors[id]?.message}</span>
        )}
      </div>
    </div>
  );
}

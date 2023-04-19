import clsx from "clsx";
import Spinner from "shared/spinner";

type ButtonProps = {
  children: React.ReactChild | string;
  isSubmitting: boolean;
  flag: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  isSubmitting,
  flag,
  ...rest
}: ButtonProps) {
  const disabledCondition = isSubmitting === true && flag === true;

  return (
    <div className="flex justify-end">
      <button
        disabled={disabledCondition}
        {...rest}
        className={clsx(
          "py-5 px-4 rounded font-bold flex justify-end",
          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200",
          "bg-pink-600 text-white"
        )}
      >
        {disabledCondition ? (
          <>
            <Spinner /> Submitting...
          </>
        ) : (
          children
        )}
      </button>
    </div>
  );
}

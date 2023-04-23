import clsx from "clsx";
import Spinner from "shared/spinner";

type ButtonProps = {
  children: React.ReactChild | string;
  isLoading: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  isLoading,
  ...rest
}: ButtonProps) {

  return (
    <div className="flex justify-end">
      <button
        disabled={isLoading}
        {...rest}
        className={clsx(
          "py-5 px-4 rounded font-bold flex justify-end",
          "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200",
          "bg-pink-600 text-white"
        )}
      >
        {isLoading ? (
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

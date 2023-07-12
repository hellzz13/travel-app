import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  isLoading?: boolean;
  children?: ReactNode;
};

export default function PrimaryButton({
  title,
  isLoading,
  children,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      className="py-1.5 flex justify-center items-center px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-cyan-500 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      {...rest}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin mx-auto" size={20} />
      ) : (
        title || children
      )}
    </button>
  );
}

import { InputHTMLAttributes } from "react";

type ITextInput = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

export default function InputBase({ title, ...props }: ITextInput) {
  return (
    <>
      <label className="sr-only">{title}</label>
      <div className="relative rounded-md shadow-sm">
        <input
          className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...props}
        />
      </div>
    </>
  );
}

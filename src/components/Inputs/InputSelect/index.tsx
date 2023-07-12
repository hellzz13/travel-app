import { SelectHTMLAttributes } from "react";

type ISelectProps = SelectHTMLAttributes<HTMLInputElement> & {};

export default function InputSelect({ name }: ISelectProps) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor={name} className="sr-only">
            {name}
          </label>
          <select
            name={name}
            id={name}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}

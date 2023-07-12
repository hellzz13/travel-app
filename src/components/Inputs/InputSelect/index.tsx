import { SelectHTMLAttributes } from "react";

type ISelectProps = SelectHTMLAttributes<HTMLInputElement> & {
  title: string;
};

export default function InputSelect({ name, title }: ISelectProps) {
  return (
    <div>
      <div className="rounded-md">
        <div className="flex items-center gap-2">
          <label htmlFor={name}>{title}</label>
          <select
            name={name}
            id={name}
            className="block w-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>0</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </div>
      </div>
    </div>
  );
}

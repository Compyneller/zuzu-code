"use client";
import { FC } from "react";

interface CheckboxProps {
  id: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  id,

  checked = false,
  onChange,
}) => (
  <label
    htmlFor={id}
    className="relative inline-flex items-center cursor-pointer">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="peer sr-only"
    />
    <div
      className="
        w-6 h-6
        border-2 border-green-500
        
        bg-white
        peer-checked:bg-green-500 peer-checked:border-green-500
        transition-colors
        flex-shrink-0
        flex justify-center items-center
      ">
      <svg
        className="w-4 h-4  transition-opacity"
        viewBox="0 0 17 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 6L6.5 10.5L15.5 1.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </label>
);

export default Checkbox;

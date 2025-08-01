"use client";

import { cn } from "@/utils/cn";
import { useCallback, useEffect, useRef, useState } from "react";

type dropdown = {
  className?: string;
  label: string;
  variant: "blue" | "black";
  prefixLabel?: string;

  options: string[];
};

const DropDown = ({
  className,
  label,
  variant,
  options,
  prefixLabel,
}: dropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const variants = {
    blue: "text-[11px] font-semibold md:text-[16px] md:font-medium",

    black: "text-[9.22px] md:text-[14px]",
  };

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const handleSelect = (
    option: string,
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    setSelectedValue(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={cn("relative cursor-pointer w-full", className)}
      onClick={toggleDropdown}
      ref={dropdownRef}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleDropdown();
        }
      }}
      aria-haspopup="listbox"
      aria-expanded={isOpen}>
      <div className="w-full flex items-center justify-between">
        <p className={cn(variants[variant])}>
          {prefixLabel && <span>{prefixLabel} </span>}{" "}
          {selectedValue ? selectedValue : label}
        </p>
        {variant === "blue" ? (
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.75593 8.12713C7.35716 8.58759 6.64284 8.58759 6.24407 8.12713L0.638744 1.65465C0.0778678 1.00701 0.53792 -5.55611e-07 1.39467 -6.3051e-07L12.6053 -1.61058e-06C13.4621 -1.68548e-06 13.9221 1.00701 13.3613 1.65465L7.75593 8.12713Z"
              fill="#00AFE3"
            />
          </svg>
        ) : (
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.18537 7.27695C4.99292 7.61028 4.5118 7.61028 4.31935 7.27695L0.640786 0.90549C0.448335 0.572156 0.688897 0.15549 1.0738 0.15549L8.43092 0.155489C8.81582 0.155489 9.05639 0.572156 8.86394 0.905489L5.18537 7.27695Z"
              fill="black"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full shadow-lg bg-white p-1.5  focus:outline-none border border-border z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          {options.map((option) => (
            <div
              className="w-full px-1 py-2 hover:bg-gray-100"
              key={option}
              role="option"
              aria-selected={option === selectedValue}
              tabIndex={0}
              onClick={(e) => handleSelect(option, e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(option, e);
                }
              }}>
              <p className="text-xs md:text-sm">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;

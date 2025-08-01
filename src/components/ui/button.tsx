import { cn } from "@/utils/cn";
import React from "react";

type button = {
  className?: string;
  children: React.ReactNode;
};
const Button = ({ className, children }: button) => {
  return (
    <button className={cn("rounded-sm border-none outline-none", className)}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`w-[95%] max-w-[1264px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

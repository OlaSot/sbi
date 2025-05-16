import React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = "", orientation = "horizontal", ...props }, ref) => {
    const baseClasses = "shrink-0 bg-gray-200"; 

    const orientationClass =
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${orientationClass} ${className}`}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };

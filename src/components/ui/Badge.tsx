import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center rounded-full border border-black text-black px-2.5 py-0.5 text-xs font-semibold transition-colors";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${className}`}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };

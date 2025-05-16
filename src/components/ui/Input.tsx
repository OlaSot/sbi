import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-9 w-full rounded-[50px] bg-transparent px-3 py-1 text-sm  transition-colors 
        file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-gray-400 
        focus:outline-none 
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

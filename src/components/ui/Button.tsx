'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles =
    'inline-block px-[50px] rounded-full font-medium transition-colors';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#01db60] hover:bg-green-600 text-white',
    outline: 'border border-[#131513] text-[#131513] bg-transparent hover:bg-[#f4f4f4]',
     ghost: 'bg-transparent text-[#131513] hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

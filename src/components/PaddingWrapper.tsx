"use client";

import React from "react";

interface PaddingWrapperProps {
  children: React.ReactNode;
}

export const PaddingWrapper: React.FC<PaddingWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

"use client";

import React, {  createContext, useContext } from "react";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import Image from "next/image";

interface AccordionContextProps {
  openValue: string | null;
  setOpenValue: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextProps>({
  openValue: null,
  setOpenValue: () => {},
});

export const Accordion = ({
  children,
  openValue,
  setOpenValue,
  className = "",
}: {
  children: React.ReactNode;
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
  className?: string;
}) => {
  const handleToggle = (value: string) => {
    setOpenValue(openValue === value ? null : value);
  };

  return (
    <AccordionContext.Provider
      value={{
        openValue,
        setOpenValue: handleToggle,
      }}
    >
      <div className={` ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div data-accordion-value={value} className={className}>
      {children}
    </div>
  );
};


export const AccordionTrigger = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { openValue, setOpenValue } = useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <button
      onClick={() => setOpenValue(value)}
      className={`flex w-full items-center justify-between py-4 font-medium transition-all ${className}`}
    >
      {children}
      <Image
        src={isOpen ? Minus : Plus}
        alt="Toggle Icon"
        className={`w-6 h-6 transition-transform duration-300`}
      />
    </button>
  );
};

export const AccordionContent = ({
    value,
    children,
    className = "",
  }: {
    value: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    const { openValue } = useContext(AccordionContext);
    const isOpen = openValue === value;
  
    return (
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          ${className}
        `}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    );
  };
  
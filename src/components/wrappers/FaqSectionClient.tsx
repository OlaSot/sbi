"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  translatedData: {
    title: string;
    items: FaqItem[];
  };
}

export const FaqSectionClient: React.FC<Props> = ({ translatedData }) => {
  const [openValue, setOpenValue] = useState<string | null>(null);

  const { title, items } = translatedData;

  return (
    <section className="flex flex-col w-full items-start md:items-center gap-12 px-4 my-[35px] md:my-0">
      <h2 className="text-[30px] md:text-[52px] font-semibold text-center text-neutral-900 leading-normal tracking-normal ">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full max-w-[1400px]">
        {[0, 1].map((col) => (
          <Accordion
            key={col}
            openValue={openValue}
            setOpenValue={setOpenValue}
            className="w-full"
          >
            {items.slice(col * 5, col * 5 + 5).map((item, index) => {
              const value = `${col * 5 + index + 1}`;
              const isOpen = openValue === value;

              return (
                <AccordionItem key={value} value={value}>
                  <div
                    className={`mb-[30px] bg-white transition-all ${
                      isOpen ? "rounded-2xl" : "rounded-2xl"
                    }`}
                  >
                    <AccordionTrigger
                      value={value}
                      className="px-7 py-6 h-[80px] text-[16px] md:text-2xl font-semibold text-neutral-900 text-left"
                    >
                      {item.q}
                    </AccordionTrigger>

                    {isOpen && (
                      <AccordionContent
                        value={value}
                        className="px-7 pt-[10px] pb-6 md:pt-6 text-neutral-700 text-left rounded-b-2xl"
                      >
                        {item.a}
                      </AccordionContent>
                    )}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        ))}
      </div>
    </section>
  );
};
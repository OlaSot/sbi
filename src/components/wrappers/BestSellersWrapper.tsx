"use client";

import React, { useState } from "react";
import { CatalogCard } from "../ui/CatalogCard";
import ModalForm from "../ui/ModalForm";
import type { StaticImageData } from "next/image";

interface Item {
  image: StaticImageData;
  title: string;
  dimensions: string;
  area: string;
  beds: string;
  bath: string;
}

interface TranslatedData {
  title: string;
  learnMore: string;
  modal: {
    title: string;
    description: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    button: string;
    sending: string;
    successMessage: string;
  };
}

interface Props {
  translatedData: TranslatedData;
  items: Item[];
}

export const BestSellersClient: React.FC<Props> = ({
  translatedData,
  items,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {translatedData.modal && (
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          translated={translatedData.modal}
        />
      )}
      <section className="max-w-[1400px] w-full px-4 md:px-6 lg:px-0 mx-auto py-[30px] sm:py-8 md:py-[50px]">
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[52px] text-[#141514] mb-3 sm:mb-4">
          {translatedData.title}
        </h2>

        <div className="flex flex-wrap items-center gap-[30px] w-full justify-center">
          {items.map((item, index) => (
            <CatalogCard
              key={index}
              image={item.image}
              title={item.title}
              dimensions={item.dimensions}
              area={item.area}
              beds={item.beds}
              bath={item.bath}
              buttonText={translatedData.learnMore}
              onButtonClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </section>
    </>
  );
};
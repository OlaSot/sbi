"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import ModalForm from "../ui/ModalForm";
import Link from "next/link";
import { CatalogCard } from "../ui/CatalogCard";
import type { StaticImageData } from "next/image";

type CatalogSectionClientProps = {
  categories: { key: string; label: string }[];
  catalogData: CatalogData;
  translatedStrings: {
    headingPart1: string;
    headingHighlight: string;
    headingPart2: string;
    noItems: string;
    catalogBtn: string;
    choiceButton: string;
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
  };
};

export interface CatalogModel {
  title: string;
  dimensions: string;
  area: string;
  beds: string;
  bath: string;
  image: StaticImageData;
}

export type CatalogData = Record<
  string,
  {
    url: string;
    items: CatalogModel[];
  }
>;

export default function CatalogSectionClient({
  categories,
  catalogData,
  translatedStrings,
}: CatalogSectionClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("capsule");
  const models = catalogData[activeTab]?.items || [];

  return (
    <>
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translatedStrings.modal} 
      />
      <section className="max-w-[1400px] py-[35px] md:py-0 md:pb-[120px] mx-auto flex flex-col w-full items-center justify-center gap-10 px-4 md:px-0 2xl:px-0">
        <div className="flex flex-col items-center md:items-start justify-center gap-5 w-full text-center md:text-left">
          <h2 className="text-[30px] md:text-[52px] font-semibold leading-normal tracking-normal ">
            <span className="text-[#131513]">{translatedStrings.headingPart1}{" "}</span>
            <span className="text-[#01db60]">{translatedStrings.headingHighlight}</span>
            <span className="text-[#131513]">{translatedStrings.headingPart2}</span>
          </h2>

          <div className="flex items-center gap-[18px] overflow-x-auto w-full scrollbar-none scroll-smooth md:flex-wrap md:overflow-visible">
            {categories.map(({ key, label }) => (
              <Badge
                key={key}
                onClick={() => setActiveTab(key)}
                className={`cursor-pointer px-[25px] py-2.5 rounded-[90px] ${
                  activeTab === key
                    ? "bg-[#01db60] text-white border-none"
                    : "bg-transparent text-[#141514] border"
                }`}
              >
                <span className=" font-normal text-lg whitespace-nowrap">
                  {label}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-[30px] w-full justify-center">
          {models.length > 0 ? (
            models.map((model, index) => (
              <CatalogCard
                key={index}
                image={model.image}
                title={model.title}
                dimensions={model.dimensions}
                area={model.area}
                beds={model.beds}
                bath={model.bath}
                onButtonClick={() => setIsModalOpen(true)}
                buttonText={translatedStrings.choiceButton}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl">
              {translatedStrings.noItems}
            </p>
          )}
        </div>

        <div className="w-full flex justify-center sm:justify-center">
          <Link href="/catalog" className="w-full sm:w-fit block">
            <Button className="w-full text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px] bg-[#01db60] rounded-[90px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] font-normal text-white hover:bg-[#01db60]/90">
              {translatedStrings.catalogBtn}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
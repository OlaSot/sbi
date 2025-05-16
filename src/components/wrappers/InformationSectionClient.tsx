// components/wrappers/InformationSectionClient.tsx
"use client";

import React from "react";
import { Card, CardContent } from "../ui/Card";
import Image from "next/image";
import ContactButtonWithModal from "../wrappers/ContactButtonWithModal";
import type { StaticImageData } from "next/image";

interface CardData {
  title: string;
  value: string;
  description: string;
  icon: StaticImageData;
  iconAlt: string;
  isHighlighted: boolean;
}

interface ModalTranslations {
  title: string;
  description: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  button: string;
  sending: string;
  successMessage: string;
}

interface TranslatedData {
  heading: {
    part1: string;
    highlight: string;
    part2: string;
  };
  button: string;
  cards: CardData[];
  modal: ModalTranslations;
}

interface Props {
  translatedData: TranslatedData;
  backgroundImage: StaticImageData;
}

const InformationSectionClient: React.FC<Props> = ({
  translatedData,
  backgroundImage,
}) => {
  const renderCard = (card: CardData, index: number, column: string) => (
    <Card
      key={`${column}-${index}`}
      className={`group w-full h-[210px] rounded-xl overflow-hidden transition-colors duration-300 ${
        card.isHighlighted
          ? "bg-brand-green hover:bg-[#01db60]"
          : "bg-white hover:bg-[#01db60]"
      }`}
    >
      <CardContent className="p-0 h-full relative">
        <div
          className={`absolute w-[244px] top-[19px] left-5 font-normal ${
            card.isHighlighted
              ? "text-cream group-hover:text-white"
              : "text-brand-color group-hover:text-white"
          } text-lg`}
        >
          {card.title}
        </div>

        <div
          className={`absolute w-[237px] top-[79px] left-5 font-medium ${
            card.isHighlighted
              ? "text-cream group-hover:text-white"
              : "text-brand-color group-hover:text-white"
          } text-[52px]`}
        >
          {card.value}
        </div>

        <div
          className={`w-[290px] top-[151px] absolute left-5  font-normal text-base ${
            card.isHighlighted
              ? "text-cream group-hover:text-white"
              : "text-brand-color group-hover:text-white"
          }`}
        >
          {card.description}
        </div>

        <Image
          src={card.icon}
          alt={card.iconAlt}
          width={24}
          height={24}
          className="absolute top-[19px] left-[286px] brightness-0 group-hover:invert"
        />
      </CardContent>
    </Card>
  );

  return (
    <section
      id="info-section"
      data-section="info"
      className="flex flex-col items-center gap-[20px] md:gap-[50px] w-full max-w-[1410px] mx-auto py-[35px] md:py-16"
    >
      <h2 className="px-4 md:px-0 w-full max-w-[690px] font-semibold text-[30px] md:text-[52px] md:text-center leading-[36px]">
        <span className="font-semibold text-[#131513]">
          {translatedData.heading.part1}
        </span>
        <span className="font-[600] text-[#01db60] font-h2 tracking-[0] leading-[normal]">
          {translatedData.heading.highlight}
        </span>
        <span className="font-semibold text-[#131513]">
          {translatedData.heading.part2}
        </span>
      </h2>

      {/* Mobile version */}
      <div className="w-full flex flex-col gap-6 md:hidden px-4">
        {translatedData.cards.map((card, index) => (
          <Card
            key={index}
            className={`group w-full rounded-xl overflow-hidden transition-colors duration-300 ${
              card.isHighlighted
                ? "bg-brand-green hover:bg-[#01db60]"
                : "bg-white hover:bg-[#01db60]"
            }`}
          >
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <div
                  className={`text-base ${
                    card.isHighlighted
                      ? "text-cream group-hover:text-white"
                      : "text-brand-color group-hover:text-white"
                  }`}
                >
                  {card.title}
                </div>
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  width={24}
                  height={24}
                  className="brightness-0 group-hover:invert group-hover:brightness-[2]"
                />
              </div>
              <div
                className={`text-[32px] font-medium ${
                  card.isHighlighted
                    ? "text-cream group-hover:text-white"
                    : "text-brand-color group-hover:text-white"
                }`}
              >
                {card.value}
              </div>
              <p
                className={`text-sm ${
                  card.isHighlighted
                    ? "text-cream group-hover:text-white"
                    : "text-brand-color group-hover:text-white"
                }`}
              >
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}

        <div className="w-full relative aspect-[1.2] rounded-xl overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Modern modular home bedroom"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            className="object-cover"
            placeholder="blur"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          />
        </div>
      </div>

      {/* 💻 Desktop version */}
      <div className="hidden md:flex flex-wrap justify-center gap-[30px] w-full">
        <div className="flex flex-col w-[330px] gap-8">
          {translatedData.cards
            .slice(0, 3)
            .map((card, index) => renderCard(card, index, "first"))}
        </div>
        <div className="flex flex-col w-[330px] gap-8">
          {translatedData.cards
            .slice(3, 6)
            .map((card, index) => renderCard(card, index, "second"))}
        </div>
        <div className="w-full px-4 sm:px-0 md:max-w-[690px] mx-auto">
          <div className="relative aspect-square w-full">
            <Image
              src={backgroundImage}
              alt="Modern modular home bedroom"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 690px"
              placeholder="blur"
              style={{ filter: "brightness(0.95) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-0 flex justify-center">
        <ContactButtonWithModal
          translated={translatedData.modal}
          buttonText={translatedData.button}
          className="w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px] font-normal"
        />
      </div>
    </section>
  );
};

export default InformationSectionClient;

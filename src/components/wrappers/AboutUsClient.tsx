"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactButtonWithModal from "@/components/wrappers/ContactButtonWithModal";
import InformationSectionClient from "@/components/wrappers/InformationSectionClient";
import ModalForm from "@/components/ui/ModalForm";
import type { StaticImageData } from "next/image";

interface TranslatedData {
  title: string;
  subtitle: string;
  topSection: {
    title: {
      part1: string;
      highlight: string;
    };
  };
  bottomSection: {
    title: {
      part1: string;
      highlight: string;
      part2: string;
    };
  };
  contactUs: string;
  sectionImage: string;
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

interface CardData {
  title: string;
  value: string;
  description: string;
  icon: StaticImageData;
  iconAlt: string;
  isHighlighted: boolean;
}

interface InfoSectionData {
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
  topParagraphs: string[];
  bottomParagraphs: string[];
  TopImage: StaticImageData;
  BottomImage: StaticImageData;
  translatedModal: ModalTranslations;
  infoData: InfoSectionData; 
  backgroundImage: StaticImageData; 
}

const AboutUsClient: React.FC<Props> = ({
  translatedData,
  topParagraphs,
  bottomParagraphs,
  TopImage,
  BottomImage,
  translatedModal,
  infoData,
  backgroundImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile blocks */}
      <section className="flex flex-col lg:hidden sm:max-w-[1400px] mx-auto px-4 py-[30px]">
        <h1 className="font-semibold text-3xl sm:text-[40px] mb-3 sm:mb-4">
          {translatedData.title}
        </h1>
        <p className=" text-base sm:text-lg mb-6 sm:mb-12">
          {translatedData.subtitle}
        </p>

        <div className="relative w-full h-[200px] sm:h-[287px] rounded-[16px] overflow-hidden">
          <Image
            src={TopImage}
            alt={translatedData.sectionImage}
            fill
            className="object-cover"
          />
        </div>
      
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg ">
          {topParagraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>

        <ContactButtonWithModal
          buttonText={translatedData.contactUs}
          className="mt-[30px] w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
          translated={translatedModal}
        />
      </section>

      <div className="block lg:hidden">
        <InformationSectionClient
          translatedData={infoData}
          backgroundImage={backgroundImage}
        />
      </div>

      <section className="flex flex-col gap-6 sm:gap-8 lg:hidden sm:max-w-[1400px] mx-auto px-4 py-6 sm:py-8">
        <div className="relative w-full h-[200px] sm:h-[287px] rounded-[16px] overflow-hidden">
          <Image
            src={BottomImage}
            alt={translatedData.sectionImage}
            fill
            className="object-cover"
          />
        </div>
        <h2 className=" text-[26px] font-semibold leading-tight sm:text-[32px] pt-[30px]">
          {translatedData.bottomSection.title.part1}{" "}
          <span className="text-[#00D95C]">
            {translatedData.bottomSection.title.highlight}
          </span>{" "}
          {translatedData.bottomSection.title.part2}
        </h2>
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg ">
          {bottomParagraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
        <ContactButtonWithModal
          buttonText={translatedData.contactUs}
          className="mt-[30px] w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
          translated={translatedModal}
        />
      </section>

      {/* Modal component */}
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translatedModal}
      />
    </>
  );
};

export default AboutUsClient;
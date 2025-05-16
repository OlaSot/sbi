"use client";

import React, { useState } from "react";
import harmonyImage from "@/assets/background/harmony.webp";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { MobileDisplaySection } from "@/components/sections/MobileDisplaySection";
import ModalForm from "@/components/ui/ModalForm";

type Props = {
  title: {
    part1: string;
    highlight: string;
  };
  paragraphs: string[];
  buttonText: string;
  translated: {

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

const ImageDecorationSectionClient: React.FC<Props> = ({
  title,
  paragraphs,
  buttonText,
  translated,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <MobileDisplaySection
        image={harmonyImage}
        title={
          <>
            {title.part1} <span className="text-[#01db60]">{title.highlight}</span>
          </>
        }
        paragraph={paragraphs.join(" ")}
        buttonText={buttonText}
        onButtonClick={() => setIsModalOpen(true)}
      />

      {/* Desktop */}
      <section className="hidden md:flex flex-col w-full items-center gap-[50px] relative">
        <ImageTextSection
          image={harmonyImage}
          imagePosition="left"
          title={
            <>
              {title.part1} <span className="text-[#01db60]">{title.highlight}</span>
            </>
          }
          paragraphs={paragraphs}
          buttonText={buttonText}
          translated={translated}
          onButtonClick={() => setIsModalOpen(true)}
        />
      </section>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translated} 
      />
    </>
  );
};

export default ImageDecorationSectionClient;
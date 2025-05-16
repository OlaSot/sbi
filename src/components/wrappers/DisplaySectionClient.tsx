"use client";

import React, { useState } from "react";
import DisplayImage from "@/assets/img_sec_bg.webp";
import { ImageTextSection } from "../sections/ImageTextSection";
import { MobileDisplaySection } from "../sections/MobileDisplaySection";
import ModalForm from "../ui/ModalForm";

type Props = {
  title: React.ReactNode;
  paragraph: string;
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

export default function DisplaySectionClient({
  title,
  paragraph,
  buttonText,
  translated,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translated}
      />

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <MobileDisplaySection
          image={DisplayImage}
          title={title}
          paragraph={paragraph}
          buttonText={buttonText}
          onButtonClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Десктопная версия */}
      <section className="hidden md:block w-full mx-auto px-4 sm:px-6 md:px-4 2xl:px-0">
        <ImageTextSection
          image={DisplayImage}
          imagePosition="right"
          title={title}
          paragraphs={[paragraph]}
          buttonText={buttonText}
          onButtonClick={() => setIsModalOpen(true)}
          translated={translated} 
        />
      </section>
    </>
  );
}
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/Button";

type MobileDisplaySectionProps = {
  title: React.ReactNode;
  image: StaticImageData;
  paragraph: string;
  buttonText: string;
  onButtonClick?: () => void;
};

export const MobileDisplaySection: React.FC<MobileDisplaySectionProps> = ({
  title,
  image,
  paragraph,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="md:hidden w-full py-[35px] text-center">
      <h2 className="text-[30px] text-black font-semibold leading-snug px-4  mb-6">
        {title}
      </h2>

      <div className="w-full h-[320px] mb-6 relative">
        <Image
          src={image}
          alt="Section image"
          className="object-cover"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </div>

      <p className="text-[18px] text-left px-4 text-[#131513] mb-6  leading-relaxed">
        {paragraph}
      </p>

      <div className="px-4">
        <Button
          onClick={onButtonClick}
          className="w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

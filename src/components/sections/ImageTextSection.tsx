import React from "react";
import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Button } from "../ui/Button";
import ContactButtonWithModal from "../wrappers/ContactButtonWithModal";

interface ImageTextSectionProps {
  image: StaticImageData | string;
  title: ReactNode;
  paragraphs: string[];
  buttonText?: string;
  hideMobile?: boolean;
  imagePosition?: "left" | "right";
  onButtonClick?: () => void;
  imageAlt?: string;
  translated?: {
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

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  image,
  title,
  paragraphs,
  hideMobile,
  buttonText,
  imagePosition = "left",
  onButtonClick,
  translated,
  imageAlt,
}) => {
  const isLeft = imagePosition === "left";
  const altText = imageAlt || "Section image";

  return (
    <section className="w-full md:mb-[120px] ">
      {/* Мобильная и планшетная версия */}
      {!hideMobile && (
        <div className="flex flex-col lg:hidden">
          <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
            <Image
              src={image}
              alt={altText}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              placeholder="blur"
            />
          </div>

          <div className="px-4 py-8 sm:px-6 md:px-10 max-w-[800px] mx-auto">
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#141514] mb-4">
              {title}
            </h2>

            <div className="flex flex-col gap-4 text-[#141514] text-base sm:text-lg leading-relaxed mb-6">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            {buttonText && (
              <Button
                onClick={onButtonClick}
                className="px-[50px] py-3.5 bg-[#01db60] rounded-[90px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-lg hover:bg-[#01db60]/90"
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Десктопная версия */}
      <div className="hidden lg:flex relative w-full min-h-[640px]">
        <div
          className={`absolute top-0 ${
            isLeft ? "left-0" : "right-0"
          } w-1/2 h-full overflow-hidden ${
            isLeft
              ? "rounded-tr-[16px] rounded-br-[16px]"
              : "rounded-tl-[16px] rounded-bl-[16px]"
          }`}
        >
          <Image
            src={image}
            alt={altText}
            fill
            className="object-cover"
            sizes="50vw"
            priority={true} placeholder="blur"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto flex">
          <div
            className={`flex flex-col justify-center pr-10 w-1/2 ${
              isLeft ? "ml-auto pr-0 pl-10" : ""
            }`}
          >
            <h2 className="text-[40px] font-semibold leading-snug text-[#141514] mb-6">
              {title}
            </h2>

            <div className="flex flex-col gap-6 text-[#141514] text-[18px] leading-relaxed mb-10">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            {buttonText && translated && (
              <ContactButtonWithModal
                className="w-fit px-[50px] py-[15px] bg-[#01db60] rounded-[90px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-lg hover:bg-[#01db60]/90"
                buttonText={buttonText}
                translated={translated}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

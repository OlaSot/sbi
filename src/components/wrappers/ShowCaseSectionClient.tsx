"use client";

import React, { useState, useRef } from "react";
import { Button } from "../ui/Button";
import image2 from "@/assets/people/2.webp";
import image3 from "@/assets/people/3.webp";
import image4 from "@/assets/people/4.webp";
import Image from "next/image";
import ModalForm from "../ui/ModalForm";

type Props = {
  title: {
    part1: string;
    highlight: string;
    part2: string;
  };
  buttonText: string;
  imageAlt: string;
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

export const ShowcaseSectionClient: React.FC<Props> = ({ title, buttonText, imageAlt, translated }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const showcaseImages = [
    { src: image2.src, hasObjectCover: true },
    { src: image3.src, hasObjectCover: false },
    { src: image4.src, hasObjectCover: true },
    { src: image2.src, hasObjectCover: false },
    { src: image4.src, hasObjectCover: true },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const imageWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col max-w-[1400px] mx-auto px-4 py-[35px] md:py-0">
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translated} 
      />

      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl md:text-[52px] font-semibold leading-tight text-center ">
          <span className="text-[#131513]">{title.part1}</span>
          <span className="text-[#01db60]">{title.highlight}</span>
          <span className="text-[#131513]">{title.part2}</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="relative w-full h-[260px] mb-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        <div className="flex gap-4 w-max px-1">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center relative"
              style={{ width: "358px", height: "260px" }}
            >
              <Image
                src={image.src}
                alt={`${imageAlt} ${index + 1}`}
                fill
                className={`rounded-[12px] ${
                  image.hasObjectCover ? "object-cover" : "object-contain"
                }`}
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <div className="flex justify-center gap-1.5 mb-6">
        {showcaseImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#01DB60]" : "bg-gray-300"
            }`}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Button
          className="w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
          onClick={() => setIsModalOpen(true)}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};